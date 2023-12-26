"use client";
import styles from "../aggregator/loanrequest.module.scss";
import React, { useState, useEffect } from "react";
// import { Dropdown, Space, Modal, Form, Spin, Input } from "antd";
import Link from "next/link";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import PageHeader from "../aggregator/pageHeader";
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
import { baseUrl } from "@/src/utility/constants";
import { useAuth } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";

const Timetable = () => {
  const router = useRouter();
  const { user } = useAuth();
  const storedToken = user?.token
  if (storedToken === undefined) {
    router.push("/")
  } else {
    console.log("we are good")
  }
    // const [files, setFiles] = useState([]);
    // const [unApproved, setUnApproved] = useState([])

    // const fetchData = async () => {
    //     try {
    //       // Make a GET request to the specified endpoint
    //       const response = await axios.get(
    //         "http://16.170.182.130:9898/nip/timetable?status=unapproved"
    //       );
    
    //       // Set the fetched data to the state
    //       console.log(response.data.data.timetable);
    //       setFiles(response.data.data.timetable);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   const fetchData2 = async () => {
    //     try {
    //       // Make a GET request to the specified endpoint
    //       const response = await axios.get(
    //         "http://16.170.182.130:9898/nip/timetable?status=unapproved"
    //       );
    
    //       // Set the fetched data to the state
    //       console.log(response);
    //       setUnApproved(response.data.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     }
    //   };

    //   useEffect(() => {
   
    //     fetchData();
    //   }, []);

    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/timetable?status=approved`,
            {
              headers: {
                Authorization: `Bearer ${storedToken}`,
                'Content-Type': 'application/json',
                "ngrok-skip-browser-warning": "http://localhost:3000",
              }
            }
          );
    
          console.log(response.data.data.timetable);
          setData(response.data.data.timetable);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
  
    const columns = [
      {
        title: 'Application Code',
        dataIndex: 'appl-code',
        key: 'appl-code',
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          // ... (filter dropdown code)
          <div style={{ padding: 8 }}>
            {/* Filter input for 'appl-code' */}
            <Input
              placeholder="Search Application Code"
              value={selectedKeys[0]}
              onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => confirm()}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            {/* Buttons for search and reset */}
            <Space>
              <Button
                type="primary"
                onClick={() => confirm()}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        onFilter: (value, record) => record['appl-code'].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
          // ... (filter dropdown visible change code for 'appl-code')
        },
      },
  
      {
          title: 'Aggregator Code',
          dataIndex: 'aggr-code',
          key: 'aggr-code',
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            // ... (filter dropdown code)
            <div style={{ padding: 8 }}>
              {/* Filter input for 'appl-code' */}
              <Input
                placeholder="Search Application Code"
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => confirm()}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
              />
              {/* Buttons for search and reset */}
              <Space>
                <Button
                  type="primary"
                  onClick={() => confirm()}
                  icon={<SearchOutlined />}
                  size="small"
                  style={{ width: 90 }}
                >
                  Search
                </Button>
                <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                  Reset
                </Button>
              </Space>
            </div>
          ),
          onFilter: (value, record) => record['aggr-code'].toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            // ... (filter dropdown visible change code for 'appl-code')
          },
        },
  
        {
          title: 'Time',
          dataIndex: 'time-hr',
          key: 'time-hr',
          filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            // ... (filter dropdown code)
            <div style={{ padding: 8 }}>
              {/* Filter input for 'appl-code' */}
              <Input
                placeholder="Search Application Code"
                value={selectedKeys[0]}
                onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                onPressEnter={() => confirm()}
                style={{ width: 188, marginBottom: 8, display: 'block' }}
              />
              {/* Buttons for search and reset */}
              <Space>
                <Button
                  type="primary"
                  onClick={() => confirm()}
                  icon={<SearchOutlined />}
                  size="small"
                  style={{ width: 90 }}
                >
                  Search
                </Button>
                <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                  Reset
                </Button>
              </Space>
            </div>
          ),
          onFilter: (value, record) => record['time-hr'].toString().toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: (visible) => {
            // ... (filter dropdown visible change code for 'appl-code')
          },
        },
      // ... (other columns)
    ];
    
  
    const generateViewsContent = (record) => {
      // Your logic here
      return <span>Action for {record['key']}</span>;
    };
    return(
//         <section className={styles.dashboard}>
//               <div className={styles.card}>
//         {files.map((item, index) => (
        
//           <Card key={index}>
//             <CardContent
//               sx={{ p: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
//             >
//               <Typography variant="h5" sx={{ mb: 2, fontSize: "2.5rem" }}>
//                 {item["document-name"]}
//               </Typography>
//               <Typography variant="h5" sx={{ mb: 2, fontSize: "2rem" }}>
//                 {item["document-id"]}
//               </Typography>

//               <Typography sx={{ mb: 2, fontSize: "2rem" }}>
//                 {item["upload-date"]}
//               </Typography>
//               <Typography sx={{ color: "text.secondary", fontSize: "2rem" }}>
//                 by: {item["upload-by"]}
//               </Typography>
//             </CardContent>
//             <Link href={`/dashboard/dataproducts/${item["document-id"]}`}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   cursor: "pointer",
//                   fontSize: "2rem",
//                   py: 2.5,
//                   width: "100%",
//                   backgroundColor: "#c63531",
//                   borderTopLeftRadius: 0,
//                   borderTopRightRadius: 0,
//                   "&:hover": {
//                     backgroundColor: "#c63531",
//                   },
//                 }}
//               >
//                 Veiw
//               </Button>
//             </Link>
//           </Card>
//         ))}
//       </div>
//       <PageHeader
//             title={
//               <Typography variant='h4' sx={{ mb: 2, mt: 3, fontSize: "2.6rem", }}>
//                UnApproved Time table
//               </Typography>
//             }
//             subtitle={
//               <Typography sx={{ color: 'text.secondary', fontSize: "2rem", mb: 2, }}>
//                 Kindly Use this button to see unapproved timetable details and Approve.
//               </Typography>
//             }
//           />

// <div className={styles.card}>
//         {files.map((item, index) => (
        
//           <Card key={index}>
//             <CardContent
//               sx={{ p: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
//             >
//               <Typography variant="h5" sx={{ mb: 2, fontSize: "2.5rem" }}>
//                 {item["document-name"]}
//               </Typography>
//               <Typography variant="h5" sx={{ mb: 2, fontSize: "2rem" }}>
//                 {item["document-id"]}
//               </Typography>

//               <Typography sx={{ mb: 2, fontSize: "2rem" }}>
//                 {item["upload-date"]}
//               </Typography>
//               <Typography sx={{ color: "text.secondary", fontSize: "2rem" }}>
//                 by: {item["upload-by"]}
//               </Typography>
//             </CardContent>
//             <Link href={`/dashboard/dataproducts/${item["document-id"]}`}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   cursor: "pointer",
//                   fontSize: "2rem",
//                   py: 2.5,
//                   width: "100%",
//                   backgroundColor: "#c63531",
//                   borderTopLeftRadius: 0,
//                   borderTopRightRadius: 0,
//                   "&:hover": {
//                     backgroundColor: "#c63531",
//                   },
//                 }}
//               >
//                 Veiw
//               </Button>
//             </Link>
//           </Card>
//         ))}
//       </div>
//         </section>

<section className={styles.dashboard} style={{ overflowX: "scroll", paddingRight: "5rem" }}>
<div style={{ marginBottom: 16 }}>
  <Link href={`/dashboard/dataproducts/time`}>
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
       Click to approve Upload
     </p>
     </Link>
<CSVLink
 data={data}
 filename={`timetable.csv`}
 className="ant-btn ant-btn-primary ant-btn-round"
 style={{ float: 'right', marginBottom: "3rem" }}
>
  <p
       style={{
         backgroundColor: '#f50606',
         color: '#ffffff',
         padding: '10px 15px',
         borderRadius: '5px',
         cursor: 'pointer',
         display: 'inline-block'
       }}
     >
       Export CSV
     </p>
</CSVLink>
</div>
<style jsx global>{`
.ant-table-cell {
border: 1px solid #000; /* Customize the cell border */
}

.ant-table-thead > tr > th {
border: 1px solid #000; /* Customize the header cell border */
}

.ant-table-tbody > tr > td {
border: 1px solid #000; /* Customize the body cell border */
}
`}</style>
<Table columns={columns} dataSource={data} bordered pagination={{ pageSize: 24 }} />
</section>
    )
}

export default Timetable
