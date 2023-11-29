"use client";
import React, { useEffect, useState } from "react";
import styles from "../aggregator/loanrequest.module.scss";
import { DetailsWrapper } from "../../utility/style";
import axios from "axios";
import { Table } from 'antd';


const DetailsView = ({ timetable }) => {
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            // Make a GET request to the specified endpoint
            const response = await axios.get(
                `http://16.170.182.130:9898/nip/timetable?status=unapproved&id=${timetable}`
              );
        
    
            // Set the fetched data to the state
            console.log(response.data.data.timetable);
            setData(response.data.data.timetable)
           const resData = response.data.data.timetable

           const generatedColumns = resData.map(column => ({
            title: column['appl-code'],
            dataIndex: column['id'],
            key: column['id'],
          }));

          const finalColumns = [
            {
              title: 'Timetable/Channel',
              dataIndex: 'time-hr',
              key: 'time-hr',
            },
            ...generatedColumns,
          ];

          setColumns(finalColumns);
          console.log(finalColumns)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        // Call the fetchData function
        fetchData();
      }, []);



 

  return (
    <section className={styles.dashboard} style={{overflowX: "scroll"}}>
      <Table columns={columns} dataSource={data} bordered pagination={{ pageSize: 10 }} />;
    
    </section>
  );
};

export default DetailsView;
