import styled from "styled-components";

export const LibraryStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .library__sub {
    @media (max-width: 1000px) {
      & > div {
        width: 100%;
      }
    }

    /* body section styles */

    .libraryLessonsWrap {
      margin-top: 50px;
      padding: 30px;
      width: 100%;
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

      .libraryLessonsWrap__cards {
        margin-bottom: 50px;
        @media (max-width: 1070px) {
          justify-content: flex-start;
          overflow-x: scroll;
          scrollbar-color: #e3e3e3 transparent;
          scrollbar-width: thin;

          &::-webkit-scrollbar {
            width: 5px;
            height: 5px;
          }
          &::-webkit-scrollbar-button {
            width: 0;
            height: 0;
          }
          &::-webkit-scrollbar-thumb {
            border-radius: 50px;
            background: #e3e3e3;
          }
          &::-webkit-scrollbar-thumb:active {
            background: #ff6600;
          }
          &::-webkit-scrollbar-track {
            background: #eff0f5;
            border-radius: 53px;
          }
          &::-webkit-scrollbar-track:hover {
            background: #eff0f5;
          }
          &::-webkit-scrollbar-track:active {
            background: #e3e3e3;
          }
          &::-webkit-scrollbar-corner {
            background: #e3e3e3;
          }
          & > div {
            margin: 0 20px 20px 0;
          }
        }
        @media (max-width: 500px) {
          margin-top: 40px;
        }
      }

      .libraryLessonsWrap__header {
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
`;
