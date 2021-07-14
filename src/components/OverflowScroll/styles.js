import styled from "styled-components";

export const OverFlowScrollBar = styled("div")`
  width: 100%;
  height: 100%;

  div {
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
  }
`;
