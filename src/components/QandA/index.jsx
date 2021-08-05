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
	const handleViewAnswer = () => {
		const val = item.answers.filter((el) => el.status);
		setViewAnswer(val[0].answer);
		setDisable(true)
	};


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
				{item.answers.map((el, index) => (
					<FlexibleDiv
						justifyContent="flex-start">
						
							<Button
							onClick={() => {setDisable(false)
								setSelectedAnswer(el)} }
							disabled={disable}
								style={{
									backgroundColor:
								selectedAnswer?.answer === el.answer &&	(selectedAnswer?.status) ? "green" : selectedAnswer?.answer === el.answer && !selectedAnswer?.status ? "red" : "#F2F2F2",
									color:	selectedAnswer?.answer === el.answer ? "#fff" : "#979797",
								}}>
								{el?.answer}
							</Button>
       {selectedAnswer?.answer === el.answer &&	(selectedAnswer?.status) &&
        <span className="correct">Correct answer</span>
       }
       {selectedAnswer?.answer === el.answer &&	!selectedAnswer?.status &&
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
