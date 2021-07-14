import styled from "styled-components";

export const OrderStyles = styled.div`
  width: 100%;
  height: max-content;
  min-height: 100vh;
  position: relative;

  .orderSummary {
    padding: 50px 0;
    .orderSummary__sub {
      @media (max-width: 700px) {
        width: 92%;
      }
      .orderSummary__sub__sections {
        padding-top: 100px;
        @media (max-width: 700px) {
          padding-top: 70px;
        }
        h4 {
          color: #2f2d51;
          font-weight: 500;
          @media (max-width: 700px) {
            font-size: 17px;
          }
        }
      }
    }
  }
`;

export const OrderBox = styled.div`
  width: 100%;
  height: max-content;
  padding: 20px;
  background: #f3f2ff;
  border-radius: 20px;

  & > div {
    & > div {
      margin: 20px 0;

      .orderBox__headerText {
        color: #5b64b1;
      }

      .orderBox__childText {
        font-size: 14px;
        color: #414141;
        @media (max-width: 450px) {
          width: 100%;
          font-size: 12px;
        }
      }

      .boldText {
        font-weight: bold;
      }
    }
  }

  form {
    width: 90%;

    @media (max-width: 700px) {
      width: 100%;
    }
    .ant-btn-primary {
      width: 100%;
      margin: 20px 0 50px 0;
      height: 47px;
      background: #5b64b1;
      border-radius: 7px;
      border: none;
    }
    .ant-radio-group {
      width: 100%;

      img {
        margin: -6px 3px 0 20px;
        @media (max-width: 450px) {
          margin-left: 5px;
        }
      }
      .bankText {
        font-weight: 600;
      }
      .bankSelected {
        margin: 20px 0 0 20px;
        color: #414141;
        @media (max-width: 450px) {
          font-size: 11px;
          margin-left: 5px;
        }
      }
      .ant-radio-wrapper {
        width: 100%;
        padding: 20px;
        background: #fefefe;
        border-radius: 8px;
        margin-top: 25px;
        @media (max-width: 450px) {
          padding: 20px 10px;
        }

        .ant-radio-inner {
          background-color: transparent;
          border-color: black;
          border-width: 2px;
          height: 18px;
          width: 18px;
        }
        .ant-radio-inner::after {
          background-color: black;
        }
      }
    }
  }
`;
