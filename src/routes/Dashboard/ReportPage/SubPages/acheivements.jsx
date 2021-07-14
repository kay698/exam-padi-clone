import React from "react";
import DashboardLayout from "../../../../components/Layout";
import { ReportSubPagesStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import {
  AchievementBadges,
  // AvailableAchievementBadges,
} from "../../../../utils/dataHelpers/cardsData";

const Achievements = () => {
  const { Title, Text } = Typography;

  return (
    <DashboardLayout>
      <ReportSubPagesStyles>
        <FlexibleDiv className="reportSubPages">
          <FlexibleDiv width="97%">
            {/* header section */}
            {/* <PagesHeader headerText=" 📗" /> */}

            {/* body section */}

            <FlexibleDiv flexDir="column" className="reportSubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="reportSubPagesWrap__header"
                alignItems="flex-start"
                flexWrap="nowrap"
              >
                <div>
                  <Title level={4}>Achievements</Title>
                  <Text className="achievementsSubHeader">
                    Learn and earn badges for your achievements
                  </Text>
                </div>

                <Link to="/reports">Back</Link>
              </FlexibleDiv>
              <Text className="badgesHeader">Your Badges</Text>
              <FlexibleDiv
                className="achievements__badges"
                justifyContent="flex-start"
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

              <Text className="badgesHeader">Available achievements</Text>
              {/* <FlexibleDiv
                className="achievements__badges"
                justifyContent="flex-start"
              >
                {AvailableAchievementBadges.map((item, index) => (
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
              </FlexibleDiv> */}
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ReportSubPagesStyles>
    </DashboardLayout>
  );
};

export default Achievements;
