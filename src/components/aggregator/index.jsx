"use client";
import styles from "./loanrequest.module.scss";
import addIcon from "@/src/assets/addIcon2.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LogoutIcon } from "@/src/utility/svg";
import { Dropdown, Space, Modal, Form, Spin, Input } from "antd";
import Link from "next/link";
import { aggregator } from "@/src/assets/aggregator.svg";
import axios from "axios";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Button as AntdButton } from "antd";

const Aggregator = () => {
  const [aggregator, setAggregators] = useState([]);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [aggregatorsModal, setAggregatorsModal] = useState(false);

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
        setAggregators(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  const handleSubmit = async (value) => {
    setSubmitLoading(true);
    const formData = {
      "agg-code": value["agg-code"],
      "agg-name": value["agg-name"],
    };

    console.log(formData);
    try {
      // Make an HTTP POST request to your endpoint

      const response = await axios.post(
        "http://16.170.182.130:9898/nip/aggregator",
        formData
      );
      toast.success(response.data.message);
      console.log("Form submitted successfully", response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setSubmitLoading(false);
      setAggregatorsModal(false);
    }
  };

  const handleAddVendorClick = () => {
    // Set the state to true to show the modal
    setAggregatorsModal(true);
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.card}>
        {aggregator.map((item, index) => (
          // <div className={styles.eachcard} key={index}>
          //   <div className={styles.cardFlex}>
          //     <p>{item["aggregator-name"]}</p>
          //     <h2>{item["aggregator-code"]}</h2>
          //   </div>
          //   <div className={styles.cardRate}>
          //     <span>{item["created-by"]}</span>
          //     <br />
          //     <span>{item["creation-date"]}</span>
          //   </div>
          //   <div className={styles.cardId}>
          //     <p>{item["change-id"]}</p>
          //     <p>{item["change-status"]}</p>
          //   </div>
          // </div>
          <Card key={index}>
            <CardContent
              sx={{ p: (theme) => `${theme.spacing(3, 5.25, 4)} !important` }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontSize: "1.5rem" }}>
                {item["aggregator-name"]}
              </Typography>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {item["change-id"]}
              </Typography>

              <Typography sx={{ mb: 2 }}>{item["aggregator-code"]}</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                by: {item["created-by"]}
              </Typography>
            </CardContent>
            <Link href={`/dashboard/aggregators/${item["change-id"]}`}>
              <Button
                variant="contained"
                sx={{
                  fontSize: "1.5rem",
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
                Veiw Aggregator details
              </Button>
            </Link>
          </Card>
        ))}
      </div>
      <Image
        src={addIcon}
        width={100}
        height={100}
        className={styles.addIcon}
        onClick={handleAddVendorClick}
      />

      <Modal
        centered
        open={aggregatorsModal}
        onOk={() => setAggregatorsModal(false)}
        onCancel={() => {
          setAggregatorsModal(false);
        }}
        footer={null}
        style={{ maxHeight: "600px", overflowY: "auto" }}
      >
        <div className="headings text-center">
          <h4
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Add Aggregator
          </h4>
          <p style={{ fontSize: "16px", textAlign: "center" }}>
            Fill the fields below to add aggregator.
          </p>
        </div>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Aggregator Name"
            className={"username-input"}
            name="agg-name"
            rules={[
              {
                required: true,
                message: "Please input aggregator name!",
              },
            ]}
          >
            <Input placeholder="Input aggregator name" />
          </Form.Item>

          <Form.Item
            label="Aggregator Code"
            className={"username-input"}
            name="agg-code"
            rules={[
              {
                required: true,
                message: "Please input aggregator code!",
              },
            ]}
          >
            <Input placeholder="Input aggregator code" />
          </Form.Item>

          <div className="pt-lg-5 pt-4">
            <AntdButton
              htmlType="submit"
              style={{ background: "#d20303", color: "#FFF" }}
              className={
                submitLoading
                  ? "our-btn-fade w-100 mt-4 mb-4"
                  : "w-100 mt-4 mb-4"
              }
              // loading={sunmitLoading}
              disabled={submitLoading}
            >
              {submitLoading ? (
                <Spin
                  className="white-spinner d-flex align-items-center justify-content-center"
                  style={{ color: "white" }}
                />
              ) : (
                <>Submit</>
              )}
            </AntdButton>
          </div>
        </Form>
      </Modal>
    </section>
  );
};

export default Aggregator;

//
