"use client";
import styles from "../aggregator/loanrequest.module.scss";
import React, { useState, useEffect } from "react";
import { Dropdown, Space, Modal, Form, Spin, Input } from "antd";
import Link from "next/link";
import axios from "axios";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const Timetable = () => {
    const [files, setFiles] = useState([]);

    const fetchData = async () => {
        try {
          // Make a GET request to the specified endpoint
          const response = await axios.get(
            "http://16.170.182.130:9898/nip/timetable?status=unapproved"
          );
    
          // Set the fetched data to the state
          console.log(response.data.data.timetable);
          setFiles(response.data.data.timetable);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
   
        fetchData();
      }, []);
    return(
        <section className={styles.dashboard}>
              <div className={styles.card}>
        {files.map((item, index) => (
        
          <Card key={index}>
            <CardContent
              sx={{ p: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontSize: "2.5rem" }}>
                {item["document-name"]}
              </Typography>
              <Typography variant="h5" sx={{ mb: 2, fontSize: "2rem" }}>
                {item["document-id"]}
              </Typography>

              <Typography sx={{ mb: 2, fontSize: "2rem" }}>
                {item["upload-date"]}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "2rem" }}>
                by: {item["upload-by"]}
              </Typography>
            </CardContent>
            <Link href="#">
              <Button
                variant="contained"
                sx={{
                  cursor: "pointer",
                  fontSize: "2rem",
                  py: 2.5,
                  width: "100%",
                  backgroundColor: "#c63531",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  "&:hover": {
                    backgroundColor: "#c63531",
                  },
                }}
              >
                Veiw
              </Button>
            </Link>
          </Card>
        ))}
      </div>
        </section>
    )
}

export default Timetable
