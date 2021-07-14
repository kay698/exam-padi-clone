import styled from "styled-components";

export const HeaderStyles = styled.div`
  width: calc(100vw - 200px);
  height: max-content;
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;

  @media (max-width: 1000px) {
    width: calc(100vw - 70px);
  }

  .ant-layout-header {
    background-color: white;
    padding: 0;
    line-height: 0;
    height: 70px;

    .header__sub__inputWrap {
      @media (max-width: 1000px) {
        width: 40%;
      }
      @media (max-width: 650px) {
        width: 70%;
      }
      @media (max-width: 470px) {
        width: 60%;
      }

      .ant-input-affix-wrapper {
        background: #f8f8f8;
        border: 1px solid #cacaca;
        border-radius: 10px;
        svg {
          color: #c4c4c4;
        }
        input {
          font-size: 12px;
          background: transparent;
        }
      }
    }

    .header__sub__otherInfoWrap {
      width: 450px;

      @media (max-width: 1250px) {
        width: 320px;
        justify-content: space-between;
      }
      @media (max-width: 650px) {
        width: 90px;
      }

      .studentClass {
        background: #fde9d2;
        border-radius: 8px;
        font-weight: 600;
        font-size: 9px;
        color: #b76100;
        letter-spacing: 0.1em;
        padding: 15px;
        @media (max-width: 650px) {
          display: none;
        }
      }

      .notificationsWrap {
        width: max-content;
        height: max-content;
        cursor: pointer;
        position: relative;

        :hover {
          .notifications {
            width: 20px;
            height: 20px;
          }
        }
        .notifications {
          transition: all 0.3s ease;
          width: 16px;
          height: 16px;
          background-color: red;
          border-radius: 100%;
          color: white;
          font-size: 10px;
          position: absolute;
          right: -10px;
          top: -8px;
          font-weight: bold;
        }
      }

      .personName {
        font-weight: 600;
        font-size: 12px;
        margin-left: 10px;
        @media (max-width: 650px) {
          display: none;
        }
      }

      button {
        padding: 0 !important;
        border: none;

        ::after {
          display: none;
        }

        svg {
          font-size: 10px;
          margin: 0 10px 0 4px;
          cursor: pointer;
          color: black !important;
          @media (max-width: 650px) {
            margin: 0 10px -6px -4px;
          }
        }
      }
    }
  }
`;
