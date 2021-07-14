import styled from "styled-components";

export const ProfileSubPagesStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .profileSubPages {
    @media (max-width: 1000px) {
      & > div {
        width: 100%;
      }
    }

    /* body section styles */

    .profileSubPagesWrap {
      padding: 30px;
      width: 100%;
      height: max-content;
      background: #fafafe;
      border-radius: 60px 60px 0 0;
      @media (max-width: 1280px) {
        width: 100%;
      }
      @media (max-width: 800px) {
        padding: 0 20px 20px 20px;
        border-radius: 20px 20px 0 0;
      }
      h5 {
        margin-bottom: 40px;
      }
      .profileImageSection {
        margin-bottom: 30px;
        .cameraIcon {
          margin-left: -30px;
          img {
            cursor: pointer;
          }
        }

        .imageWrap {
          max-width: 110px;
          max-height: 110px;
          min-width: 110px;
          min-height: 110px;
          border-radius: 100%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
      .ant-btn-primary {
        height: 55px;
        background: #6bbb99;
        box-shadow: 0px 14px 24px #e0fbf1;
        border-radius: 16px;
        width: 100%;
        border: none;
        transition: all 0.3s ease;
        font-size: 17px;
        font-weight: 600;
        margin: 40px 0;
        :hover {
          opacity: 0.7;
        }

        @media (max-width: 600px) {
          height: 45px;
          margin: 10px 0 40px 0;
          span {
            font-size: 14px;
          }
        }
      }
      .ant-form {
        width: 500px;

        @media (max-width: 600px) {
          width: 100%;
        }

        .ant-input,
        .passwordInput {
          height: 55px;
          background: #fefefe;
          border: 1px solid #bdbdbd;
          border-radius: 8px;

          @media (max-width: 600px) {
            height: 45px;
          }
        }
        .passwordInput {
          input {
            border: none;
            height: 90%;
          }
        }
      }

      .ant-table {
        background-color: #ffffff;
        border-radius: 15px;
        @media (max-width: 1000px) {
          overflow-x: scroll;
          .ant-table-container {
            min-width: 900px;
          }
        }
        .ant-table-thead > tr > th,
        .ant-table-tbody > tr > td {
          border: none;
          background-color: transparent;
        }
      }
      .profileSubPagesWrap__header {
        margin: 20px 0;
        position: relative;

        h4 {
          font-weight: 500;
          font-size: 18px;
          color: #2f2d51;
        }
        a {
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 1px;
          color: #5b64b1;
          min-width: 55px;
          transition: all 0.3s ease;
          :hover {
            text-decoration: underline;
          }
          @media (max-width: 600px) {
            margin: ${({ receipts }) =>
              receipts ? "0 0 0 -40px" : "0 -20px 0 0"};
          }
        }
      }
    }
  }
`;
