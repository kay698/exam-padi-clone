import { Button, Typography } from "antd"
import { useContext, useState } from "react";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { ModeContext } from "../../../../context/Mode";
import styled from "styled-components";

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


const QandA = ({item}) => {
  const [modeContext,setModeContext] = useContext(ModeContext)
    const { Title } = Typography
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [viewAnswer, setViewAnswer] = useState(null)
  const [toggleAns, settoggleAns] = useState(false)

const handleViewAnswer = () => {
    const val = item.answers.filter((el) => el.status)
    setViewAnswer(val[0].answer)
}

const toggleTrueFalse = (answer) => { 
    setSelectedAnswer(answer)
    settoggleAns(!toggleAns)
}

    return ( 
        <StylQA>
        <FlexibleDiv  justifyContent="flex-start">
        <Title level={5} className="question">{item.question}</Title>
        <FlexibleDiv justifyContent="flex-end">
           {modeContext === 'practice' ? <Button onClick={() => handleViewAnswer()} className="viewanswer">View answer</Button> : <div />}
        </FlexibleDiv>
        {item.answers.map((answer) => (
         <FlexibleDiv className="answer" onClick={() => setSelectedAnswer(answer)} justifyContent="flex-start">
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
