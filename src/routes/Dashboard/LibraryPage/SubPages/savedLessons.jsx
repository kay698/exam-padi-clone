import React from "react";
import DashboardLayout from "../../../../components/Layout";
import { LibrarySubPagesStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { DummyLessonsData } from "../../../../utils/dataHelpers/cardsData";
import { Link } from "react-router-dom";
import LessonCard from "../../../../components/LessonCards";
import PagesHeader from "../../../../components/PagesHeader";

const SavedLessons = () => {
  const { Title } = Typography;

  return (
    <DashboardLayout>
      <LibrarySubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="librarySubPages">
          <FlexibleDiv width="97%">
            {/* header section */}
            <PagesHeader headerText="Library 📗" />

            {/* body section */}

            <FlexibleDiv flexDir="column" className="librarySubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="librarySubPagesWrap__header"
              >
                <Title level={4}> Saved Lessons</Title>
                <Link to="/library">Back</Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="librarySubPagesWrap__cards"
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
      </LibrarySubPagesStyles>
    </DashboardLayout>
  );
};

export default SavedLessons;
