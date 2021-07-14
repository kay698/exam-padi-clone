import React from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { ProfileSubPagesStyles } from "./styles";
import DashboardLayout from "../../../../components/Layout";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import CustomTable from "../../../../components/Table";
import {
  ReceiptsTableData,
  ReceiptsTableHead,
} from "../../../../utils/dataHelpers/tablesData";
import { OverFlowScrollBar } from "../../../../components/OverflowScroll/styles";

const Receipts = () => {
  const { Title } = Typography;
  return (
    <DashboardLayout>
      <ProfileSubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="profileSubPages">
          <FlexibleDiv width="97%">
            {/* body section */}

            <FlexibleDiv flexDir="column" className="profileSubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="profileSubPagesWrap__header"
              >
                <Title level={4}>Receipts</Title>
                <Link to="/profile">Back</Link>
              </FlexibleDiv>

              <FlexibleDiv className="receipts" justifyContent="space-between">
                <OverFlowScrollBar>
                  <CustomTable
                    columns={ReceiptsTableHead}
                    dataSource={ReceiptsTableData}
                  />
                </OverFlowScrollBar>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ProfileSubPagesStyles>
    </DashboardLayout>
  );
};

export default Receipts;
