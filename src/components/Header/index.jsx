import React from "react";
import { Layout, Input, Typography, Dropdown, Button, Menu } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { HeaderStyles } from "./styles";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import MessageIcon from "../../assets/svgs/messages.svg";
import PersonIcon from "../../assets/svgs/person.svg";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Link to="/profile">
      <Menu.Item style={{ color: "#1890ff" }}>Profile</Menu.Item>
    </Link>
    <Menu.Item style={{ color: "#1890ff" }}>Logout</Menu.Item>
  </Menu>
);

const DashboardHeader = () => {
  const { Header } = Layout;
  const { Text } = Typography;
  return (
    <HeaderStyles>
      <Header>
        <FlexibleDiv
          className="header__sub"
          height="100%"
          justifyContent="space-between"
        >
          <FlexibleDiv
            width="55%"
            height="max-content"
            className="header__sub__inputWrap"
          >
            <Input
              placeholder="Search for a lesson or subject"
              prefix={<SearchOutlined />}
            />
          </FlexibleDiv>
          <FlexibleDiv
            justifyContent="space-evenly"
            height="max-content"
            className="header__sub__otherInfoWrap"
          >
            <Text className="studentClass">SENIOR CLASS</Text>
            <FlexibleDiv className="notificationsWrap">
              <img src={MessageIcon} alt="" />
              <FlexibleDiv className="notifications">
                <span>2</span>
              </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv width="max-content" flexWrap="nowrap">
              <Dropdown overlay={menu} placement="bottomRight">
                <Button disabled>
                  <img src={PersonIcon} alt="" />
                  <Text className="personName">Kelechi Ogbuka</Text>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </Header>
    </HeaderStyles>
  );
};

export default DashboardHeader;
