import styled from "styled-components";

export const HomeStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .home__sub {
    @media (max-width: 1000px) {
      & > div {
        width: 100%;
      }
    }

    /* header section styles */
    .home__sub__header {
      background: #2f2d51;
      border-radius: 60px;
      padding: 60px 30px;

      img {
        position: absolute;
        right: 5%;
        width: 40%;

        @media (max-width: 700px) {
          opacity: 0.2;
          width: 60%;
          z-index: 1;
        }
      }
      @media (max-width: 1000px) {
        width: 95%;
      }

      .home__sub__headerTextSection {
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

    /* body section styles */
    .home__sub__body {
      padding-top: 60px;
      position: relative;
      @media (max-width: 1280px) {
        flex-direction: column-reverse;
      }

      .rightCardsWrap {
        overflow-x: hidden;

        @media (max-width: 1280px) {
          width: 100%;
          justify-content: center;
          padding-left: 20px;
          .singleSIceCard {
            margin-right: 20px;
          }
        }

        .singleSIceCard {
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

      .lessonsWrap {
        padding: 30px;
        width: 80%;
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

        .lessonsWrap__cards {
          margin-bottom: 50px;
          @media (max-width: 1070px) {
            justify-content: flex-start;
            overflow-x: scroll;

            & > div {
              margin: 0 20px 20px 0;
            }
          }
          @media (max-width: 500px) {
            margin-top: 40px;
          }
        }

        .lessonsWrap__header {
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
            color: #ec523b;
            min-width: 55px;
            transition: all 0.3s ease;
            :hover {
              text-decoration: underline;
            }
            @media (max-width: 500px) {
              margin-bottom: -40px;
            }
            @media (max-width: 500px) {
              margin-bottom: -100px;
            }
          }

          svg {
            font-size: 9px;
            margin-left: -2px;
            @media (max-width: 500px) {
              display: none;
            }
          }
        }
      }
    }
  }
`;
