import React from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { ProfileSubPagesStyles } from "./styles";
import DashboardLayout from "../../../../components/Layout";
import { Typography, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

const ChangePassword = () => {
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
                <Title level={5}> Change Password</Title>

                <FlexibleDiv className="profile__authForm">
                  <Form>
                    <Form.Item name="old-password">
                      <Input.Password
                        className="passwordInput"
                        placeholder="Enter old password"
                        iconRender={(visible) => (visible ? "Hide" : "Show")}
                      />
                    </Form.Item>
                    <Form.Item name="new-password">
                      <Input.Password
                        className="passwordInput"
                        placeholder="Enter new password"
                        iconRender={(visible) => (visible ? "Hide" : "Show")}
                      />
                    </Form.Item>{" "}
                    <Form.Item name="consfirm-new-password">
                      <Input.Password
                        className="passwordInput"
                        placeholder="Cofirm new password"
                        iconRender={(visible) => (visible ? "Hide" : "Show")}
                      />
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                      Change Password
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

export default ChangePassword;
