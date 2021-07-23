import CbtLayout from "../../../../components/CBTlayout";
import { CbtWaecCom, CbtPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import WaecItems from "./WaecItems";

const WAEC = () => {
  return (
    <CbtLayout>
      <CbtPageStyles>
        <FlexibleDiv justifyContent="flex-start" className="cbtPage__sub">
          <CbtWaecCom>
            <WaecItems />
          </CbtWaecCom>
        </FlexibleDiv>
      </CbtPageStyles>
    </CbtLayout>
  );
};

export default WAEC;

