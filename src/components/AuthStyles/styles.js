import styled from "styled-components";

export const AuthStylesWrap = styled.div`
  width: 100vw;
  height: max-content;

  .logo {
    min-height: 70px;
  }

  .auth {
    min-height: 100vh;
    height: max-content;
    padding: 30px 0 70px 0;

    .auth__sub {
      @media (min-width: 600px) {
        width: 500px;
      }

      h5 {
        font-size: 24px;
        font-weight: 500;
        color: #2f2d51;
        margin: 50px 0 30px 0;
      }

      .authForm {
        background: #f3f2ff;
        border-radius: 20px;
        padding: 40px;
        animation: popUp 1s 1 ease;
        transform: translateY(0);

        .instructionsText {
          font-weight: normal;
          color: #4f4f4f;
          margin-bottom: 30px;
          line-height: 20px;
        }

        .ant-form {
          width: 100%;

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
              border-radius: 0;
              margin-bottom: 0 !important;
              height: 100%;
            }
          }
          .forgotPassword {
            margin-top: -15px;
            a {
              font-weight: 300;
              transition: all 0.3s ease;
              font-size: 12px;
              color: #6bbb99;
              :hover {
                opacity: 0.7;
                font-size: 13px;
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
            margin: ${(props) =>
              props.login ? "30px 0 50px 0" : "10px 0 50px 0"};

            :hover {
              opacity: 0.7;
            }

            @media (max-width: 600px) {
              height: 45px;
              margin-bottom: 40px;
              span {
                font-size: 14px;
              }
            }
          }
        }
        @media (max-width: 600px) {
          padding: 40px 10px;
        }
      }
    }
  }

  @keyframes popUp {
    0% {
      transform: translateY(100px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
