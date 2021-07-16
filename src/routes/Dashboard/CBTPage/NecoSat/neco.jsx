import CbtLayout from "../../../../components/CBTlayout";
import { NecoSatPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Neco } from "../../../../utils/dataHelpers/NecoSat";
import { Typography } from "antd";

const NECO = () => {
  const { Title } = Typography;
  return (
    <CbtLayout>
      <NecoSatPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
         <Title level={5}>Neco</Title>
        </FlexibleDiv>
      </NecoSatPageStyles>
    </CbtLayout>
  );
};

export default NECO;
