import { Button, Typography } from "antd";
import { useContext, useState } from "react";
import { ModeContext } from "../../context/Mode";
import { FlexibleDiv } from "../Box/styles";

const QandA = ({ item }) => {
	const [modeContext] = useContext(ModeContext);
	const { Title } = Typography;
	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [viewAnswer, setViewAnswer] = useState(null);
	const [disable, setDisable] = useState(false);
 const [correctAnswer, setCorrectAnswer] = useState(null)
	const handleViewAnswer = () => {
		const val = item.answers.filter((elitem) => elitem.status);
		setViewAnswer(val[0].answer);
		setDisable(true)
	};

 const handleCorrectAnswer = () =>{
  const val = item.answers.filter((elitem) => elitem.status)
  // setCorrectAnswer
 }

	return (
		
			<FlexibleDiv justifyContent="flex-start">
				
				<FlexibleDiv justifyContent="space-between" className="mode">
				<Title level={5}>
					{item.question}
				</Title>

						<Button className="butt"
							onClick={() => handleViewAnswer()}
							disabled={disable}>
							View answer
						</Button>

				</FlexibleDiv>
				{item.answers.map((elitem, index) => (
					<FlexibleDiv
						onClick={() => setSelectedAnswer(elitem)}
						justifyContent="flex-start">
						
							<Button
							onClick={() => setDisable(false)}
							disabled={disable}
								style={{
									backgroundColor:
								selectedAnswer?.answer === elitem.answer &&	(selectedAnswer?.status) ? "green" : selectedAnswer?.answer === elitem.answer && !selectedAnswer?.status ? "red" : "#F2F2F2",
									color:	selectedAnswer?.answer === elitem.answer ? "#fff" : "#979797",
								}}>
								{elitem?.answer}
							</Button>
       {selectedAnswer?.answer === elitem.answer &&	(selectedAnswer?.status) &&
        <span className="correct">Correct answer</span>
       }
       {selectedAnswer?.answer === elitem.answer &&	!selectedAnswer?.status &&
        <span className="wrong">Wrong answer</span>
       }
					</FlexibleDiv>
				))}
				;
				<FlexibleDiv
					justifyContent="flex-start"
					 className="view-answer">
					{modeContext === "practice" &&
						(viewAnswer ? (
							<>
								<p>Correct answers</p>{" "}
								<p className="para">{viewAnswer}</p>
							</>
						) : null)}
				</FlexibleDiv>
			</FlexibleDiv>
	);
};

export default QandA;
