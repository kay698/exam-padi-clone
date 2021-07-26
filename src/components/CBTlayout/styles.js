import styled from "styled-components";

export const CbtLayoutStyles = styled.div`
  width: 100%;
  padding-top: 50px;

  .CbtLayout__sub {
    @media (max-width: 1000px) {
      justify-content: center;
    }
  }

  .nav {
    margin: 40px 0;
    a {
      font-weight: 500;
      padding: 0 10px;
      margin-right: 10px;
      font-size: 13px;
      line-height: 22px;
      color: #9d9d9d;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      @media (max-width: 400px) {
        margin-right: 0;
      }

      :hover {
        color: #000000;
      }
    }
    .activeTab {
      color: #5b64b1;
      font-weight: bold;

      :hover {
        color: #5b64b1;
      }
      ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        bottom: 0;
        background-color: #5b64b1;
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

    .ant-btn{
      margin-left: 12px;
      border: none;
      border-radius: 5px;

    }

.active {
    background: #FDE9D2;
    color: #5B64B1;
}
  }

`;
