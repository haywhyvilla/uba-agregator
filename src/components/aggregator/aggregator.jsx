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

const DetailsView = ({ aggregator }) => {
  const [aggregators, setAggregators] = useState([]);
  const [value, setValue] = useState("Aggregator-details");

  const handleTabsChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(
          `http://16.170.182.130:9898/nip/aggregator?status=approved&id=${aggregator}`
        );

        // Set the fetched data to the state
        console.log("llllllllllllllllllllll", response.data.data);
        setAggregators(response.data.data[0]);
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
            value="Agregator-details"
            label={
              <span
                style={{
                  color: "#393939",
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                Aggregator Details
              </span>
            }
          />

          <fieldset sx={{ marginBottom: "1200px" }}>
            <legend style={{ fontSize: "2rem", fontWeight: "700" }}>
              Aggregator Details
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
                      aggregator-name:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["aggregator-name"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      aggregator-code:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["aggregator-code"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      created-by:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["created-by"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      creation-date:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["creation-date"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      change-id:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["change-id"]}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      change-status:
                    </TableCell>
                    <TableCell
                      style={{ fontSize: "1.8rem", fontWeight: "600" }}
                    >
                      {aggregators["change-status"]}
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
