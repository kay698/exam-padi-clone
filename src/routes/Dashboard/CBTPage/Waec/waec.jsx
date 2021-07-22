import CbtLayout from "../../../../components/CBTlayout";
import { CbtPageStyles } from "../styles";
import { CbtWaecCom } from "../Waec/styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Typography } from "antd";
import WaecItems from "./WaecItems";

// const activePath = window.location.pathname;
const WAEC = () => {
  const { Title } = Typography;
  return (
    <CbtLayout>
      <CbtPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          {/* <Title level={5}>WAEC</Title> */}
          <CbtWaecCom style={{ margin: "12px" }}>
            <WaecItems />
          </CbtWaecCom>
        </FlexibleDiv>
      </CbtPageStyles>
    </CbtLayout>
  );
};

export default WAEC;
