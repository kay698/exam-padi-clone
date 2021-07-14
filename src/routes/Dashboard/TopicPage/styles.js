import styled from "styled-components";

export const TopicStyles = styled.div`
  width: 100%;
  padding: 50px 0;

  @media (max-width: 1000px) {
    padding: 50px 30px;
  }
  @media (max-width: 600px) {
    padding: 50px 15px;
  }

  .topic__sub {
    /* header */
    .topic__sub__header {
      h5 {
        margin: 0;
        font-weight: 600;
        font-size: 14px;
        color: #5b64b1;
      }
      h4 {
        margin: 0;
      }
    }

    /* body*/
    .topic__sub__body {
      padding: 30px 0;

      /* left section */
      .topic__sub__left {
        border-radius: 20px;
        background: #fafafe;
        overflow: hidden;

        @media (max-width: 800px) {
          width: 100%;
        }

        /* left section video section */
        .topic__sub__left__videoPreview {
          position: relative;
          cursor: pointer;

          img {
            width: 100%;
          }

          :hover {
            .overlay {
              background-color: #00000099;
            }
          }
          .overlay {
            background-color: #00000077;
            transition: all 0.3s ease;
            position: absolute;
            top: 0;
          }
          .playImageWrap {
            background-color: transparent;
            position: absolute;
            left: 47%;
            z-index: 1;

            @media (max-width: 1000px) {
              left: 44%;
            }

            ::before {
              content: "";
              position: absolute;
              z-index: 0;
              left: 30px;
              top: 30px;
              transform: translateX(-50%) translateY(-50%);
              animation: pulse-border 1500ms ease-out infinite;
              display: block;
              width: 40px;
              height: 40px;
              border: 1px solid #ffffff35;
              transition: all 0.3s ease-in-out;
              border-radius: 50%;

              @media (max-width: 1000px) {
                display: none;
              }
            }
            .play {
              color: white;
              margin: 0 !important;
              padding: 0 !important;
              font-size: 60px;
              transition: all 0.3s ease-in-out;
              animation: rotate 10s backwards infinite;

              @media (max-width: 1000px) {
                font-size: 40px;
              }
            }
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0);
          }

          10%,
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-border {
          0% {
            transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
            border: 10px solid #eeeeee50;
            width: 80px;
            height: 80px;
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(-50%) translateZ(0)
              scale(1.5);
            opacity: 0;
          }
        }

        /* left section text content */
        .topic__sub__left__textContent {
          padding: 40px;

          @media (max-width: 800px) {
            padding: 40px 10px;
          }

          /*  left section text content header*/
          .textContent__headerSection {
            .textContent__headerSection__icons {
              img {
                margin-left: 10px;
                width: 25%;
                cursor: pointer;
                transition: all 0.3s ease;

                :hover {
                  opacity: 0.5;
                }

                @media (max-width: 800px) {
                  width: 20%;
                }
              }
            }
            .headerTextWrap {
              @media (max-width: 700px) {
                width: 160px;
              }
            }
            span {
              font-weight: 500;
              font-size: 16px;
              line-height: 22px;
              color: #9d9d9d;
              cursor: pointer;
              transition: all 0.3s ease;
              position: relative;
              @media (max-width: 800px) {
                font-size: 13px;
              }

              :hover {
                color: gray;
              }
            }
            .activeTab {
              color: #000000;

              :hover {
                color: #000000;
              }
              ::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                left: 0;
                bottom: 0;
                background-color: black;
                animation: underline 0.3s ease 1;
              }

              @keyframes underline {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }
            }
          }
        }

        /*  left section text content body*/
        .bodyText {
          font-weight: normal;
          font-size: 12px;
          line-height: 20px;
          color: #9d9d9d;
          margin-top: 30px;
          min-height: 150px;

          @media (max-width: 600px) {
            line-height: 17px;
            font-size: 10px;
          }
          @media (max-width: 400px) {
            min-height: 200px;
            line-height: 17px;
            font-size: 10px;
          }
        }

        /*  left section text content footer*/
        .resources {
          margin: 0 15px 15px 0;
          border-radius: 10px;
          background-color: #d5ebe3;
          padding: 15px 10px;
          width: 30%;
          min-width: 150px;
          transition: all 0.3s ease;
          cursor: pointer;

          :hover {
            background-color: #d5ebe399;
          }

          a {
            text-decoration: underline;
            font-size: 11px;
            color: #50af87;
          }
        }
      }

      .topic__sub__right {
        .videosWrap {
          min-width: 350px;
          padding: 20px;
          background-color: #fafafe;
          border-radius: 15px;
          flex-wrap: wrap;
          overflow-x: hidden;

          .contentWrap {
            margin-bottom: 20px;
            overflow-y: hidden;
            /* cursor: pointer; */

            .contentHeader {
              padding: 20px;
              background-color: #f3f1ec;
              border-radius: 15px;
              height: 90px;
              .contentNumber {
                min-width: 50px;
                min-height: 50px;
                background-color: #828282;
                border-radius: 100%;
                margin-right: 15px;
                span {
                  color: #ffffff;
                  font-size: 16px;
                  font-weight: 600;
                }
              }

              .headerText {
                justify-content: flex-start;
                width: 200px;

                span {
                  width: 100%;
                  line-height: 20px;
                  color: #828282;
                  font-weight: 600;
                }
              }
              .lock {
                font-size: 20px;
                color: #828282;
              }
            }

            .unlockedSection {
              padding: 20px;
              background-color: #ffffff;
              border-radius: 15px;

              .subVideoHeader {
                .subVideoHeader__text {
                  width: 200px;
                  line-height: 20px;
                  color: #828282;
                  font-weight: 600;
                  margin-left: 10px;
                }
                .subVideoHeader__duration {
                  color: #ec523b;
                  font-weight: 600;
                }
              }

              .ant-form {
                margin-top: 10px;
                .ant-row {
                  margin-bottom: 0;
                }
                .ant-checkbox-wrapper {
                  margin-left: 35px;
                  color: #828282;
                }
                .ant-checkbox-inner {
                  border-radius: 100% !important;
                  border: 1px solid #828282;
                }
                .ant-checkbox-checked .ant-checkbox-inner {
                  background: linear-gradient(#fc5a44 0%, #feb045 100%);
                  border-color: #fc5a44;
                }
                .ant-checkbox-checked::after {
                  border-radius: 100% !important;
                  border-color: transparent;

                  :hover {
                    border-radius: 100% !important;
                    border-color: transparent;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
