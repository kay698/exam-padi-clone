import { useState, useEffect, useContext } from "react";
import CbtLayout from "../../../../components/CBTlayout";
import { NecoSatPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { SAT } from "../../../../utils/dataHelpers/NecoSat";
import { Select } from "antd";
import { ModeContext } from "../../../../context/Mode";
import QandA from "../../../../components/QandA";
import { Button, Modal } from "antd";
import QandATest from "../../../../components/QandA/test";
import 'antd/dist/antd.css';



const Sat = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { Option } = Select;
	const [modeContext] = useContext(ModeContext);
	const subjects = [...new Set(SAT.map((item) => item.subject))];
	const [selectedSubject, setSelectedSubject] = useState("Physics");
	const [selectedYear, setSelectedYear] = useState("2021");
	const [data, setData] = useState();

	const filterYear = (year) => {
		setSelectedYear(year);
		const filteredYearResults = SAT.filter(
			(el) => year === el.examYear && selectedSubject === el.subject
		);
		setData(filteredYearResults[0]);
	};
	const filterSubject = (subject) => {
		setSelectedSubject(subject);
		const filteredSubjectResults = SAT.filter((el) => subject === el.subject);
		setData(filteredSubjectResults[0]);
	};

	const showModal = () => {
		setIsModalVisible(true);
};

const handleOk = () => {
		setIsModalVisible(false);
};

const handleCancel = () => {
		setIsModalVisible(false);
};


	useEffect(() => {
		console.log({ modeContext });
		onIntialLoad();
	}, [modeContext]);

	const onIntialLoad = () => {
		setSelectedYear(SAT[0].examYear);
		setSelectedSubject(subjects[0]);
		const filteredSubjectResults = SAT.filter(
			(el) => subjects[0] === el.subject
		);
		setData(filteredSubjectResults[0]);
	};

	return (
		<CbtLayout>
			<NecoSatPageStyles>
				<FlexibleDiv justifyContent="flex-start">
					<div className="select">
						<Select
							defaultValue={selectedSubject}
							onChange={filterSubject}
							style={{ width: 120 }}
							bordered ={false}>
							<Option defaultValue="default" disabled>
								Select Subject
							</Option>
							{subjects.map((item) => (
								<Option key={item} value={item}>
									{item}
								</Option>
							))}
						</Select>

						<Select
							defaultValue={selectedYear}
							onChange={filterYear}
							style={{ width: 120 }}
							bordered ={false}
							className="selec">
							<Option defaultValue="default" disabled>
								Select Year
							</Option>
							{SAT.map((item, i) => (
								<Option key={i} value={item.examYear}>
									{item.examYear}
								</Option>
							))}
						</Select>
					</div>
				</FlexibleDiv>

				<>
					<FlexibleDiv flexDir="row" justifyContent="flex-start">
						{modeContext === "practice" &&
							data &&
							data.data.map((el, index) => <QandA item={el} key={index} />)}
						{modeContext === "test" &&
							data &&
							data.data.map((el, index) => <QandATest item={el} key={index} />)}
					</FlexibleDiv>
				</>

				<FlexibleDiv justifyContent="center">
					{modeContext === "test" && <Button className="buts" onClick={()=> showModal(true)}>Submit</Button>}
				</FlexibleDiv>

				<>
     {modeContext === "test" &&  <Modal  visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} >
       
							<p>Some contents...</p>
							<p>Some contents...</p>
							<p>Some contents...</p>
							
					</Modal>}
    </>
        
				<FlexibleDiv justifyContent="flex-end">
				</FlexibleDiv>
			</NecoSatPageStyles>
		</CbtLayout>
	);
};

export default Sat;
