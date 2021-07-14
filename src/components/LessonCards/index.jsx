import React from "react";
import { LessonCardStyles, ClassBox } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import { Typography } from "antd";
import { truncate } from "../../utils/functionLibraries";
import Clock from "../../assets/svgs/timerImage.svg";
import { MdPlayCircleOutline as Play } from "react-icons/md";
import { BsClock as Time } from "react-icons/bs";
import { Link } from "react-router-dom";
import DemoPic from "../../assets/svgs/lessonImageDemoOne.svg";
import { useHistory } from "react-router-dom";

const LessonCard = ({
  subjectImage,
  duration,
  subjectName,
  studentClass,
  topic,
  topicDescription,
  numberOfLessons,
  course,
}) => {
  const router = useHistory();

  const { Text, Title } = Typography;
  return (
    <LessonCardStyles>
      <FlexibleDiv
        justifyContent="flex-start"
        className="lessonCard__sub"
        flexDir="column"
      >
        <FlexibleDiv
          className="lessonCard__sub__videoSection"
          flexDir="column"
          justifyContent="flex-start"
          style={{
            backgroundImage: !!subjectImage
              ? `url(${subjectImage})`
              : `url(${DemoPic})`,
          }}
          onClick={() =>
            router.push({
              pathname: "/lesson",
              state: { course: course, subjectName: subjectName },
            })
          }
        >
          <FlexibleDiv
            className="overlay"
            width="100%"
            height="100%"
          ></FlexibleDiv>
          <FlexibleDiv justifyContent="flex-end" padding="10px">
            <img src={Clock} alt="" />
          </FlexibleDiv>
          <div className="playWrap">
            <Play className="playIcon" />
          </div>
        </FlexibleDiv>

        <FlexibleDiv
          className="lessonCard__sub__bodyTextSection"
          flexDir="column"
          justifyContent="flex-start"
        >
          <FlexibleDiv justifyContent="flex-end" className="durationWrap">
            <Time />
            <Text>{duration}</Text>
          </FlexibleDiv>
          <FlexibleDiv flexDir="column" alignItems="flex-start">
            <Title level={5}>{topic}</Title>
            <Text className="description">
              {truncate(topicDescription, 100, "...")}
            </Text>
            {window.location.pathname === "/" || "/library" ? (
              <FlexibleDiv flexDir="column" className="footerSection">
                <FlexibleDiv justifyContent="flex-start">
                  <ClassBox studentClass={studentClass.toUpperCase()}>
                    <Text className="class">{studentClass}</Text>
                  </ClassBox>

                  <Text className="subject">{subjectName}</Text>
                </FlexibleDiv>
                <Link className="numberOfLessons  linkToCourses">
                  View Course
                </Link>
              </FlexibleDiv>
            ) : (
              <FlexibleDiv
                flexDir="column"
                className="footerSection"
                alignItems="flex-start"
              >
                <ClassBox studentClass={studentClass.toUpperCase()}>
                  <Text className="class">{studentClass}</Text>
                </ClassBox>
                <Text className="numberOfLessons">
                  {numberOfLessons} Lesson(s)
                </Text>
              </FlexibleDiv>
            )}
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </LessonCardStyles>
  );
};

export default LessonCard;
