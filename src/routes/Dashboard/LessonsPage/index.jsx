import React, { useState, useContext, useLayoutEffect } from "react";
import DashboardLayout from "../../../components/Layout";
import { LessonsStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { LessonsData } from "../../../utils/dataHelpers/lessonsCardsData";
import LessonCard from "../../../components/LessonCards";
import { SubjectContext } from "../../../context/SubjectContext";
import PagesHeader from "../../../components/PagesHeader";

const Lessons = () => {
  const [subject, setSubject] = useState("English");
  const [subjectDetailsContext, setSubjectDetailsContext] =
    useContext(SubjectContext);

  const { Text } = Typography;

  useLayoutEffect(() => {
    let currentCourse = JSON.parse(localStorage.getItem("lessons"));
    let subjectName = localStorage.getItem("name");
    !!subjectName && setSubject(subjectName);
    !!currentCourse &&
      setSubjectDetailsContext({
        lessons: currentCourse,
      });
  }, [setSubjectDetailsContext, setSubject]);

  const handleSubjectContext = (subject, courses) => {
    localStorage.setItem("lessons", JSON.stringify(courses));
    localStorage.setItem("name", subject);
    setSubject(subject);
    setSubjectDetailsContext({
      lessons: courses,
    });
  };

  return (
    <DashboardLayout>
      <LessonsStyles>
        <FlexibleDiv justifyContent="flex-start" className="lessons__sub">
          <FlexibleDiv width="97%">
            {/* header section */}
            <PagesHeader headerText="Lessons 📚" />

            {/* body section */}
            <FlexibleDiv
              className="lessons__sub__body"
              justifyContent="space-between"
              alignItems="flex-start"
              flexWrap="nowrap"
            >
              <FlexibleDiv
                width="20%"
                className="subjectsListWrap"
                height="max-content"
              >
                {LessonsData.map((item, index) => (
                  <FlexibleDiv className="subject" key={index}>
                    <Text
                      style={{
                        backgroundColor:
                          item.subjectName === subject && "#F3F1EC",
                      }}
                      onClick={() => {
                        handleSubjectContext(item.subjectName, item.courses);
                      }}
                    >
                      {item.subjectName}
                    </Text>
                  </FlexibleDiv>
                ))}
              </FlexibleDiv>

              {/* right body section */}
              <FlexibleDiv flexDir="column" className="lessonsSectionWrap">
                <FlexibleDiv
                  className="lessonsWrap__cards"
                  justifyContent="space-between"
                >
                  {!!subjectDetailsContext && !!subjectDetailsContext.lessons
                    ? subjectDetailsContext.lessons.map((course, idx) => (
                        <LessonCard
                          key={idx}
                          subjectImage={course.subjectImage}
                          duration={course.duration}
                          studentClass={course.studentClass}
                          topic={course.topic}
                          topicDescription={course.topicDescription}
                          numberOfLessons={course.numberOfLessons}
                          course={course}
                          subjectName={subject}
                        />
                      ))
                    : LessonsData.map(
                        (item, idx) =>
                          item.subjectName === subject &&
                          item.courses.map((course, index) => (
                            <LessonCard
                              key={index}
                              subjectImage={course.subjectImage}
                              duration={course.duration}
                              studentClass={course.studentClass}
                              topic={course.topic}
                              topicDescription={course.topicDescription}
                              numberOfLessons={course.numberOfLessons}
                              subjectName={subject}
                              course={course}
                            />
                          ))
                      )}
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </LessonsStyles>
    </DashboardLayout>
  );
};

export default Lessons;
