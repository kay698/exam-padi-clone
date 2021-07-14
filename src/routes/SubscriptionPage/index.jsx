import React from "react";
import { SubscriptionWrap, RadioStyle } from "./styles";
import { Typography, Form, Radio, Button } from "antd";
import { FlexibleDiv, GridableDiv } from "../../components/Box/styles";
import { SubscriptionPlans } from "../../utils/dataHelpers/subscriptionPlans";
import Logo from "../../assets/svgs/noTextLogo.svg";

const Subscription = () => {
  const { Title, Text } = Typography;

  return (
    <SubscriptionWrap>
      <div className="floatingLogo">
        <img src={Logo} alt="" />
      </div>
      <FlexibleDiv className="cardswrap">
        <Title level={3}>Choose a subscription plan</Title>
        <Text className="headerSubText">
          Purchase a subscription plan and gain access to a library of learning
          content
        </Text>
        <FlexibleDiv
          width="900px"
          height="max-content"
          justifyContent="space-evenly"
        >
          <GridableDiv gridCol="1fr 1fr" gap="50px" className="gridBox">
            {SubscriptionPlans.map((item, index) => (
              <FlexibleDiv
                className="card"
                key={index}
                style={{ backgroundColor: item.color }}
              >
                <FlexibleDiv
                  className="cardHeaderWrap"
                  height="50px"
                  margin="0 0 10px 0"
                  alignItems="flex-end"
                >
                  <Title level={5}>{item.title}</Title>
                </FlexibleDiv>

                <RadioStyle buttonColor={item.buttonColor}>
                  <FlexibleDiv flexDir="column" margin="10px 0">
                    <Form>
                      <Form.Item name="radio-group">
                        <Radio.Group>
                          <Radio value="monthly" index={index}>
                            <Title level={4}>{item.monthly}</Title>
                          </Radio>

                          <Radio value="quarterly">
                            <Title level={4}>{item.quaterly}</Title>
                          </Radio>
                          <Radio value="yearly">
                            <Title level={4}>{item.yearly}</Title>
                          </Radio>
                        </Radio.Group>
                      </Form.Item>
                    </Form>
                  </FlexibleDiv>
                </RadioStyle>
                <Text className="bodyText">{item.content}</Text>
                <FlexibleDiv
                  justifyContent="flex-start"
                  width="80%"
                  height="max-content"
                  margin="20px 0  40px 0"
                  className="buttonWrap"
                >
                  <Button style={{ backgroundColor: item.buttonColor }}>
                    Buy Now
                  </Button>
                </FlexibleDiv>
              </FlexibleDiv>
            ))}
          </GridableDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </SubscriptionWrap>
  );
};

export default Subscription;
