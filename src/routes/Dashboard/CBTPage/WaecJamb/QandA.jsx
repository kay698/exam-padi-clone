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
    const [disable,setDisable] = useState(false)

    const handleViewAnswer = () => {
        const val = item.answers.filter((el) => el.status)
        setViewAnswer(val[0].answer)
        setDisable(true)
    }

    return (
        <>
        <StylQA>
        <FlexibleDiv  justifyContent="flex-start">
        <Title level={5} className="question">{item.question}</Title>
        <FlexibleDiv justifyContent="flex-end">
           {modeContext === 'practice' ? <Button onClick={() => handleViewAnswer()} disabled={disable} className="viewanswer">View answer</Button> : <div />}
        </FlexibleDiv>
        {item.answers.map((el, i) => (
         <FlexibleDiv key={i} onClick={() => setSelectedAnswer(el)} className="answer" justifyContent="flex-start">
            <Button disabled={disable} onClick={() => setDisable(false)}  className="ansbtn"    
        // style={{backgroundColor: answer.answer === selectedAnswer.answer && '#979797', color: answer.answer === selectedAnswer.answer && '#fff' }}
            style={{
                backgroundColor: selectedAnswer?.answer === el.answer && (selectedAnswer?.status) ? "#27AE60" : selectedAnswer?.answer === el.answer && !selectedAnswer?.status ? "#eb5757" : "#F2F2F2", 
                color: selectedAnswer?.answer === el.answer ? "#fff" : "#979797", }}>
                {el?.answer}
            </Button>
            {selectedAnswer?.answer === el.answer && (selectedAnswer?.status) && <span className="correctselec">Correct answer</span>}
            {selectedAnswer?.answer === el.answer && !selectedAnswer?.status && <span className="wrong">Wrong answer</span>}
         </FlexibleDiv>
        ))}
        <FlexibleDiv justifyContent="flex-start" style={{padding: "40px 20px 0 0px", color: "#27AE60"}}>
        {modeContext === "practice" &&( viewAnswer ?
        <>
            <>
                <hr className="hrline" />
            </>
            <div className="correctans">
                <p className="correct">Correct answers</p>
                <p className="correct" style={{marginLeft: "10px"}}>{viewAnswer}</p>
            </div>
        </>
        : null )}
        </FlexibleDiv>
     </FlexibleDiv> 
     </StylQA>
     </>
    )
}
export default QandA;


// codesandbox for pagination
// https://codepen.io/jakub_antolak/project/editor/DxjyKX