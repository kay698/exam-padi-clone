import React, { useState } from "react";
import { FlexibleDiv } from "../../components/Box/styles";
import { OrderStyles, OrderBox } from "./styles";
import Logo from "../../assets/svgs/noTextLogo.svg";
import { Typography, Form, Radio, Button } from "antd";
import Paystack from "../../assets/svgs/paystack.svg";
import Bank from "../../assets/svgs/bank.svg";

const OrderSummary = () => {
  const { Text, Title } = Typography;
  const [paymentMethod, setPaymentMethod] = useState(null);

  const handlePaymentMethod = (e) => {
    const { value } = e.target;
    setPaymentMethod(value);
  };

  return (
    <OrderStyles>
      <div className="floatingLogo">
        <img src={Logo} alt="" />
      </div>
      <FlexibleDiv className="orderSummary">
        <FlexibleDiv
          flexDir="column"
          className="orderSummary__sub"
          width="600px"
          height="max-content"
          justifyContent="flex-start"
        >
          <FlexibleDiv
            flexDir="column"
            className="orderSummary__sub__sections"
            alignItems="flex-start"
          >
            <Title level={4}>Order Summary</Title>
            <OrderBox>
              <FlexibleDiv flexDir="column">
                <FlexibleDiv justifyContent="space-between">
                  <Text className="orderBox__headerText">
                    Subscription plan
                  </Text>{" "}
                  <Text className="orderBox__childText">
                    Senior (WAEC, NECO, JAMB, SAT)
                  </Text>
                </FlexibleDiv>
                <FlexibleDiv justifyContent="space-between">
                  <Text className="orderBox__headerText">Frequency</Text>{" "}
                  <Text className="orderBox__childText">Monthly</Text>
                </FlexibleDiv>
                <FlexibleDiv justifyContent="space-between">
                  <Text className="orderBox__headerText">Price</Text>{" "}
                  <Text className="orderBox__childText  boldText">
                    1,000 NGN
                  </Text>
                </FlexibleDiv>
              </FlexibleDiv>
            </OrderBox>
          </FlexibleDiv>

          <FlexibleDiv
            flexDir="column"
            className="orderSummary__sub__sections"
            alignItems="flex-start"
          >
            <Title level={4}>Select A Payment Method</Title>
            <OrderBox>
              <FlexibleDiv>
                <Form>
                  <Form.Item
                    name="payment-method"
                    onChange={handlePaymentMethod}
                  >
                    <Radio.Group>
                      <Radio value="paystack">
                        <img alt="" src={Paystack} />
                      </Radio>

                      <Radio value="bank">
                        <div>
                          <img alt="" src={Bank} />
                          <Text className="bankText"> Bank Transfer</Text>
                        </div>
                        {paymentMethod === "bank" && (
                          <Text className="bankSelected">
                            Zenith Bank - 000000 - Skool Media
                          </Text>
                        )}
                      </Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Button type="primary" htmlType="submit">
                    Pay 1,000 NGN
                  </Button>
                </Form>
              </FlexibleDiv>
            </OrderBox>
          </FlexibleDiv>
        </FlexibleDiv>
      </FlexibleDiv>
    </OrderStyles>
  );
};

export default OrderSummary;
