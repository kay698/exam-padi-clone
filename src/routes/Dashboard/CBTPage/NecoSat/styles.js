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

  .modal {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  width: 100%;
  height: 100%;
}

.buts{
  width: 30%;
  min-width: 100px;
  margin-top: 20px;
}

.modals {
  position: fixed;
  height: auto;
  width: 30%;
  margin: 200px auto;
  left: 15%;
  right: 15%;
  border-radius: 20px;
  background: #ffffff;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  outline: none;
}


`;
