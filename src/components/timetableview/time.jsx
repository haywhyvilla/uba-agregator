"use client";
import styles from "../aggregator/loanrequest.module.scss"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import PageHeader from "../aggregator/pageHeader";
import { Dropdown, Space, Modal, Form, Spin, Input } from "antd";
import Button from "@mui/material/Button";
import { baseUrl } from "@/src/utility/constants";
import { useAuth } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";



const Timetable = () => {
  const router = useRouter();
      const [files, setFiles] = useState([]);
    const [unApproved, setUnApproved] = useState([])
    const { user } = useAuth();
    const storedToken = user?.token
    if (storedToken === undefined) {
      router.push("/")
    } else {
      console.log("we are good")
    }

    const fetchData = async () => {
        try {
          // Make a GET request to the specified endpoint
          const response = await axios.get(
            `${baseUrl}/timetable?status=unapproved`,
            {
                headers: {
                    Authorization: `Bearer ${storedToken}`,
                    'Content-Type': 'application/json',
                    "ngrok-skip-browser-warning": "http://localhost:3000",
                  }
              }
          );
    
          // Set the fetched data to the state
          console.log(response.data.data.timetable);
          setFiles(response.data.data.timetable);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      const fetchData2 = async () => {
        try {
          // Make a GET request to the specified endpoint
          const response = await axios.get(
            `${baseUrl}/timetable?status=unapproved`,
            {
                headers: {
                    Authorization: `Bearer ${storedToken}`,
                    'Content-Type': 'application/json',
                    "ngrok-skip-browser-warning": "http://localhost:3000",
                  }
              }
          );
    
          // Set the fetched data to the state
          console.log(response);
          setUnApproved(response.data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
   
        fetchData();
      }, []);

    return (
              <section className={styles.dashboard}>
      <PageHeader
            title={
              <Typography variant='h4' sx={{ mb: 2, mt: 3, fontSize: "2.6rem", }}>
               UnApproved Time table
              </Typography>
            }
            subtitle={
              <Typography sx={{ color: 'text.secondary', fontSize: "2rem", mb: 2, }}>
                Kindly Use this button to see unapproved timetable details and Approve.
              </Typography>
            }
          />

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
            <Link href={`/dashboard/dataproducts/${item["document-id"]}`}>
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