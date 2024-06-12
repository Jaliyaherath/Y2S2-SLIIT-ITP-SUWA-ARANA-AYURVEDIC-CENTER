
import React from "react";
import ItemReoprtComponenet from "./ItemReportComponent";

const ItemReport = ({ dataList }) => {
  return (
    <div>
      <h2>Item List Report</h2>
      <ItemReoprtComponenet dataList={dataList} />
    </div>
  );
};

export default ItemReport;

