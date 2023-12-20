"use client";

import styles from "../loanrequest/loanrequest.module.scss";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LogoutIcon } from "@/src/utility/svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, Table } from "antd";
import Link from "next/link";
import { channels } from "@/src/assets/channels.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "@/src/utility/constants";
import { useAuth } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";

const SequenceData = () => {
  const router = useRouter();
  const [channels, setChannels] = useState([]);
  const { user } = useAuth();
  const storedToken = user?.token
  if (storedToken === undefined) {
    router.push("/")
  } else {
    console.log("we are good")
  }
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(
          `${baseUrl}/sequence?status=unapproved`,
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
        setChannels(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);





  const generateViewsContent = (record) => (
    <div className={styles.viewBtn}>
      <Link href={`/dashboard/${record["change-id"]}`}>
        <button style={{ cursor: "pointer" }}>View details</button>
      </Link>
    </div>
  );

  const columns = [
    {
        title: "S/N",
        dataIndex: "sno",
        key: "sno",
      },
      {
        title: "Aggr-Code",
        dataIndex: "aggr-code",
        key: "aggr-code",
      },
    {
      title: "Code",
      dataIndex: "appl-code",
      key: "appl-code",
    },
    
    {
      title: "Date",
      dataIndex: "entry-date",
      key: "entry-date",
    },

    {
      title: "exec-seq",
      dataIndex: "exec-seq",
      key: "exec-seq",
    },
    {
      title: "entered-by",
      dataIndex: "entered-by",
      key: "entered-by",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => generateViewsContent(record),
    },
  ];

  const handleRowClick = (record) => {
    router.push(`/dashboard/${record["change-id"]}`);
  };

  const rowProps = (record) => {
    return {
      onClick: () => handleRowClick(record),
    };
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.tableSection}>
        <Table columns={columns} dataSource={channels} onRow={rowProps} />
      </div>

    
    </section>
  );
};

export default SequenceData;

//
