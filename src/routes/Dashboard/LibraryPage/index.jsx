import React from "react";
import DashboardLayout from "../../../components/Layout";
import { LibraryStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { DummyLessonsData } from "../../../utils/dataHelpers/cardsData";
import { AiOutlineRight as ViewMore } from "react-icons/ai";
import { Link } from "react-router-dom";
import LessonCard from "../../../components/LessonCards";
import PagesHeader from "../../../components/PagesHeader";

const Library = () => {
  const { Title } = Typography;

  return (
    <DashboardLayout>
      <LibraryStyles>
        <FlexibleDiv justifyContent="flex-start" className="library__sub">
          <FlexibleDiv width="97%">
            {/* header section */}
            <PagesHeader headerText="Library 📗" />

            {/* body section */}

            <FlexibleDiv flexDir="column" className="libraryLessonsWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="libraryLessonsWrap__header"
                flexWrap="nowrap"
              >
                <Title level={4}> History</Title>
                <Link to="/history" alt="">
                  See All <ViewMore />
                </Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="libraryLessonsWrap__cards"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                {DummyLessonsData.slice(0, 4).map((item, index) => (
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

              <FlexibleDiv
                justifyContent="space-between"
                className="libraryLessonsWrap__header"
                flexWrap="nowrap"
              >
                <Title level={4}>Saved Lessons</Title>
                <Link to="/downloads" alt="">
                  See All <ViewMore />
                </Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="libraryLessonsWrap__cards"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                {DummyLessonsData.slice(0, 4).map((item, index) => (
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

              <FlexibleDiv
                justifyContent="space-between"
                className="libraryLessonsWrap__header"
                flexWrap="nowrap"
              >
                <Title level={4}>Downloads</Title>
                <Link to="/saved-lessons" alt="">
                  See All <ViewMore />
                </Link>
              </FlexibleDiv>

              <FlexibleDiv
                className="libraryLessonsWrap__cards"
                justifyContent="space-between"
                flexWrap="nowrap"
              >
                {DummyLessonsData.slice(0, 4).map((item, index) => (
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
      </LibraryStyles>
    </DashboardLayout>
  );
};

export default Library;
