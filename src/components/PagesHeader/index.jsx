import React from "react";
import { PageHeaderStyles } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import HeaderIllustration from "../../assets/svgs/otherPagesHeaderIllustration.svg";
import { Typography } from "antd";

const PagesHeader = ({ headerText }) => {
  const { Title } = Typography;
  return (
    <PageHeaderStyles>
      <FlexibleDiv
        className="pages__header__sub"
        justifyContent="space-between"
      >
        <FlexibleDiv
          flexDir="column"
          alignItems="flex-start"
          className="headerTextSection"
        >
          <Title level={3}>{headerText}</Title>
        </FlexibleDiv>
        <img src={HeaderIllustration} alt="" />
      </FlexibleDiv>
    </PageHeaderStyles>
  );
};

export default PagesHeader;
