import styled from "styled-components";

export const ProfileStyles = styled.div`
  width: 100%;
  padding: 50px 0;

  a {
    transition: all 0.3s ease;
    font-size: 10px;
    color: #333333;
    letter-spacing: 0.06rem;
    :hover {
      text-decoration: underline;
    }
  }

  .profile__body {
    margin-top: 50px;
    padding: 30px;
    width: 100%;
    height: max-content;
    background: #fafafe;
    border-radius: 60px 60px 0 0;
    overflow-x: hidden;

    /* personal details section */
    .profile__body__personalDetails {
      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }
      .changePassword {
        font-size: 10px;
        color: #333333;
        letter-spacing: 0.06rem;
        margin-top: 10px;
        @media (max-width: 700px) {
          margin-top: -10px;
        }
      }
      /* personal details left section */
      .personalDetails__sub {
        @media (max-width: 700px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }
        /* profile picture section */
        .profileImageSection {
          @media (max-width: 700px) {
            width: max-content;
            margin: 0 0 30px 0;
          }
          margin-right: 30px;
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

        /* name and email section */
        .nameSection {
          @media (max-width: 700px) {
            width: 100%;
            align-items: center;
          }
          h5 {
            font-size: 14px;
            color: #333333;
            letter-spacing: 0.08rem;
          }
          span {
            font-size: 12px;
            color: #979797;
            letter-spacing: 0.08rem;
          }
          a {
            line-height: 60px;
          }
        }
      }
    }
  }

  /* plan body section */
  .planBody {
    @media (min-width: 500px) {
      padding-left: 20px;
    }
    h5 {
      font-size: 13px;
      color: #333333;
      letter-spacing: 0.08rem;
    }
    span {
      font-size: 11px;
      color: #979797;
      letter-spacing: 0.08rem;
    }
    a {
      line-height: 30px;
    }
  }

  /* account body section */
  .accountBody {
    @media (min-width: 500px) {
      padding-left: 20px;
    }

    & > div {
      margin-bottom: 30px;
    }
    h5 {
      font-size: 13px;
      color: #333333;
      letter-spacing: 0.08rem;
    }
    a,
    span {
      font-size: 13px;
      color: #979797;
      font-weight: 600;
      letter-spacing: 0.08rem;
      margin: 5px 0 5px 10px;
    }
    .lastLinks {
      margin: 5px 0 0 0;
      font-size: 13px;
      color: #e45858;
      letter-spacing: 0.08rem;
      font-weight: bold;
    }
  }

  /* ant styles */
  .ant-collapse {
    width: 100%;
    border: none;
    margin-top: 50px;
  }
  .ant-collapse-icon-position-right
    > .ant-collapse-item
    > .ant-collapse-header {
    margin-left: 20px;
  }
  .ant-collapse-content {
    background-color: transparent;
  }
  .ant-radio-wrapper {
    /* width: 100%; */
    margin-bottom: 10px;
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
  .ant-radio-checked::after {
    border: none;
    background-color: transparent;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: black;
    background-color: transparent;
  }

  .ant-table {
    background-color: #fafafe;
    @media (max-width: 700px) {
      overflow-x: scroll;
      .ant-table-container {
        min-width: 600px;
      }
    }
    .ant-table-thead > tr > th,
    .ant-table-tbody > tr > td {
      border: none;
      background-color: transparent;
    }
  }
  .sideIcon {
    position: relative;
    bottom: -35px;
  }
`;
