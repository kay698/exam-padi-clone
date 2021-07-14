import React from "react";
// import { AuthStylesWrap } from "./styles";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import Footer from "../../components/Footer";
import { FlexibleDiv } from "../../components/Box/styles";
import Logo from "../../assets/svgs/logo.svg";
import { Typography, Input, Button, Form } from "antd";

const Signup = () => {
  const { Title } = Typography;
  return (
    <AuthStylesWrap>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <Title level={5}> Sign up here</Title>

          <FlexibleDiv className="authForm">
            <Form>
              <Form.Item name="full_name">
                <Input placeholder="Full name" />
              </Form.Item>
              <Form.Item name="phone_no">
                <Input placeholder="Phone Number" />
              </Form.Item>
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  className="passwordInput"
                  placeholder="Create password"
                  iconRender={(visible) => (visible ? "Hide" : "Show")}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
      <FlexibleDiv className="footerWrap">
        <Footer />
      </FlexibleDiv>
    </AuthStylesWrap>
  );
};

export default Signup;
