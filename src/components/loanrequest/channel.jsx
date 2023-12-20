"use client";
import React, { useEffect, useState } from "react";
import styles from "./loanrequest.module.scss";
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

const DetailsView = ({ channel }) => {
  const router = useRouter();
  const [channels, setChannels] = useState([]);
  const [value, setValue] = useState("Channels-details");
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

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(
          `${baseUrl}/channel/?status=unapproved&id=${channel}`,
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

  return (
    <section className={styles.dashboard}>
      <DetailsWrapper>
        <TabContext value={value}>
          <Tab
            value="Channels-details"
            label={
              <span
                style={{
                  color: "#393939",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Channel Details
              </span>
            }
          />

          <fieldset sx={{ marginBottom: "1200px" }}>
            <legend style={{ fontSize: "2rem", fontWeight: "700" }}>
              Channel Details
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
                      appl-code:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["appl-code"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      appl-name:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["appl-name"]}
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

                  {/* <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      entered-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channel["entered-by"]}
                    </TableCell>
                  </TableRow> */}

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      auth-flg:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["auth-flg"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      auth-date:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["auth-date"]}
                    </TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      auth-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["auth-by"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      vending-aggr-code:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channel["vending-aggr-code"]}
                    </TableCell>
                  </TableRow> */}

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      last-switch-date:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["last-switch-date"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      failure-threshold:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["failure-threshold"]}
                    </TableCell>
                  </TableRow>

                  {/* <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      data-aggr-code:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channel["data-aggr-code"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      auth-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["auth-by"]}
                    </TableCell>
                  </TableRow> */}

                  {/* <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      del-flag:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["del-flag"]}
                    </TableCell>
                  </TableRow> */}

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      del-date:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["del-date"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      del-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {channels["del-by"]}
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
          >
            Approve
          </Button>

          <Button
            type="submit"
            sx={{ mr: 2, backgroundColor: "#BB2525", fontSize: "1.8rem" }}
            variant="contained"
          >
            Decline
          </Button>
        </CardActions>
      </DetailsWrapper>
    </section>
  );
};

export default DetailsView;
