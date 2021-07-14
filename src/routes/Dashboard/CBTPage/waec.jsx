import CbtLayout from "../../../components/CBTlayout";
import { CbtPageStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";

const WAEC = () => {
  const { Title } = Typography;
  return (
    <CbtLayout>
      <CbtPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          <Title level={5}>WAEC</Title>
        </FlexibleDiv>
      </CbtPageStyles>
    </CbtLayout>
  );
};

export default WAEC;
