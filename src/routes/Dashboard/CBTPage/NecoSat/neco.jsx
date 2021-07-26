import { useState, useEffect, useContext } from "react";
import CbtLayout from "../../../../components/CBTlayout";
import { NecoSatPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { Neco } from "../../../../utils/dataHelpers/NecoSat";
import { Select } from "antd";
import { ModeContext } from "../../../../context/Mode";
import QandA from "../../../../components/QandA";
import { Pagination, Button } from "antd";
import QandATest from "../../../../components/QandA/test";
import OpenModal from "../../../../components/QandA/modal";

const NECO = () => {
	const { Option } = Select;
	const [modeContext] = useContext(ModeContext);
	const subjects = [...new Set(Neco.map((item) => item.subject))];
	const [selectedSubject, setSelectedSubject] = useState("Physics");
	const [selectedYear, setSelectedYear] = useState("2021");
	const [activePage, setActivePage] = useState(5);
  const [modal, setModal] = useState(false);
	const [data, setData] = useState();

	const handleChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const filterYear = (year) => {
		setSelectedYear(year);
		const filteredYearResults = Neco.filter(
			(el) => year === el.examYear && selectedSubject === el.subject
		);
		setData(filteredYearResults[0]);
	};
	const filterSubject = (subject) => {
		setSelectedSubject(subject);
		const filteredSubjectResults = Neco.filter((el) => subject === el.subject);
		setData(filteredSubjectResults[0]);
	};

	useEffect(() => {
		console.log({ modeContext });
		onIntialLoad();
	}, [modeContext]);

	const onIntialLoad = () => {
		setSelectedYear(Neco[0].examYear);
		setSelectedSubject(subjects[0]);
		const filteredSubjectResults = Neco.filter(
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
							style={{ width: 120 }}>
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
							className="selec">
							<Option defaultValue="default" disabled>
								Select Year
							</Option>
							{Neco.map((item, i) => (
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
					{modeContext === "test" && <Button className="buts" onClick={()=> setModal(true)}>Submit</Button>}
				</FlexibleDiv>
        <OpenModal isOpen={modal}
        setIsClose={() => setModal(false)}
        score={<h3 className="done"> Done! Thank You</h3>}
        scores={
          <p className="para">
            {" "}
             thank you. You’ll be notified when we launch
            our app.
          </p>
        }/>
				<FlexibleDiv justifyContent="flex-end">
					<Pagination defaultValue={1} total={50} />
				</FlexibleDiv>
			</NecoSatPageStyles>
		</CbtLayout>
	);
};

export default NECO;
