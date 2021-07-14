import styled from "styled-components";

export const LessonsStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .lessons__sub {
    @media (max-width: 1000px) {
      justify-content: center;
      & > div {
        width: 100%;
      }
    }
  }

  /* body section styles */
  .lessons__sub__body {
    margin-top: 60px;
    background: #fafafe;
    border-radius: 60px 60px 0 0;
    padding: 30px;
    overflow: hidden;

    @media (max-width: 800px) {
      border-radius: 20px 20px 0 0;
      padding: 20px;
    }

    .subjectsListWrap {
      height: max-content;
      padding: 20px 10px;
      background: #ffffff;
      border-radius: 21px;
      min-width: 200px;

      .subject {
        span {
          transition: all 0.3s ease;
          cursor: pointer;
          line-height: 17px;
          padding: 10px 10px 10px 20px;
          min-width: 170px;
          margin: 5px 0;
          border-radius: 16px;
          letter-spacing: 0.02em;
          font-size: 14px;
          color: #828282;

          :hover {
            color: #282828;
          }
        }
      }
    }

    .lessonsSectionWrap {
      width: 77%;
      height: max-content;

      @media (max-width: 1280px) {
        width: 100%;
        /* justify-content: space-evenly; */
      }

      .lessonsWrap__cards {
        @media (max-width: 1280px) {
          width: 100%;
          justify-content: space-evenly;
        }
        @media (max-width: 1070px) {
          justify-content: space-evenly;
        }
        & > div {
          margin-bottom: 50px;
          @media (max-width: 1070px) {
            margin: 0 15px 50px 15px;
          }
        }
      }
    }
  }
`;
