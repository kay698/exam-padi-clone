import React from "react";
import { Layout } from "antd";
import DashboardHeader from "../Header";
import DashboardSideBar from "../SideBar";
import { DashboardLayoutStyles } from "./styles";

const DashboardLayout = ({ children }) => {
  const { Content } = Layout;

  return (
    <DashboardLayoutStyles>
      <Layout>
        <DashboardHeader />
        <DashboardSideBar />
        <Content>{children}</Content>
      </Layout>
    </DashboardLayoutStyles>
  );
};

export default DashboardLayout;
