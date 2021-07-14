import React from "react";
import DashboardLayout from "../../../../components/Layout";
import { ReportSubPagesStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import {
  ReportsTableData,
  ReportsTableHead,
} from "../../../../utils/dataHelpers/tablesData";
import CustomTable from "../../../../components/Table";
import { OverFlowScrollBar } from "../../../../components/OverflowScroll/styles";

const TestScores = () => {
  const { Title } = Typography;

  return (
    <DashboardLayout>
      <ReportSubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="reportSubPages">
          <FlexibleDiv width="97%">
            <FlexibleDiv
              flexDir="column"
              className="reportSubPagesWrap testScores"
            >
              <FlexibleDiv
                justifyContent="space-between"
                className="reportSubPagesWrap__header"
                alignItems="flex-start"
                flexWrap="nowrap"
              >
                <Title level={4}>Test Scores</Title>

                {/* <Text>lqwkjdo</Text> */}

                <Link to="/reports">Back</Link>
              </FlexibleDiv>

              <OverFlowScrollBar>
                <CustomTable
                  columns={ReportsTableHead}
                  dataSource={ReportsTableData}
                  // pagination={false}
                />
              </OverFlowScrollBar>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ReportSubPagesStyles>
    </DashboardLayout>
  );
};

export default TestScores;
