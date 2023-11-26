"use client";

// ** React Imports
import { useState } from "react";

// ** MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// ** Icon Imports
import Icon from "./icons";

// ** Third Party Imports
import { useDropzone } from "react-dropzone";

const FileUploaderSingle = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: ".csv",
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);

      try {
        // Replace with your actual API endpoint
        const response = await axios.post(
          "http://16.170.182.130:9898/nip/timetable",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 201) {
          console.log("File uploaded successfully");
          toast.success(response.data.message);
          // Handle success, e.g., show a success message
        } else {
          console.error("File upload failed");
          toast.error("File upload failed");
          // Handle failure, e.g., show an error message
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        // Handle other errors, e.g., network error
      }

      // Update the state with the selected files
      setFiles(acceptedFiles);
    },
  });

  return (
    <Box
      {...getRootProps({ className: "dropzone" })}
      sx={files.length ? { height: 450 } : {}}
    >
      <input {...getInputProps()} />
      {files.length ? (
        <div>
          {/* Display icon and name for each selected file */}
          {files.map((file) => (
            <Box key={file.name} display="flex" alignItems="center">
              <Icon icon="tabler:FileCopy" fontSize="1.5rem" mr={1} />
              <Typography variant="h6" sx={{ fontSize: "2.6rem" }}>
                {file.name}
              </Typography>
            </Box>
          ))}
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 8.75,
              width: 48,
              height: 48,
              display: "flex",
              borderRadius: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon icon="tabler:upload" fontSize="5rem" />
          </Box>
          <Typography variant="h4" sx={{ mb: 2.5, fontSize: "2.6rem" }}>
            Drop files here or click to upload.
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "2.6rem" }}>
            (Only CSV files are allowed. Selected files will be uploaded.)
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default FileUploaderSingle;
