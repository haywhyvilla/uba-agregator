"use client";

import React from "react";
import DetailsView from "@/src/components/switchSequence/approve";

const VendorsDetails = ({ params }) => {
  const channel = params.channel;
  return (
    <>
      <DetailsView channel={channel} />
    </>
  );
};

export default VendorsDetails;
