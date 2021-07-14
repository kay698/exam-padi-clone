import styled from "styled-components";

export const SubscriptionWrap = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  padding: 30px 0 60px 0;
  overflow-x: hidden;

  .gridBox {
    @media (max-width: 850px) {
      grid-gap: 20px;
    }
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-gap: 50px;
    }
  }

  .cardswrap {
    & > div {
      margin-top: 50px;
    }

    h3 {
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 0.03em;
      color: #2f2d51;
      width: 90%;
      text-align: center;
      margin: 30px 0;
      @media (max-width: 600px) {
        font-size: 20px;
      }
    }
    .headerSubText {
      font-size: 18px;
      color: #2f2d51;
      width: 90%;
      text-align: center;
      @media (max-width: 400px) {
        font-size: 16px;
      }
    }

    .card {
      width: 372px;
      height: 420px;
      border-radius: 16px;
      padding: 40px 0;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      /* ::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #4d245699;
        transition: all 0.7s ease;
        transform: translateY(1000px);
        z-index: 20;
      } */
      /* ::after {
        content: "Buy Now";
        width: 150px;
        height: 45px;
        position: absolute;
        background-color: white;
        transition: all 0.9s ease;
        transform: translateY(1000px);
        z-index: 30;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
      } */

      :hover {
        width: 400px;
        height: 450px;
        margin: 0 -30px -30px -15px;
        /* box-shadow: 0 1px 20px 1px #bbb; */
        /* transform: rotate3d(5.5, -0.866, 1, -25deg) rotate(1deg); */

        /* ::before {
          transform: translateY(0);
        }
        ::after {
          transform: translateY(50%);
        } */
      }

      @media (max-width: 400px) {
        width: 90%;
        margin-left: 5%;
      }

      h5 {
        font-weight: 600;
        font-size: 18px;
        letter-spacing: 0.02em;
        color: #ffffff;
        width: 80%;
        @media (max-width: 400px) {
          font-size: 16px;
          width: 90%;
        }
      }
      h4 {
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0.02em;
        color: #ffffff;
        text-align: center;
        margin: 5px 0;
      }

      .bodyText {
        width: 80%;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #e8edf8;
        @media (max-width: 400px) {
          width: 90%;
        }
      }
      .buttonWrap {
        @media (max-width: 400px) {
          width: 90%;
        }
        button {
          border-radius: 16px;
          height: 45px;
          width: 130px;
          border: none;
          color: #ffffff;
          transition: all 0.3s ease;
          font-weight: bold;
          :hover {
            width: 100%;
          }
        }
      }
    }
  }
`;

export const RadioStyle = styled.div`
  width: 100%;

  .ant-form-item {
    width: 250px;

    .ant-radio-inner {
      background-color: transparent;
      border-color: white;
      border-width: 2px;
      height: 18px;
      width: 18px;
    }
    .ant-radio-inner::after {
      background-color: white;
    }
  }
`;
