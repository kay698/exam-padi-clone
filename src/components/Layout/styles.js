import styled from "styled-components";

export const DashboardLayoutStyles = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  .ant-layout-content {
    width: calc(100% - 200px);
    height: max-content;
    margin: 70px 0 0 200px;
    min-height: calc(100vh - 70px);
    background-color: white;

    @media (max-width: 1000px) {
      width: calc(100% -70px);
      margin-left: 70px;
    }
  }
  .ant-layout-sider-children {
    height: max-content;
  }
`;
