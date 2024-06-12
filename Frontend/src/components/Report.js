
import React from "react";
import ReportComponent from "./ReportComponent";

const Report = ({ dataList }) => {
  return (
    <div>
      <h2>Treatment List Report</h2>
      <ReportComponent dataList={dataList} />
    </div>
  );
};

export default Report;

