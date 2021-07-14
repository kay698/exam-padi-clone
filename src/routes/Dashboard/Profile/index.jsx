import React from "react";
import DashboardLayout from "../../../components/Layout";
import { ProfileStyles } from "./styles";
import { FlexibleDiv } from "../../../components/Box/styles";
import { Typography } from "antd";
import ImageBg from "../../../assets/svgs/imageBg.svg";
import CameraImage from "../../../assets/svgs/addImage.svg";
import LanguageIcon from "../../../assets/svgs/language.svg";
import ClockIcon from "../../../assets/svgs/clock.svg";
import PlanIcon from "../../../assets/svgs/plan.svg";
import ReportIcon from "../../../assets/svgs/grayReport.svg";
import TCIcon from "../../../assets/svgs/grayTerms.svg";
import MessageIcon from "../../../assets/svgs/grayMessage.svg";
import PrivacyIcon from "../../../assets/svgs/grayPrivacy.svg";
import ShareIcon from "../../../assets/svgs/grayShare.svg";
import { Link } from "react-router-dom";
import PagesHeader from "../../../components/PagesHeader";
import { Collapse, Form, Radio } from "antd";
import CustomTable from "../../../components/Table";
import {
  ReceiptsTableData,
  ReceiptsTableHead,
} from "../../../utils/dataHelpers/tablesData";
import { OverFlowScrollBar } from "../../../components/OverflowScroll/styles";

