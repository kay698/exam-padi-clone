import styled from "styled-components";

export const ReportsStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .reports__sub {
    @media (max-width: 1200px) {
      justify-content: center;
    }
  }

  /* body section styles */
  .reports__sub__body {
    padding-top: 60px;
    position: relative;
    @media (max-width: 1200px) {
      flex-direction: column-reverse;
    }

    .rightCardsWrap {
      overflow-x: hidden;

      @media (max-width: 1200px) {
        width: 100%;
        justify-content: center;
        padding-left: 20px;
        .reportSideCards {
          margin-right: 20px;
        }
      }

      .reportSideCards {
        width: 167px;
        height: 112px;
        min-width: 167px;
        min-height: 112px;
        border-radius: 20px;
        margin-bottom: 40px;
        background: #313848;
        span {
          font-size: 10px;
        }
        span,
        h3 {
          margin: 0;
          color: #ffffff;
        }
      }
    }

    .leftSection {
      padding: 0 30px;
      width: 80%;
      height: max-content;

      @media (max-width: 1200px) {
        width: 100%;
        padding: 0;
      }
      @media (max-width: 800px) {
        padding: 0 20px 20px 20px;
        border-radius: 20px 20px 0 0;
      }

      .leftSection__badges {
        margin-bottom: 50px;

        @media (max-width: 1200px) {
          justify-content: space-evenly;
        }
        @media (max-width: 670px) {
          justify-content: flex-start;
          overflow-x: scroll;
          & > div {
            margin: 0 20px 20px 0;
          }
        }
        @media (max-width: 500px) {
          margin-top: 40px;
        }

        .badge {
          border-radius: 15px;
          margin-right: 20px;
          @media (max-width: 1200px) and (min-width: 700px) {
            margin-right: 0;
          }

          img {
            width: 35%;
            height: auto;
          }
        }
        .badge__bodyText {
          font-size: 12px;
          @media (max-width: 520px) {
            font-size: 10px;
          }
        }
      }
      .test__scores__wrap {
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
      .leftSection__header {
        margin-bottom: 20px;
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
          @media (max-width: 500px) {
            margin-bottom: -40px;
          }
        }
      }
    }
  }
`;
