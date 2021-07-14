import React, { useState } from "react";
import DashboardLayout from "../../../components/Layout";
import { TopicStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";
import PreviewImage from "../../../assets/svgs/videoImage.svg";
import { MdPlayCircleOutline as Play } from "react-icons/md";
import DownloadIcon from "../../../assets/svgs/downloadIcon.svg";
import PlayIcon from "../../../assets/svgs/grayPlay.svg";
import ClockIcon from "../../../assets/svgs/lessonClock.svg";
import { Link } from "react-router-dom";
import { AiFillLock as Lock } from "react-icons/ai";
import { Form, Checkbox } from "antd";
import { truncate } from "../../../utils/functionLibraries";

const Topic = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  // const [unlocked, setUnlocked] = useState([0]);
  const [showUnlcked, setShowUnlocked] = useState(0);
  const router = useHistory();
  const { subjectName, course } = router.location.state;
  const { Text, Title } = Typography;

  let unlocked = [0];

  const handleShowUnlocked = (index) => {
    setShowUnlocked(index);
  };

  return (
    <DashboardLayout>
      <TopicStyles>
        <FlexibleDiv className="topic__sub" flexDir="column">
          {/* header section */}
          <FlexibleDiv
            alignItems="flex-start"
            className="topic__sub__header"
            flexDir="column"
          >
            <Title level={5}>{subjectName}</Title>
            <Title level={4}>{course.topic}</Title>
          </FlexibleDiv>

          {/* body section */}
          <FlexibleDiv
            justifyContent="space-between"
            alignItems="flex-start"
            className="topic__sub__body"
            flexWrap="nowrap"
          >
            {/* left section */}
            <FlexibleDiv
              flexDir="column"
              width="60%"
              height="max-content"
              className="topic__sub__left"
            >
              {/* left video section */}
              <FlexibleDiv
                flexDir="column"
                className="topic__sub__left__videoPreview"
                alignItems="flex-start"
              >
                <FlexibleDiv
                  className="overlay"
                  width="100%"
                  height="100%"
                ></FlexibleDiv>
                <img alt="" src={PreviewImage} />
                <div className="playImageWrap">
                  <Play className="play" />
                </div>
              </FlexibleDiv>

              {/* left body content section */}
              <FlexibleDiv
                className="topic__sub__left__textContent"
                alignItems="flex-start"
                flexDir="column"
              >
                {/* left body content header */}
                <FlexibleDiv
                  className="textContent__headerSection"
                  justifyContent="space-between"
                >
                  <FlexibleDiv
                    justifyContent="space-between"
                    width="200px"
                    height="max-content"
                    className="headerTextWrap"
                  >
                    <Text
                      className={activeTab === "Overview" && "activeTab"}
                      onClick={() => setActiveTab("Overview")}
                    >
                      Overview
                    </Text>
                    <Text
                      className={activeTab === "Transcripts" && "activeTab"}
                      onClick={() => setActiveTab("Transcripts")}
                    >
                      Transcripts
                    </Text>
                  </FlexibleDiv>

                  <FlexibleDiv
                    width="max-content"
                    className="textContent__headerSection__icons"
                  >
                    <img src={ClockIcon} alt="" />
                    <img src={DownloadIcon} alt="" />
                  </FlexibleDiv>
                </FlexibleDiv>

                {activeTab === "Overview" ? (
                  <Text className="bodyText">{course.topicDescription}</Text>
                ) : (
                  <Text className="bodyText">
                    Hi There!! We are working on this feature
                  </Text>
                )}

                <Title level={5}>Resources</Title>

                <FlexibleDiv justifyContent="flex-start">
                  {course.resources.map((item, index) => (
                    <FlexibleDiv
                      key={index}
                      width="max-content"
                      className="resources"
                    >
                      <Link>{item}</Link>
                    </FlexibleDiv>
                  ))}
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>

            {/* right section */}
            <FlexibleDiv
              width="35%"
              className="topic__sub__right"
              justifyContent="flex-start"
            >
              <FlexibleDiv
                width="90%"
                flexDir="column"
                className="videosWrap"
                alignItems="flex-start"
              >
                <FlexibleDiv
                  flexDir="column"
                  height="max-content"
                  alignItems="flex-start"
                >
                  {course.subTopics.map((item, index) => (
                    <FlexibleDiv
                      flexDir="column"
                      key="index"
                      className="contentWrap"
                      style={{
                        cursor: unlocked.includes(index) && "pointer",
                        height:
                          showUnlcked === index && unlocked.includes(index)
                            ? "max-content"
                            : "90px",
                      }}
                    >
                      <FlexibleDiv
                        className="contentHeader"
                        justifyContent="flex-start"
                        flexWrap="nowrap"
                        onClick={() =>
                          showUnlcked === index
                            ? handleShowUnlocked("")
                            : handleShowUnlocked(index)
                        }
                      >
                        <FlexibleDiv
                          className="contentNumber"
                          width="50px"
                          height="50px"
                        >
                          <Text>{index + 1}</Text>
                        </FlexibleDiv>
                        <FlexibleDiv className="headerText">
                          <Text>{item.title}</Text>
                        </FlexibleDiv>

                        {!unlocked.includes(index) && <Lock className="lock" />}
                      </FlexibleDiv>
                      {unlocked.includes(index) && showUnlcked === index && (
                        <FlexibleDiv
                          // flexDir="column"
                          className="unlockedSection"
                        >
                          {item.subVideos.map((subVideo, idx) => (
                            <FlexibleDiv flexDir="column">
                              <FlexibleDiv
                                flexWrap="nowrap"
                                className="subVideoHeader"
                                justifyContent="space-between"
                              >
                                <img src={PlayIcon} alt="" />
                                <Text className="subVideoHeader__text">
                                  {subVideo.subVideoTitle}
                                </Text>
                                <Text className="subVideoHeader__duration">
                                  {subVideo.duration}
                                </Text>
                              </FlexibleDiv>
                              <Form>
                                <Form.Item name="stepLessons-complete">
                                  <Checkbox.Group>
                                    {subVideo.stepLessons.map(
                                      (stepLesson, indx) => (
                                        <Checkbox value={stepLesson} key={indx}>
                                          {truncate(stepLesson, 30, "...")}
                                        </Checkbox>
                                      )
                                    )}
                                  </Checkbox.Group>
                                </Form.Item>
                              </Form>
                            </FlexibleDiv>
                          ))}
                        </FlexibleDiv>
                      )}
                    </FlexibleDiv>
                  ))}
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </TopicStyles>
    </DashboardLayout>
  );
};

export default Topic;
