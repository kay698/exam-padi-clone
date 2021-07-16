import CbtLayout from "../../../../components/CBTlayout";
import { NecoSatPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";

const SAT = () => {
  const { Title } = Typography;
  return (
    <CbtLayout>
      <NecoSatPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          <Title level={5}>SAT</Title>
        </FlexibleDiv>
      </NecoSatPageStyles>
    </CbtLayout>
  );
};

export default SAT;
