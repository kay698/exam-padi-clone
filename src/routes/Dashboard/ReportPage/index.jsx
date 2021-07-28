import DashboardLayout from "../../../components/Layout";
import { ReportsStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import PagesHeader from "../../../components/PagesHeader";
import {
  SideCardsData,
  AchievementBadges,
} from "../../../utils/dataHelpers/cardsData";
import {
  ReportsTableData,
  ReportsTableHead,
} from "../../../utils/dataHelpers/tablesData";
// import { generatePercentage } from "../../../utils/functionLibraries";
import { Link } from "react-router-dom";
import CustomTable from "../../../components/Table";
import { OverFlowScrollBar } from "../../../components/OverflowScroll/styles";

const Reports = () => {
  const { Title, Text } = Typography;
  return (
    <DashboardLayout>
      <ReportsStyles>
        <FlexibleDiv justifyContent="flex-start" className="reports__sub">
          <FlexibleDiv width="97%">
            <PagesHeader headerText="Report  🖌" />

            <FlexibleDiv
              className="reports__sub__body"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {/* left body section */}
              <FlexibleDiv flexDir="column" className="leftSection">
                <FlexibleDiv
                  justifyContent="space-between"
                  className="leftSection__header"
                  flexWrap="nowrap"
                >
                  <Title level={4}>Achievements</Title>
                  <Link to="/achievements">View All</Link>
                </FlexibleDiv>
                <OverFlowScrollBar>
                  <FlexibleDiv
                    className="leftSection__badges"
                    justifyContent="flex-start"
                    flexWrap="nowrap"
                  >
                    {AchievementBadges.map((item, index) => (
                      <FlexibleDiv
                        flexDir="column"
                        width="max-content"
                        alignItems="flex-start"
                      >
                        <FlexibleDiv
                          width="170px"
                          height="160px"
                          style={{ backgroundColor: item.color }}
                          className="badge"
                          margin="0 0 10px 0"
                        >
                          <img alt="" src={item.icon} />
                        </FlexibleDiv>
                        <Text className="badge__bodyText">{item.title}</Text>
                      </FlexibleDiv>
                    ))}
                  </FlexibleDiv>
                </OverFlowScrollBar>
                <FlexibleDiv className="test__scores__wrap">
                  <FlexibleDiv
                    justifyContent="space-between"
                    className="leftSection__header"
                    flexWrap="nowrap"
                  >
                    <Title level={4}> Test scores</Title>
                    <Link to="/test-scores">View All</Link>
                  </FlexibleDiv>

                  <FlexibleDiv
                    className="test__scores"
                    justifyContent="space-between"
                    flexWrap="nowrap"
                  >
                    <OverFlowScrollBar>
                      <CustomTable
                        columns={ReportsTableHead}
                        dataSource={ReportsTableData.splice(0, 6)}
                        pagination={false}
                      />
                    </OverFlowScrollBar>
                  </FlexibleDiv>
                </FlexibleDiv>
              </FlexibleDiv>

              {/* right body section */}
              <FlexibleDiv
                width="20%"
                className="rightCardsWrap"
                height="max-content"
              >
                {SideCardsData.map((item, index) => (
                  <FlexibleDiv
                    flexDir="column"
                    className="reportSideCards"
                    style={{ backgroundColor: item.cardColor }}
                    justifyContent="space-evenly"
                  >
                    <img src={item.icon} alt="" />
                    <Text>{item.title}</Text>
                    <Title level={3}>{item.boldText}</Title>
                  </FlexibleDiv>
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ReportsStyles>
    </DashboardLayout>
  );
};

export default Reports;
