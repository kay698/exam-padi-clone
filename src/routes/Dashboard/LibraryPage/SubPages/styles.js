import styled from "styled-components";

export const LibrarySubPagesStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .librarySubPages {
    @media (max-width: 1000px) {
      & > div {
        width: 100%;
      }
    }

    /* body section styles */

    .librarySubPagesWrap {
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

      .librarySubPagesWrap__cards {
        margin-bottom: 50px;

        & > div {
          margin: 0 10px 30px 0;
        }

        @media (max-width: 920px) {
          justify-content: space-evenly;
        }
        @media (max-width: 500px) {
          margin-top: 40px;
        }
      }

      .librarySubPagesWrap__header {
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
          color: #bbb;
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
      }
    }
  }
`;
