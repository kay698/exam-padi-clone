import styled from "styled-components";

export const ReportSubPagesStyles = styled.div`
  width: 100%;

  .reportSubPages {
    .reportSubPagesWrap {
      margin-top: 30px;
      padding: 0 30px;
      width: 100%;
      height: max-content;

      @media (max-width: 520px) {
        padding: 0 10px;
      }

      .achievementsSubHeader {
        color: #4f4f4f;
        line-height: 20px;
      }
      .badgesHeader {
        color: #4f4f4f;
        margin: 50px 0 20px 0;
        text-align: left;
        width: 100%;
      }

      .achievements__badges {
        margin-bottom: 30px;

        @media (max-width: 400px) {
          justify-content: center;
        }

        .badge {
          border-radius: 15px;
          margin-right: 20px;
          @media (max-width: 600px) {
            width: 150px;
            height: 140px;
          }
          @media (max-width: 520px) {
            width: 100px;
            height: 90px;
          }
          @media (max-width: 400px) {
            width: 150px;
            height: 140px;
            margin-right: 0;
          }
          img {
            width: 35%;
            height: auto;
          }
        }
        .badge__bodyText {
          font-size: 12px;
          margin-bottom: 20px;

          @media (max-width: 520px) {
            font-size: 10px;
          }
        }
      }
      .reportSubPagesWrap__header {
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
          color: #bbb;
          min-width: 55px;
          transition: all 0.3s ease;
          :hover {
            text-decoration: underline;
          }
          @media (max-width: 500px) {
            margin: -20px -30px 0 0;
          }
        }
      }
    }

    .testScores {
      background: #fafafe;
      border-radius: 40px 40px 0 0;
      margin-top: 40px;
      padding: 30px 20px;

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
    }
  }
`;
