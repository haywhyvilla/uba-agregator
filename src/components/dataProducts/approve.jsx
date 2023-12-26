"use client";
import React, { useEffect, useState } from "react";
import styles from "../loanrequest/loanrequest.module.scss";
import { DetailsWrapper } from "../../utility/style";
import axios from "axios";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Divider from "@mui/material/Divider";
import { baseUrl } from "@/src/utility/constants";
import { useAuth } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const DetailsView = ({ channel }) => {
  const router = useRouter();
  const [channels, setChannels] = useState([]);
  const [value, setValue] = useState("Data-Products-details");
  const { user } = useAuth();
  const storedToken = user?.token
  if (storedToken === undefined) {
    router.push("/")
  } else {
    console.log("we are good")
  }

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(channels)

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(
          `${baseUrl}/data-product?status=unapproved&id=${channel}`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
              "ngrok-skip-browser-warning": "http://localhost:3000",
            }
          }
        );

        // Set the fetched data to the state
        console.log("llllllllllllllllllllll", response.data.data);
        setChannels(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const handleApprove = async () => {


    const formData = {
      "document-id": channel,
      "status": true,
    
    };
    console.log(formData)
    try {
      // Make an HTTP POST request to your endpoint
      const response = await axios.post(`${baseUrl}/approve/data-product`, formData, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "http://localhost:3000",
        }
      })
      toast.success('Request Approved Successfully')
      router.push("/dashboard/sequence/aggregatorSequence");
      console.log(response)
    
    } catch (error) {
      toast.error('Error Declining Request')
      console.error('Error Declining Request', error)
    }
  }


  return (
  
    <section className={styles.dashboard}>
      <DetailsWrapper>
        <TabContext value={value}>
          <Tab
            value="Data-Products-details"
            label={
              <span
                style={{
                  color: "#393939",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Data Products Details
              </span>
            }
          />

          <fieldset sx={{ marginBottom: "1200px" }}>
            <legend style={{ fontSize: "2rem", fontWeight: "700" }}>
            Data Products Details
            </legend>

            <TableContainer
              sx={{
                borderRadius: "6px !important",
                border: (theme) => `1px solid ${theme.palette.divider}`,
                borderBottom: (theme) => `2px solid ${theme.palette.divider}`,
                "& .MuiTab-root": { py: 3.5 },
                marginBottom: "20px",
              }}
            >
              <Table sx={{ minWidth: 200 }}>
                <TableBody>
                

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      biller-id:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["biller-id"]}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      biller-name:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["biller-name"]}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      entry-date:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["entry-date"]}
                    </TableCell>
                  </TableRow>

                

             

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                     entered-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["entered-by"]}
                    </TableCell>
                  </TableRow>

                 

                

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      document-id:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["document-id"]}
                    </TableCell>
                  </TableRow>
               

           
                </TableBody>
              </Table>
            </TableContainer>
          </fieldset>
        </TabContext>

        <CardActions>
          <Button
            type="submit"
            sx={{ mr: 2, backgroundColor: "#71ace0", fontSize: "1.8rem" }}
            variant="contained"
            onClick={e => {
                e.preventDefault() // Add this line
                if (window.confirm('Are you sure you want to Approve this request?')) {
                  handleApprove() // Pass the event object
                } else {
                  // Handle the 'Cancel' case if needed
                }
              }}
          >
            Approve
          </Button>
        </CardActions>
      </DetailsWrapper>
    </section>

  );
};

export default DetailsView;
