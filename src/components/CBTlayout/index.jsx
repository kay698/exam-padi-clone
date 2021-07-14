import DashboardLayout from "../Layout";
import { CbtLayoutStyles } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import PagesHeader from "../PagesHeader";
import { CbtNavListItems } from "../../utils/dataHelpers/cbtNavItems";
import { Link } from "react-router-dom";

const CbtLayout = ({ children }) => {
  const activePath = window.location.pathname;
  return (
    <DashboardLayout>
      <CbtLayoutStyles>
        <FlexibleDiv justifyContent="flex-start" className="CbtLayout__sub">
          <FlexibleDiv width="97%">
            <PagesHeader headerText="Computer Based Test (CBT) 💻" />
            <FlexibleDiv
              className="nav"
              justifyContent="flex-start"
              flexWrap="nowrap"
            >
              {CbtNavListItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={activePath === item.to && "activeTab"}
                >
                  {item.title}
                </Link>
              ))}
            </FlexibleDiv>
            <FlexibleDiv>{children}</FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </CbtLayoutStyles>
    </DashboardLayout>
  );
};

export default CbtLayout;
