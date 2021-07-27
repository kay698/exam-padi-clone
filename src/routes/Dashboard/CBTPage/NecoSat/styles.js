import styled from "styled-components";

export const NecoSatPageStyles = styled.div`
  width: 100%;
  border-radius: 50px;
  background: #FAFAFE;
  color: #979797;
  min-height: 100%;
  height: 80%;
  max-width: 100%;
  padding: 30px;

  .select{
    background: #ffffff;
    height: 4rem;
    width: 100%;
    max-width: 100%;
    border-radius: 20px;
    padding: 17px;
    margin-left: 10px;
  }

  .ant-select{
    margin-right: 20px;
  }

  .ant-typography{
    font-size: 14px;
    font-weight: 500;
    color: #5B64B1;
  }

  .ant-btn {
    line-height: 1.5715;
    display: inline-block;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    height: 32px;
    padding: 7px 15px;
    font-size: 13px;
    border-radius: 5px;
    color: #979797;
    background: #F2F2F2;
    margin: 5px 15px;
    min-width: 100px;
    max-width: 100%;
}

.mode{
  margin-top: 50px ;
}

.butt{
   color: #5B64B1; 
  }

  .view-answer{
    padding: 40px 20px 0 20px;
     color: #27AE60;
  }

  .para{
    margin-left: 20px;
  }

  .wrong{
    color: red;
  }
  .correct{
    color: green
  }

.buts{
  width: 30%;
  min-width: 100px;
  margin-top: 20px;
}


`;