const Profile = () => {
  const { Title, Text } = Typography;
  const { Panel } = Collapse;

  const genExtra = () => (
    <div
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    >
      {" "}
    </div>
  );

  return (
    <DashboardLayout>
      <ProfileStyles>
        <FlexibleDiv justifyContent="flex-start" className="profile__sub">
          <FlexibleDiv width="97%">
            {/* header section */}
            <PagesHeader headerText="Profile 👨‍" />

            {/* body section */}

            <FlexibleDiv className="profile__body" flexDir="column">
              {/* personal details section */}
              <FlexibleDiv
                justifyContent="space-between"
                className="profile__body__personalDetails"
                alignItems="flex-start"
              >
                {/* left details section */}
                <FlexibleDiv
                  width="max-content"
                  className="personalDetails__sub"
                  justifyContent="space-bewteen"
                >
                  {/* profile picture section */}
                  <FlexibleDiv
                    className="profileImageSection"
                    width="130px"
                    height="max-content"
                    alignItems="flex-end"
                    flexWrap="nowrap"
                  >
                    <FlexibleDiv
                      className="imageWrap"
                      width="110px"
                      height="110px"
                    >
                      <img src={ImageBg} alt="" />
                    </FlexibleDiv>
                    <FlexibleDiv className="cameraIcon" width="max-content">
                      <label htmlFor="profileImage" className={"profileImage"}>
                        <img src={CameraImage} alt="" />
                      </label>
                      <input
                        hidden
                        type="file"
                        id={"profileImage"}
                        name={"profileImage"}
                      />
                    </FlexibleDiv>
                  </FlexibleDiv>

                  {/* name and email section */}
                  <FlexibleDiv
                    flexDir="column"
                    alignItems="flex-start"
                    width="max-content"
                    className="nameSection"
                  >
                    <Title level={5}>Kelechi Ogbuka</Title>
                    <Text>ogbukakelechi20@gmail.com</Text>
                    <Link to="/profile-edit">Edit Profile</Link>
                  </FlexibleDiv>
                </FlexibleDiv>

                {/* change password section */}
                <Link to="/profile-change-password" className="changePassword">
                  Change Password
                </Link>
              </FlexibleDiv>

              {/* accordion sections */}
              <Collapse expandIconPosition="right">
                {/* Plan Section */}
                <>
                  <div className="sideIcon">
                    <img src={PlanIcon} alt="" />
                  </div>
                  <Panel header="Your Plan" key="1" extra={genExtra()}>
                    <FlexibleDiv
                      flexDir="column"
                      alignItems="flex-start"
                      className="planBody"
                    >
                      <Title level={5}>SENIOR PACKAGE</Title>
                      <Text>
                        Your next bill is <b>NGN 0.00</b> on <b>x/x/xx</b>
                      </Text>
                      <Link>Change Package</Link>
                    </FlexibleDiv>
                  </Panel>
                </>

                {/* language section */}
                <>
                  <div className="sideIcon">
                    <img src={LanguageIcon} alt="" />
                  </div>
                  <Panel header="Language" key="2" extra={genExtra()}>
                    <Form>
                      <Form.Item
                        name="laguage"
                        label=""
                        // rules={[
                        //   {
                        //     required: true,
                        //     message: "Please pick an item!",
                        //   },
                        // ]}
                      >
                        <Radio.Group>
                          <Radio value="English">English</Radio>
                          <br />
                          <br />
                          <Radio value="Yoruba">Yoruba</Radio> <br />
                          <br />
                          <Radio value="Igbo">Igbo</Radio> <br />
                          <br />
                          <Radio value="Hausa">Hausa</Radio> <br />
                          <br />
                        </Radio.Group>
                      </Form.Item>
                    </Form>
                  </Panel>
                </>

                {/* reciepts section */}
                <>
                  <div className="sideIcon">
                    <img src={ClockIcon} alt="" />
                  </div>
                  <Panel header="Receipts" key="3" extra={genExtra()}>
                    <FlexibleDiv
                      className="receipts"
                      justifyContent="space-between"
                      flexDir="column"
                    >
                      <OverFlowScrollBar>
                        <CustomTable
                          columns={ReceiptsTableHead}
                          dataSource={ReceiptsTableData.splice(0, 2)}
                          pagination={false}
                        />
                      </OverFlowScrollBar>
                      <FlexibleDiv justifyContent="flex-end">
                        <Link to="profile-receipts" className="viewReceipts">
                          View All
                        </Link>
                      </FlexibleDiv>
                    </FlexibleDiv>
                  </Panel>
                </>

                {/* Account Section */}
                <>
                  <div className="sideIcon">
                    <img src={ClockIcon} alt="" />
                  </div>
                  <Panel header="Account" key="4" extra={genExtra()}>
                    <FlexibleDiv
                      flexDir="column"
                      alignItems="flex-start"
                      className="accountBody"
                    >
                      {/* actions */}

                      <FlexibleDiv flexDir="column" alignItems="flex-start">
                        <Title level={5}>Actions</Title>
                        <FlexibleDiv justifyContent="flex-start">
                          <img src={ReportIcon} alt="" />
                          <Link>Reports</Link>
                        </FlexibleDiv>
                        <FlexibleDiv
                          flexWrap="nowrap"
                          justifyContent="flex-start"
                        >
                          <img src={MessageIcon} alt="" />
                          <Link>Notifications</Link>
                        </FlexibleDiv>
                        <FlexibleDiv justifyContent="flex-start">
                          <img src={ShareIcon} alt="" />
                          <Text>Share App</Text>
                        </FlexibleDiv>
                      </FlexibleDiv>

                      {/* About */}
                      <FlexibleDiv
                        flexDir="column"
                        alignItems="flex-start"
                        className="accountSubSections"
                      >
                        <Title level={5}>About</Title>
                        <FlexibleDiv justifyContent="flex-start">
                          <img src={PrivacyIcon} alt="" />
                          <Link>Privacy Policy</Link>
                        </FlexibleDiv>

                        <FlexibleDiv
                          flexWrap="nowrap"
                          justifyContent="flex-start"
                        >
                          <img src={TCIcon} alt="" />
                          <Link>Terms and Conditions</Link>
                        </FlexibleDiv>
                      </FlexibleDiv>

                      {/* Support */}
                      <FlexibleDiv
                        flexDir="column"
                        alignItems="flex-start"
                        className="accountSubSections"
                      >
                        <Title level={5}>Support</Title>
                        <Link className="lastLinks">Get Help</Link>
                        <Link className="lastLinks">Log Out</Link>
                      </FlexibleDiv>
                    </FlexibleDiv>
                  </Panel>
                </>
              </Collapse>
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ProfileStyles>
    </DashboardLayout>
  );
};

export default Profile;
