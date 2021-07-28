import { Button, Typography } from "antd";
import { useState } from "react";
import { FlexibleDiv } from "../Box/styles";

 

const QandATest = ({ item, score, setScore }) => {
	const {Title} = Typography;
	const [selectedAnswer, setSelectedAnswer] = useState({});

	return (
		
			<FlexibleDiv justifyContent="flex-start">
					<FlexibleDiv justifyContent="space-between" className="mode">
				<Title level={5}>
					{item.question}
				</Title>
</FlexibleDiv>
				<FlexibleDiv justifyContent="space-between" className="mode">
				
				</FlexibleDiv>
				
				{item.answers.map((answer, index) => (
					<FlexibleDiv
						justifyContent="flex-start">
						
							<Button
						
						onClick={() => {
       answer?.status && setScore(score + 1)
       setSelectedAnswer(answer)
      }}
						
								style={{
									backgroundColor:
										answer.answer === selectedAnswer.answer && "#979797",
									color: answer.answer === selectedAnswer.answer && "#fff",
								}}>
								{answer?.answer}
							</Button>
					</FlexibleDiv>
				))}
			</FlexibleDiv>
	);
};

export default QandATest;
