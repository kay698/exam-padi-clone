import CbtLayout from "../../../../components/CBTlayout";
import { CbtPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { CbtWaecCom } from "../WaecJamb/styles";
import JambItems from "./JambItems";


const JAMB = () => {
  return (
    <CbtLayout>
      <CbtPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          <CbtWaecCom>
            <JambItems />
          </CbtWaecCom>
        </FlexibleDiv>
      </CbtPageStyles>
    </CbtLayout>
  );
};

export default JAMB;
