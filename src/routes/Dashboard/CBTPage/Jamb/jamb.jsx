import CbtLayout from "../../../../components/CBTlayout";
import { CbtPageStyles } from "../styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import { CbtWaecCom } from "../Waec/styles";
import JambItems from "./JambItems";


const JAMB = () => {
  const { Title } = Typography;
  return (
    <CbtLayout>
      <CbtPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          {/* <Title level={5}>JAMB</Title> */}
          <CbtWaecCom>
            <JambItems />
          </CbtWaecCom>
        </FlexibleDiv>
      </CbtPageStyles>
    </CbtLayout>
  );
};

export default JAMB;
