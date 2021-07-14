import React from "react";
import { Layout, Button, Typography } from "antd";
import { FlexibleDiv } from "../Box/styles";
import { DashboardSideBarStyles } from "./styles";
import Logo from "../../assets/svgs/noTextLogo.svg";
import { SideBarItems } from "../../utils/dataHelpers/sideBarItems";
import { Link } from "react-router-dom";
import { RiChatSmile2Line as GetHelp } from "react-icons/ri";

const DashboardSideBar = () => {
  const { Sider } = Layout;
  const { Text } = Typography;
  const activePath = window.location.pathname;
  return (
    <DashboardSideBarStyles>
      <Sider>
        <FlexibleDiv>
          <FlexibleDiv
            width="140px"
            justifyContent="flex-start"
            alignItems="flex-start"
            className="sideBar__sub"
          >
            {/* logo */}
            <FlexibleDiv justifyContent="flex-start">
              <FlexibleDiv width="max-content" className="imageWrap">
                <img src={Logo} alt="" />
              </FlexibleDiv>
            </FlexibleDiv>

            {/* list items  */}
            <FlexibleDiv
              flexDir="column"
              alignItems="flex-start"
              className="sideBar__sub__itemsWrap"
            >
              {SideBarItems.map((item, index) => (
                <Link to={item.to} key={index}>
                  <FlexibleDiv
                    justifyContent="flex-start"
                    className={
                      activePath === item.to ||
                      item.subRoutes.includes(activePath)
                        ? "itemSubWrap active"
                        : "itemSubWrap"
                    }
                  >
                    <img src={item.icon} alt="" />
                    <Text>{item.title}</Text>
                  </FlexibleDiv>
                </Link>
              ))}
            </FlexibleDiv>

            {/* get help section */}
            <FlexibleDiv className="buttonWrap">
              <Button type="primary" icon={<GetHelp />}>
                <span>Get Help</span>
              </Button>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </Sider>
    </DashboardSideBarStyles>
  );
};

export default DashboardSideBar;
