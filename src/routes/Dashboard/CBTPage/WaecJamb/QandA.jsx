import { Button, Typography } from "antd"
import { useContext, useState } from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { ModeContext } from "../../../../context/Mode";
import { StylQA } from "./styles";

const QandA = ({item}) => {
  const [modeContext] = useContext(ModeContext)
    const { Title } = Typography
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [viewAnswer, setViewAnswer] = useState(null)

const handleViewAnswer = () => {
    const val = item.answers.filter((el) => el.status)
    setViewAnswer(val[0].answer)
}

    return (
        <StylQA>
        <FlexibleDiv  justifyContent="flex-start">
        <Title level={5} className="question">{item.question}</Title>
        <FlexibleDiv justifyContent="flex-end">
           {modeContext === 'practice' ? <Button onClick={() => handleViewAnswer()} className="viewanswer">View answer</Button> : <div />}
        </FlexibleDiv>
        {item.answers.map((answer, i) => (
         <FlexibleDiv key={i} className="answer" onClick={() => setSelectedAnswer(answer)} justifyContent="flex-start">
            <Button className="ansbtn" style={{backgroundColor: answer.answer === selectedAnswer.answer && '#979797', color: answer.answer === selectedAnswer.answer && '#fff' }}>{answer?.answer}</Button>
         </FlexibleDiv>
        ))}
        <FlexibleDiv justifyContent="flex-start" style={{padding: "40px 20px 0 20px", color: "#27AE60"}}>
        {modeContext === "practice" &&( viewAnswer ? 
        <>
            <div>
                <hr className="hrline" /> 
            </div>
            <p>Correct answers</p> 
            <p style={{marginLeft: "20px"}}>{viewAnswer}</p>
        </>
        : null )}
        </FlexibleDiv>
     </FlexibleDiv>                
     </StylQA>
    )
}
export default QandA;
