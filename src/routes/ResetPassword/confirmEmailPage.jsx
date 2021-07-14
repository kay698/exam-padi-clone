import React from "react";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import { FlexibleDiv } from "../../components/Box/styles";
import Logo from "../../assets/svgs/logo.svg";
import { Typography, Input, Button, Form } from "antd";

const ConfirmEmail = () => {
  const { Text, Title } = Typography;
  return (
    <AuthStylesWrap>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <Title level={5}> Reset Password</Title>

          <FlexibleDiv className="authForm">
            <Text className="instructionsText">
              Enter your email address and we will send an email to you with
              instructions on how to change your password
            </Text>
            <Form>
              <Form.Item name="email">
                <Input placeholder="Email" />
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

export default ConfirmEmail;
