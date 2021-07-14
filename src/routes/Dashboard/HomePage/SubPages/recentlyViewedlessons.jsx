import React from "react";
import DashboardLayout from "../../../../components/Layout";
import { HomeSubPagesStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { DummyLessonsData } from "../../../../utils/dataHelpers/cardsData";
import { Link } from "react-router-dom";
import LessonCard from "../../../../components/LessonCards";
// import PagesHeader from "../../../../components/PagesHeader";

const RecentlyViewedLessons = () => {
  const { Title } = Typography;

  return (
    <DashboardLayout>
      <HomeSubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="homeSubPages">
          <FlexibleDiv width="97%">
            {/* header section */}
            {/* <PagesHeader headerText=" 📗" /> */}

            {/* body section */}

            <FlexibleDiv flexDir="column" className="homeSubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="homeSubPagesWrap__header"
              >
                <Title level={4}> Recently Viewed Lessons</Title>
                <Link to="/">Back</Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="homeSubPagesWrap__cards"
                justifyContent="space-between"
              >
                {DummyLessonsData.map((item, index) => (
                  <LessonCard
                    key={index}
                    subjectImage={item.subjectImage}
                    duration={item.duration}
                    subjectName={item.subjectName}
                    studentClass={item.studentClass}
                    topic={item.topic}
                    topicDescription={item.topicDescription}
                    numberOfLessons={item.numberOfLessons}
                    course={item}
                  />
                ))}
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </HomeSubPagesStyles>
    </DashboardLayout>
  );
};

export default RecentlyViewedLessons;
