import React from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { ProfileSubPagesStyles } from "./styles";
import DashboardLayout from "../../../../components/Layout";
import ImageBg from "../../../../assets/svgs/imageBg.svg";
import CameraImage from "../../../../assets/svgs/addImage.svg";
import { Typography, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const { Title } = Typography;
  return (
    <DashboardLayout>
      <ProfileSubPagesStyles>
        <FlexibleDiv justifyContent="flex-start" className="profileSubPages">
          <FlexibleDiv width="97%">
            {/* body section */}

            <FlexibleDiv flexDir="column" className="profileSubPagesWrap">
              <FlexibleDiv
                justifyContent="space-between"
                className="profileSubPagesWrap__header"
              >
                <Title level={4}></Title>
                <Link to="/profile">Back</Link>
              </FlexibleDiv>

              <FlexibleDiv className="profile__auth__sub" flexDir="column">
                <Title level={5}> Edit Profile</Title>
                <FlexibleDiv
                  className="profileImageSection"
                  width="130px"
                  height="max-content"
                  alignItems="flex-end"
                  flexWrap="nowrap"
                >
                  <FlexibleDiv
                    className="imageWrap"
                    width="110px"
                    height="110px"
                  >
                    <img src={ImageBg} alt="" />
                  </FlexibleDiv>
                  <FlexibleDiv className="cameraIcon" width="max-content">
                    <label htmlFor="profileImage" className={"profileImage"}>
                      <img src={CameraImage} alt="" />
                    </label>
                    <input
                      hidden
                      type="file"
                      id={"profileImage"}
                      name={"profileImage"}
                    />
                  </FlexibleDiv>
                </FlexibleDiv>
                <FlexibleDiv className="profile__authForm">
                  <Form>
                    <Form.Item name="full_name">
                      <Input placeholder="Full name" />
                    </Form.Item>
                    <Form.Item name="email">
                      <Input placeholder="Email" />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Form>
                </FlexibleDiv>
              </FlexibleDiv>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ProfileSubPagesStyles>
    </DashboardLayout>
  );
};

export default EditProfile;
