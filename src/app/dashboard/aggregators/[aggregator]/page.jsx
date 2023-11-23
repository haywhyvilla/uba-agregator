"use client";

import React from "react";
import DetailsView from "@/src/components/aggregator/aggregator";

const AggregatorDetails = ({ params }) => {
  const aggregator = params.aggregator;
  return (
    <>
      <DetailsView aggregator={aggregator} />
    </>
  );
};

export default AggregatorDetails;
