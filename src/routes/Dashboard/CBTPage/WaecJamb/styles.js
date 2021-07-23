import styled from "styled-components";

export const CbtWaec = styled.div`
  display: flex;
  align-items: center;
  justify-content: ;
  flex-basis: 100%;
  margin: 12px;
  background: #ffffff;
  min-height: 61px;
  border-radius: 15px;
  // .subject {
  //   color: #979797;
  //   margin: 5px 15px;
  //   // font-family: Montserrat;
  //   // font-style: normal;
  //   // font-weight: 500;
  //   font-size: 16px;
  //   line-height: 20px;
  //   &:hover {
  //     color: black;
  //   }
  // }

  .arrowdowm {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .selectcss::after {
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
  .selectcss {
    color: #979797;
    outline: none;
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
  }
  .selectcss:hover {
    color: black;
  }
`;
export const CbtWaecCom = styled.div`
  margin: 12px;
  width: 100%;
  color: #5b64b1;
  height: max-content;
  font-size: 14px;
  line-height: 20.75px;
  font-family: Montserrat;
  //   font-style: italic;
  .body {
    //   margin-left: 30px;
    .ansbtn {
      background: #f2f2f2;
      border-radius: 7px;
      margin: 13px;
      color: #979797;
      display: block;
    }
    .viewbtn {
      background: #f2f2f2;
      border-radius: 7px;
      margin: 10px;
      color: #979797;
      display: block;
    }
  }
  .question {
    display: flex;
    align-item: center;
    justify-content: space-between;
    margin: 30px 0;
    p {
      margin-left: 30px;
      margin-top: 30px;
      margin-bottom: 12px;
    }
  }
`;


export const StylQA = styled.div`
        margin: 12px;
    .question{
        font-size: 14px;
        font-family: "Montserrat", sans-serif;        
        color: #5B64B1; 
        // margin-top: 50px;
        line-height: 23.75px;
        font-weight: 200;
    }
    .answer {
        margin: 5px 0;
    }
    .viewanswer {
        color: #5B64B1;
        background:#EFEFEF;
        margin-top: none;
        border-radius 7px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
    }
    .ansbtn{
        border-radius: 7px;
        border: none;
        color: #979797;
        &:hover{
            color: #979797;
        }
        .hrline {
            border: 2px solid black;
            margin-top: 15px;
        }
    }
`

// export const Button = styled.div`
//   background: #f2f2f2;
//   border-radius: 7px;
//   margin: 12px;
//   color: #979797;
//   display: block;
// `;



// global for jamb and waec
export const CbtPageStyles = styled.div`
  width: 100%;
  background: #FAFAFE;
  // height: 100vh;
  border-radius: 20px;
`;