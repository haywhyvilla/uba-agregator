"use client";
import styles from "./loanrequest.module.scss";
import addIcon from "@/src/assets/addIcon2.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LogoutIcon } from "@/src/utility/svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input } from "antd";
import Link from "next/link";
import { channels } from "@/src/assets/channels.svg";
import axios from "axios";

const Aggregator = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the specified endpoint
        const response = await axios.get(
          "http://16.170.182.130:9898/nip/aggregator?status=approved"
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

  return (
    <section className={styles.dashboard}>
      <div className={styles.card}>
      
        {channels.map((item, index) => (
          <div className={styles.eachcard} key={index}>
            <div className={styles.cardFlex}>
            <p>{item["aggregator-name"]}</p>
              <h2>{item["aggregator-code"]}</h2>
            </div>
            <div className={styles.cardRate}>
            <button>
                  {item["created-by"]}
                  {item["creation-date"]}
                </button>
                </div>
              <div className={styles.cardFlex}>
                
                <p>{item["change-id"]}</p>
                <p>{item["change-status"]}</p>
              </div>
              
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aggregator;

//
