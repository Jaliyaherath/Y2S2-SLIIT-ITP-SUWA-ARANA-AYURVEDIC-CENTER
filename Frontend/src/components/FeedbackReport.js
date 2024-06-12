
import React from "react";
import FeedbackReportComponent from "./FeedbackReportComponent";

const Report = ({ dataList }) => {
  return (
    <div>
      <h2>Feedback List Report</h2>
      <FeedbackReportComponent dataList={dataList} />
    </div>
  );
};

export default Report;

