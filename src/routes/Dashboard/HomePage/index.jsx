import React from "react";
import DashboardLayout from "../../../components/Layout";
import { HomeStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import {
  DummyLessonsData,
  SideCardsData,
} from "../../../utils/dataHelpers/cardsData";
import { AiOutlineRight as ViewMore } from "react-icons/ai";
import { Link } from "react-router-dom";
import LessonCard from "../../../components/LessonCards";
import HeaderIllustration from "../../../assets/svgs/homeHeaderIllustration.svg";
import { OverFlowScrollBar } from "../../../components/OverflowScroll/styles";

const Home = () => {
  const { Text, Title } = Typography;
  return (
    <DashboardLayout>
      <HomeStyles>
        <FlexibleDiv justifyContent="flex-start" className="home__sub">
          <FlexibleDiv width="97%">
            {/* header section */}
            <FlexibleDiv
              className="home__sub__header"
              justifyContent="space-between"
            >
              <FlexibleDiv
                flexDir="column"
                alignItems="flex-start"
                className="home__sub__headerTextSection"
              >
                <Title level={3}>Hi, Kelechi Ogbuka 👋</Title>
                <Text>Welcome back, nice to see you again!</Text>
              </FlexibleDiv>
              <img src={HeaderIllustration} alt="" />
            </FlexibleDiv>

            {/* body section */}
            <FlexibleDiv
              className="home__sub__body"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {/* left body section */}
              <FlexibleDiv flexDir="column" className="lessonsWrap">
                <FlexibleDiv
                  justifyContent="space-between"
                  className="lessonsWrap__header"
                  flexWrap="nowrap"
                >
                  <Title level={4}> Recently viewed lessons</Title>
                  <Link to="/recently-viewed">
                    See All <ViewMore />
                  </Link>
                </FlexibleDiv>
                <OverFlowScrollBar>
                  <FlexibleDiv
                    className="lessonsWrap__cards"
                    justifyContent="space-between"
                    flexWrap="nowrap"
                  >
                    {DummyLessonsData.slice(0, 3).map((item, index) => (
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
                </OverFlowScrollBar>

                <FlexibleDiv
                  justifyContent="space-between"
                  className="lessonsWrap__header"
                  flexWrap="nowrap"
                >
                  <Title level={4}> Recommended lessons</Title>
                  <Link to="/recommended-lessons">
                    See All <ViewMore />
                  </Link>
                </FlexibleDiv>

                <OverFlowScrollBar>
                  <FlexibleDiv
                    className="lessonsWrap__cards"
                    justifyContent="space-between"
                    flexWrap="nowrap"
                  >
                    {DummyLessonsData.slice(0, 3).map((item, index) => (
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
                </OverFlowScrollBar>
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
                    className="singleSIceCard"
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
      </HomeStyles>
    </DashboardLayout>
  );
};

export default Home;
