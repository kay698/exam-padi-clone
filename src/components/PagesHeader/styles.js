import styled from "styled-components";

export const PageHeaderStyles = styled.div`
  width: 100%;
  @media (max-width: 1000px) {
    width: 96%;
    /* overflow: hidden; */
  }

  .pages__header__sub {
    background: #3c4f3d;
    border-radius: 60px;
    padding: 45px 60px;

    img {
      position: absolute;
      right: 5%;
      min-height: 100px;
      @media (max-width: 1280px) {
        opacity: 0.4;
        margin-top: -1%;
      }
    }
    @media (max-width: 1000px) {
      /* width: 96%; */
      overflow: hidden;
    }

    .headerTextSection {
      @media (max-width: 700px) {
        z-index: 2;
      }
      h3 {
        color: #fde9d2;
      }
      span {
        font-size: 12px;
        color: #8a88ad;
        @media (max-width: 700px) {
          color: white;
        }
      }
      @media (max-width: 600px) {
        h3 {
          font-size: 18px;
        }
        span {
          font-size: 10px;
        }
      }
    }

    @media (max-width: 600px) {
      padding: 40px 30px;
      border-radius: 40px;
    }
  }
`;
