import { Button, Typography } from "antd"
import { useContext, useState } from "react";
import { ModeContext } from "../../context/Mode";
import { FlexibleDiv } from "../Box/styles"

const QandA = ({item}) => {
  const [modeContext,setModeContext] = useContext(ModeContext)

    const { Title } = Typography
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [viewAnswer, setViewAnswer] = useState(null)
const handleViewAnswer = () => {
    const val = item.answers.filter((el) => el.status)
    setViewAnswer(val[0].answer)
}
    return ( 
        <FlexibleDiv  justifyContent="flex-start">
        <Title level={5} style={{color: "#5B64B1"}}>{item.question}</Title>
        <FlexibleDiv justifyContent="flex-end">
           {modeContext === 'practice' ? <Button onClick={() => handleViewAnswer()} style={{color: "#5B64B1", marginTop:"none"}}>View answer</Button> : <div />}
            </FlexibleDiv>
        {item.answers.map((answer) => (
         <FlexibleDiv onClick={() => setSelectedAnswer(answer)} justifyContent="flex-start">
            <Button style={{backgroundColor: answer.answer === selectedAnswer.answer && '#979797', color: answer.answer === selectedAnswer.answer && '#fff' }}>{answer?.answer}</Button>
         </FlexibleDiv>
     ))};
    <FlexibleDiv justifyContent="flex-start" style={{padding: "40px 20px 0 20px", color: "#27AE60"}}>
       {modeContext === "practice" &&( viewAnswer ? <><p>Correct answers</p> <p style={{marginLeft: "20px"}}>{viewAnswer}</p></>
       : null )}
    </FlexibleDiv>
     </FlexibleDiv>
    )
}
 
export default QandA;