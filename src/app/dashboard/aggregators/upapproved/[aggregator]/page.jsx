"use client";

import React from "react";
import DetailsView from "@/src/components/aggregator/unapproved";

const AggregatorDetails = ({ params }) => {
  const aggregator = params.aggregator;
  console.log(aggregator)
  return (
    <>
      <DetailsView aggregator={aggregator} />
    </>
  );
};

export default AggregatorDetails;