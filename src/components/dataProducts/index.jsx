"use client";

import styles from "../loanrequest/loanrequest.module.scss"
import { useEffect, useState } from "react";
import Link from "next/link";
import { Flex } from "antd";
import { baseUrl } from "@/src/utility/constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "@/src/context/AppContext";
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { makeStyles, Paper } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Typography from '@mui/material/Typography'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import { DropzoneArea } from 'material-ui-dropzone'
import { ExcelRenderer } from 'react-excel-renderer'
import { useRouter } from "next/navigation";

import Button from '@mui/material/Button'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  icon: {
    fontSize: 48,
    marginBottom: theme.spacing(2)
  },
  previewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },
  preview: {
    margin: theme.spacing(1),
    maxWidth: '100%',
    maxHeight: 200,
    objectFit: 'contain'
  },
  cardContent: {
    padding: theme.spacing(2),
    backgroundColor: '#f0f0f0', // Add a background color
    borderRadius: theme.spacing(1) // Add some border radius
  },
  fileName: {
    // Customize the styling for file names
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1) // Add some spacing between file names
  }
}))

const StyledTableContainer = styled(TableContainer)`
  margin-top: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; /* Set the width to 100% */

  & .MuiTableHead-root {
    background-color: #71ace0;
    color: #fff;
  }

  & .MuiTableCell-root {
    border-bottom: 2px solid #fff;
    font-weight: 600;
  }

  & .MuiTableRow-root:nth-of-type(odd) {
    background-color: #f5f5f5;
  }

  & .MuiTableRow-root:hover {
    background-color: #eff8ff;
  }
`




