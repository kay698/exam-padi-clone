import DashboardLayout from "../Layout";
import { CbtLayoutStyles } from "./styles";
import { FlexibleDiv } from "../Box/styles";
import PagesHeader from "../PagesHeader";
import { CbtNavListItems } from "../../utils/dataHelpers/cbtNavItems";
import { Link } from "react-router-dom";
import { Buttons } from "../../utils/dataHelpers/cbtNavItems";
import { Button } from "antd";

const CbtLayout = ({ children }) => {
  const activePath = window.location.pathname;
  return (
    <DashboardLayout>
      <CbtLayoutStyles>
        <FlexibleDiv justifyContent="flex-start" className="CbtLayout__sub">
          <FlexibleDiv width="97%">
            <PagesHeader headerText="Computer Based Test (CBT) 💻" />
            <FlexibleDiv>
            <FlexibleDiv
              className="nav"
              justifyContent="space-between"
              flexWrap="nowrap"
            >
              <div className="div">
              {CbtNavListItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className={activePath === item.to && "activeTab"}
                >
                  {item.title}
                </Link>
              ))}
              </div>
              <div className="button">
                {Buttons.map((item, index) => (
                  <Button key={index} className='buts'>
                    {item.but}
                  </Button>
                ))}
              </div>
            </FlexibleDiv>
            </FlexibleDiv>
            <FlexibleDiv>
              {children}
              </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </CbtLayoutStyles>
    </DashboardLayout>
  );
};

export default CbtLayout;