"use client";
import React, { useEffect, useState } from "react";
import styles from "../aggregator/loanrequest.module.scss";
import { DetailsWrapper } from "../../utility/style";
import axios from "axios";
import { Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const DetailsView = ({ timetable }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://16.170.182.130:9898/nip/timetable?status=unapproved&id=${timetable}`
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

  return (
    <section className={styles.dashboard} style={{ overflowX: "scroll" }}>
      <Table columns={columns} dataSource={data} bordered pagination={{ pageSize: 100 }} />
    </section>
  );
};

export default DetailsView;