const Sequence = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [filePreview, setFilePreview] = useState(null)
  const [fileData, setFileData] = useState([])
  const [selectedFiles, setSelectedFiles] = useState([])
  const [fileDataa, setFileDataa] = useState(null)
  const handleDialogToggle = () => setOpen(!open)
  const [isButtonDisabled, setButtonDisabled] = useState(false)
  const [excelData, setExcelData] = useState([])
  const { user } = useAuth();
  const storedToken = user?.token
  if (storedToken === undefined) {
    router.push("/")
  } else {
    console.log("we are good")
  }


  const handleExcelFile = file => {
    console.log('Excel file:', file.name)

    // Use the react-excel-renderer library to parse Excel file
    ExcelRenderer(file, (err, resp) => {
      if (err) {
        console.log(err)
      } else {
        // Handle the parsed Excel data
        setExcelData(resp.rows)

        // For demonstration purposes, let's set the preview to a success message
        setFilePreview('Excel file parsed successfully')

        //setOpenPreviewDialog(true);
        handleDialogToggle() // Open the dialog to display Excel data

        // console.log(typeof file);
        // const fileArray = Object.values(file);
        // // Now you can use map
        // fileArray.map(item => item.file)
        // // Set your state with the mapped data
        // setFileData(fileArray);
      }
    })
  }

  const handlePdfFile = file => {
    console.log('PDF file:', file.name)

    // Implement logic for PDF files
    // Example: Open the PDF in a new tab
    // window.open(URL.createObjectURL(file));
    // For demonstration purposes, let's just set the preview to the file name
    setFilePreview(file.name)

    //setOpenPreviewDialog(true);
    handleDialogToggle() // Open the dialog to display Excel data
  }

  const handleImageFile = file => {
    console.log('Image file:', file.name)

    // Implement logic for image files
    // Example: Display the image using an HTML img element
    // setFilePreview(URL.createObjectURL(file));
    setFilePreview(URL.createObjectURL(file))

    //setOpenPreviewDialog(true);
    handleDialogToggle() // Open the dialog to display Excel data
  }

  const handleFileChange = files => {
    console.log('typeofvfssssssssssssssssssssssssssss', typeof files)
    setSelectedFiles(files)
    setFilePreview(null) // Reset the filePreview state
    console.log('vvvvvvvvvvvvvvv', selectedFiles)
    setFileDataa(files)

    //setFileDataa(files.map(file => file.name));

    setFileData(files.map(file => file.name))

    // console.log('Na my file data be this o o o', fileData);
    files.forEach(file => {
      const fileExtension = file.name.split('.').pop().toLowerCase()

      if (['xls', 'xlsx', "csv"].includes(fileExtension)) {
        // Handle Excel file logic
        console.log('Excel file:', file.name)

        // Implement logic for Excel files
        handleExcelFile(file)
      } else if (fileExtension === 'pdf') {
        // Handle PDF file logic
        console.log('PDF file:', file.name)

        // Implement logic for PDF files
        handlePdfFile(file)
      } else if (['jpg', 'jpeg', 'png'].includes(fileExtension)) {
        // Handle image file logic
        console.log('Image file:', file.name)

        // Implement logic for image files
        handleImageFile(file)
      } else {
        // Unsupported file type
        console.log('Unsupported file type:', file.name)
        alert('Please choose a valid file with the following extensions: xls, xlsx, jpeg, jpg, png, pdf, docx')
        files.target.value = null
        setSelectedFiles('')
      }
    })
  }

  // // Add a generic function to handle any type of file
  // const handleFile = file => {
  //   console.log('Generic file handling logic:', file.name);
  //   // Implement logic for handling any type of file here
  // }

  const handleSubmit = async e => {
    // Disable the button
    setButtonDisabled(true)
    e.preventDefault()

    // You can access form values from the state (values, months, etc.)
    const formData = {
      test: fileDataa
    }

    console.log('newwwwwwwwwwwwwwwwwwwwwwwwwwwwwww', formData)

  

    try {
      // Make an HTTP POST request to your endpoint
      const response = await axios.post(`${baseUrl}/data-product`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'multipart/form-data',
          "ngrok-skip-browser-warning": "http://localhost:3000",
        }
      })

      // Handle the response as needed
      toast.success(response.data.message)
      console.log('Form submitted successfully', response.data)

    } catch (error) {
      // Handle errors
      toast.error(error.response.data.message)
      console.error('Error submitting form', error)
    } finally {
      setTimeout(() => {
        // Re-enable the button
        setButtonDisabled(false)
      }, 2000) // Adjust the time (in milliseconds) to your desired delay
    }
  }
  
      
      
      

    return (
        <div style={{padding: "5rem"}}>
            <Link href={`/dashboard/products/dataProducts`}>
      <p
       style={{
         backgroundColor: '#f50606',
         color: '#ffffff',
         padding: '10px 15px',
         borderRadius: '5px',
         cursor: 'pointer',
         display: 'inline-block',
         float: 'left',
          marginBottom: "3rem"
       }}
     >
       Data Products details
     </p>
      </Link>
       <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <CardActions>
                              <fieldset style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <legend>Attached Document</legend>
                                <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <form onSubmit={handleSubmit}>
                                  <CardContent>
                                    <Paper elevation={3} className={classes.root}>
                                      <CloudUploadIcon className={classes.icon} color='primary' />
                                      <Typography variant='h6' color='primary'>
                                        Upload Files
                                      </Typography>
                                      <div>
                                        <DropzoneArea
                                          acceptedFiles={['image/*', '.pdf', '.xls', '.xlsx', '.csv']}
                                          onChange={handleFileChange}
                                          showAlerts={false}
                                          dropzoneText='Drag and drop images, PDFs, or Excel files here or click'
                                          showPreviewsInDropzone={false}
                                          showPreviews={false}
                                          filesLimit={10} // Set your preferred limit
                                        />
                                      </div>
                                      {/* <div style={{  p: 2, display: 'flex', flexDirection: 'row', mb:30  }}>
                           <Button variant="contained" onClick={handleDialogToggle}>
                            Upload
                          </Button>
                          </div> */}
                                      <Dialog fullWidth maxWidth='md' onClose={handleDialogToggle} open={open}>
                                        <DialogTitle>File Preview: {filePreview}</DialogTitle>
                                        <Divider />
                                        <DialogContent>
                                          {filePreview && (
                                            <div>
                                              <Typography>Preview:</Typography>
                                              {/* Render the file preview based on its type */}
                                              {selectedFiles[0]?.type === 'application/pdf' ? (
                                                <iframe
                                                  title='PDF Preview'
                                                  src={URL.createObjectURL(selectedFiles[0])}
                                                  width='100%'
                                                  height='500px'
                                                  style={{ border: 'none' }}
                                                />
                                              ) : selectedFiles[0]?.type === 'application/vnd.ms-excel' ||
                                                selectedFiles[0]?.type ===
                                                  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ? (
                                                <div>
                                                  {excelData.length > 0 ? (
                                                    <StyledTableContainer component={Paper}>
                                                      <Table>
                                                        <TableHead>
                                                          <TableRow>
                                                            {excelData[0].map((header, index) => (
                                                              <TableCell key={index}>{header}</TableCell>
                                                            ))}
                                                          </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                          {excelData.slice(1).map((row, rowIndex) => (
                                                            <TableRow key={rowIndex}>
                                                              {row.map((cell, cellIndex) => (
                                                                <TableCell key={cellIndex}>
                                                                  {typeof cell === 'number' ? cell.toFixed(2) : cell}
                                                                </TableCell>
                                                              ))}
                                                            </TableRow>
                                                          ))}
                                                        </TableBody>
                                                      </Table>
                                                    </StyledTableContainer>
                                                  ) : (
                                                    <Typography>No data to display</Typography>
                                                  )}
                                                </div>
                                              ) : (
                                                <img
                                                  src={filePreview}
                                                  alt='File Preview'
                                                  style={{ maxWidth: '100%', maxHeight: '400px' }}
                                                />
                                              )}
                                            </div>
                                          )}
                                        </DialogContent>
                                      </Dialog>
                                    </Paper>
                                  </CardContent>
                                  {/* Display the selected file names in CardContext */}
                                  <CardContent className={classes.cardContent}>
                                    <Typography variant='body1' color='textSecondary'>
                                      Selected Files:
                                    </Typography>
                                    {fileData.map((fileName, index) => (
                                      <Typography
                                        key={index}
                                        variant='body2'
                                        color='textSecondary'
                                        className={classes.fileName}
                                      >
                                        {fileName}
                                      </Typography>
                                    ))}
                                  </CardContent>
                                  <Divider sx={{ m: '0 !important' }} />
                  <CardActions>
                    <Button
                      type='submit'
                      sx={{ mr: 2, backgroundColor: '#f50606' }}
                      variant='contained'
                      disabled={isButtonDisabled}
                    >
                      {isButtonDisabled ? 'Processing...' : 'Submit'}
                    </Button>
                  </CardActions>
                                  </form>
                                </Box>

                                {/* <Dialog fullWidth maxWidth="md" onClose={handleDialogToggle} open={open}>
                              <DialogTitle>Excel Data: {selectedFile}</DialogTitle>
                              <Divider />
                              <DialogContent>
                                {excelData.length > 0 ? (
                                  <StyledTableContainer component={Paper}>
                                    <Table>
                                      <TableHead>
                                        <TableRow>
                                          {excelData[0].map((header, index) => (
                                            <TableCell key={index}>{header}</TableCell>
                                          ))}
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {excelData.slice(1).map((row, rowIndex) => (
                                          <TableRow key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                              <TableCell key={cellIndex}>
                                                {typeof cell === 'number' ? cell.toFixed(2) : cell}
                                              </TableCell>
                                            ))}
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </StyledTableContainer>
                                ) : (
                                  <Typography>No data to display</Typography>
                                )}

                                        {filePreview && selectedFile && (
                                            <CardMedia
                                              component="img"
                                              alt="File Preview"
                                              height="140"
                                              image={filePreview}
                                            />
                                          )}

                              </DialogContent>
                            </Dialog>
                       */}
                              </fieldset>
                            </CardActions>
                          </div>

    </div>
    )
}

export default Sequence