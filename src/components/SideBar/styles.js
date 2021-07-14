import styled from "styled-components";

export const DashboardSideBarStyles = styled.div`
  width: max-content;
  height: max-content;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
  color: red;

  .ant-layout-sider {
    width: 200px;
    height: max-content;
    min-height: 100vh;
    background-color: white;
    @media (max-width: 1000px) {
      width: 70px !important;
      min-width: 70px !important;
    }

    .sideBar__sub {
      padding: 20px 0;

      .imageWrap {
        min-height: 50px;
        @media (max-width: 1000px) {
          width: 100%;
          img {
            width: 40%;
          }
        }
      }
      .buttonWrap {
        margin-top: 30px;

        .ant-btn-primary {
          background: #5b64b1;
          border-radius: 20px;
          padding: 0 30px;
          height: 50px;
          svg {
            margin: 0 10px -1px 0;
            font-size: 12px;
          }
          span {
            font-size: 12px;
          }

          @media (max-width: 1000px) {
            width: 100%;
            padding: 0;
            border-radius: 0;
            svg {
              margin: 0;
              font-size: 20px;
            }
            span {
              display: none;
            }
          }
        }
      }
      .sideBar__sub__itemsWrap {
        padding: 40px 0;

        a {
          width: 100%;

          .itemSubWrap {
            transition: all 0.3s ease;
            padding: 10px;
            margin: 10px 0;
            opacity: 0.5;
            min-height: 40px;

            img {
              margin: 0 10px;
            }
            span {
              font-weight: 500;
              font-size: 12px;
              letter-spacing: 0.05rem;
            }
          }
          .active {
            opacity: 1;
            background: #b2f4dc;
            border-radius: 15px;
          }
        }
      }
      @media (max-width: 1000px) {
        width: 100%;

        .itemSubWrap {
          justify-content: center;
          margin: 5px 0 !important;
          border-radius: 0 !important;

          img {
            margin: 0;
          }
          span {
            display: none;
          }
        }
      }
    }
  }
`;
