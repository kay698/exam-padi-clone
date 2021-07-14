import React from "react";
import Footer from "../../components/Footer";
import { FlexibleDiv } from "../../components/Box/styles";
import { AuthStylesWrap } from "../../components/AuthStyles/styles";
import Logo from "../../assets/svgs/logo.svg";
import { Typography, Input, Button, Form } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const { Text, Title } = Typography;
  return (
    <AuthStylesWrap login>
      <FlexibleDiv className="auth" alignItems="flex-start">
        <FlexibleDiv className="auth__sub" width="90%" flexDir="column">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <Title level={5}> Log in</Title>

          <FlexibleDiv className="authForm">
            <Form>
              <Form.Item name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password
                  className="passwordInput"
                  placeholder="password"
                  iconRender={(visible) => (visible ? "Hide" : "Show")}
                />
              </Form.Item>
              <FlexibleDiv className="forgotPassword" justifyContent="flex-end">
                <Text>
                  <Link to="/reset-password">Forgot Password?</Link>
                </Text>
              </FlexibleDiv>

              <Button type="primary" htmlType="submit">
                Log In
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

export default Login;
