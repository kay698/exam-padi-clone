import React from "react";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { FlexibleDiv } from "../../components/Box/styles";
import Logo from "../../assets/svgs/logo.svg";
import { Typography, Input, Button, Form } from "antd";

const ResetPassword = () => {
  const { Title } = Typography;
  return (
    <AuthStylesWrap>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <Title level={5}> Reset Password</Title>

          <FlexibleDiv className="authForm">
            <Form>
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
                Send Instructions
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </AuthStylesWrap>
  );
};

export default ResetPassword;
