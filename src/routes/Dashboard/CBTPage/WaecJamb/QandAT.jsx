import { Button, Typography } from "antd"
import {  useState } from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { StylQA } from "./styles";

const QandAT = ({item, score, setScore}) => {
 const { Title } = Typography
 const [selectedAnswer, setSelectedAnswer] = useState({});

 const handleViewAnswer = (answer) => {
    answer?.status && setScore(score + 1)
    setSelectedAnswer(answer)
 }

 return (
     <> 
      <StylQA>
      <FlexibleDiv  justifyContent="flex-start">
      <Title level={5} className="question">{item.question}</Title>
      {item.answers.map((answer, i) => (
       <FlexibleDiv key={i} className="answer" onClick={() => handleViewAnswer(answer)} justifyContent="flex-start">
          <Button  className="ansbtn"    
            style={{backgroundColor: answer.answer === selectedAnswer.answer && '#979797', color: answer.answer === selectedAnswer.answer && '#fff' }}>
           {answer?.answer}
          </Button>
       </FlexibleDiv>
      ))}
      </FlexibleDiv>
      </StylQA>
    </>
 )
}

export default QandAT
