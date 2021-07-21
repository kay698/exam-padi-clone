import { useState, useEffect, useContext } from "react";
import CbtLayout from "../../../../components/CBTlayout";
import { NecoSatPageStyles } from "./styles";
import { FlexibleDiv } from "../../../../components/Box/styles";
import { SAT } from "../../../../utils/dataHelpers/NecoSat";
import { Typography, Button, Select } from "antd";
import {ModeContext} from "../../../../context/Mode"
import QandA from "../../../../components/QandA";
// import DashboardLayout from "../../../../components/Layout";

const Sat = () => {
  const {Option} = Select
  const {Title} = Typography;
  const subjects = [...new Set(SAT.map((item) => item.subject))];
  const [selectedSubject, setSelectedSubject] = useState("Physics");
  const [selectedAnswer, setSelectedAnswer] = useState({});

  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState();

  const filterYear = (year) => {
    setSelectedYear(year);
    const filteredYearResults = SAT.filter(
      (el) => year === el.examYear && selectedSubject === el.subject
    );
    setData(filteredYearResults[0]); // since it is only one object in the array we send the object instead
  };
  const filterSubject = (subject) => {
    setSelectedSubject(subject);
    const filteredSubjectResults = SAT.filter((el) => subject === el.subject);
    setData(filteredSubjectResults[0]); // since it is only one object in the array we send the object instead
  };

  useEffect(() => {
    onIntialLoad();
  }, []);

  

  const onIntialLoad = () => {
    setSelectedYear(SAT[0].examYear);
    setSelectedSubject(subjects[0]);
    const filteredSubjectResults = SAT.filter(
      (el) => subjects[0] === el.subject
    );
    setData(filteredSubjectResults[0]);
  };

  return(
    <CbtLayout>
      <NecoSatPageStyles>
        <FlexibleDiv justifyContent="flex-start">
        <div className="select">
        <Select
          defaultValue={selectedSubject}
          onChange={filterSubject}
          style={{ width: 120 }}
        >
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
          style={{width: 120}}
        >
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
  
        <FlexibleDiv flexDir="row" justifyContent="flex-start">
         {data &&
            data.data.map((el, index) => (
                <QandA item={el} key={index} />
            ))}
        </FlexibleDiv>
      </NecoSatPageStyles>
    </CbtLayout>
  );
}

export default Sat;
