import React from "react";
import { TableStyles } from "./styles";
import { Table } from "antd";

const CustomTable = ({ columns, dataSource, pagination }) => {
  return (
    <TableStyles>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
      />
    </TableStyles>
  );
};

export default CustomTable;
