import React from "react";
import { Layout, Typography } from "antd";
import { FooterWrap } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import Logo from "../../assets/svgs/footerLogo.svg";

const Footer = () => {
  const { Footer } = Layout;
  const { Text } = Typography;

  return (
    <FooterWrap>
      <Footer className="footerMain">
        <FlexibleDiv className="landingPageFooter" height="100%">
          <FlexibleDiv
            justifyContent="flex-start"
            className="landingPageFooter__sub"
            height="100%"
            flexWrap="no-wrap"
            alignItems="flex-start"
            margin="20px  0"
          >
            <div className="landingPageFooter__logoWrap">
              <img alt="" src={Logo} />
            </div>

            <Text>
              Exam Padi is the companion you need to prepare for your entrance
              and school leaving examinations.
              <br />
              <br />
              It is an e-learning platform hosting learning videos and computer
              based tests to help JS 3 and SS 3 students (exit class) prepare
              for Junior and Senior WAEC, NECO, JAMB and SAT.
              <br />
              <br />
              It also caters to primary school students that will be writing the
              Common Entrance examination, providing video lessons and computer
              based tests.
            </Text>
          </FlexibleDiv>
        </FlexibleDiv>
      </Footer>
    </FooterWrap>
  );
};

export default Footer;
