import styled from "styled-components";

export const FooterWrap = styled.div`
  width: 100%;
  height: max-content;
  background: #2b0434;
  padding: 50px;
  overflow-x: hidden;
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    padding: 30px 0;
  }

  .ant-layout-footer {
    background-color: transparent;
    padding: 0;
    margin: 0;
  }

  .landingPageFooter {
    .landingPageFooter__sub {
      width: 90%;
      .landingPageFooter__logoWrap {
        width: 150px;
        height: 150px;
        max-width: 150px;
        max-height: 150px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      span {
        font-size: 12px;
        line-height: 20px;
        color: #e0cce4;
        padding: 10px;
        margin: 0 30px;
        width: 650px;
      }

      @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        .landingPageFooter__logoWrap {
          width: 100px;
          height: 100px;
          max-width: 100px;
          max-height: 100px;
        }
        span {
          margin: 20px 0;
          width: 100%;
          /* text-align: center; */
        }
      }
    }
  }
`;
