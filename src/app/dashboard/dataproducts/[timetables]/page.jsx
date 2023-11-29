"use client";

import React from "react";
import DetailsView from "@/src/components/timetableview/timetable";
const TimetableDetails = ({ params }) => {
  const timetable = params.timetables;
  return (
    <>
      <DetailsView timetable={timetable} />
    </>
  );
};

export default TimetableDetails;
