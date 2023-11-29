"use client";

import { useState, useEffect } from "react";
import aggregator from "@/src/assets/aggregator.svg";
import channels from "@/src/assets/channels.svg";
import dataproducts from "@/src/assets/dataproducts.svg";
import switchsequence from "@/src/assets/switch.svg";
import timetable from "@/src/assets/timetable.svg";
import styles from "@/src/components/multiStepDashboard/dashboard.module.scss";
import Sidebar from "@/src/components/Sidebar";
import DashboardHeader from "@/src/components/DashboardHeader";

const menuItems = [
  {
    label: "Channels",
    itemIcon: channels,
    stepNumber: 0,
    pageUrl: "/dashboard",
  },
  {
    label: "Aggregator",
    itemIcon: aggregator,
    stepNumber: 1,
    pageUrl: "/dashboard/aggregators",
  },
  {
    label: "Time Table Upload",
    itemIcon: timetable,
    stepNumber: 2,
    pageUrl: "/dashboard/timetable",
  },
  {
    label: "Time Tables",
    itemIcon: dataproducts,
    stepNumber: 3,
    pageUrl: "/dashboard/dataproducts",
  },
  {
    label: "Disbursement Page",
    itemIcon: switchsequence,
    stepNumber: 4,
    pageUrl: "/dashboard/sequence",
  },
];

export default function RootLayout({ children }) {
  const [selectedStepLabel, setSelectedStepLabel] = useState("Channel");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [step, setStep] = useState(0);

  const handleMenuItemClick = (stepNumber, stepLabel) => {
    setStep(stepNumber);
    setSelectedStepLabel(stepLabel);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.MultiStepForm}>
        <div
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            step={step}
            toggleSidebar={toggleSidebar}
            onMenuItemClick={handleMenuItemClick}
            menuItems={menuItems}
          />
          <div
            className={`overlay ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          ></div>
        </div>
        <main className={styles.contentContainer}>
          <DashboardHeader
            selectedStepLabel={selectedStepLabel}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {children}
        </main>
      </div>
    </section>
  );
}
