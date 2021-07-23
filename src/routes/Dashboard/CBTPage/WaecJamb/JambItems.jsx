import React, { useState, useEffect } from "react";
import { WaecJambData } from "../../../../utils/dataHelpers/WaecJambData";
import { CbtWaec } from "../WaecJamb/styles";
import QandA from "./QandA";
import { Select } from 'antd';


const JambItems = () => {
  const {Option} = Select

    const subjects = [...new Set(WaecJambData.map((item) => item.subject))];
    const [selectedSubject, setSelectedSubject] = useState("English");
    const [selectedYear, setSelectedYear] = useState("2021");
    const [data, setData] = useState();


    const filterYear = (year) => {
        setSelectedYear(year);
        const filteredYearResults = WaecJambData.filter(
          (el) => year === el.examYear && selectedSubject === el.subject
        )
        setData(filteredYearResults[0]);
      };

      const filterSubject = (subject) => {
        setSelectedSubject(subject);
        const filteredSubjectResults = WaecJambData.filter(
          (el) => subject === el.subject
        );
        setData(filteredSubjectResults[0]);
      };
      useEffect(() => {
        setSelectedYear(WaecJambData.examYear);
      }, [selectedSubject]);
    
      useEffect(() => {
        onIntialLoad();
      }, []);
      const onIntialLoad = () => {
        setSelectedYear(WaecJambData[0].examYear);
        setSelectedSubject(subjects[0]);
        const filteredSubjectResults = WaecJambData.filter(
          (el) => subjects[0] === el.subject
        );
        setData(filteredSubjectResults[0]);
      };

  return (
    <>
      <div>
        <CbtWaec>
          <Select className="selectcss" bordered={false}
            defaultValue={selectedSubject}
            onChange={filterSubject}
          > 
            {subjects.map((item, i) => (
              <Option key={i} value={item}>
                {item}
              </Option>
            ))}
          </Select>

          <Select className="selectcss" bordered={false}
            defaultValue={selectedYear}
            onChange={filterYear}
          >
            {WaecJambData.map((item, i) => (
              <Option key={i} value={item.examYear}>
                {item.examYear}
              </Option>
            ))}
          </Select>
        </CbtWaec>

        <div>
          {data &&
            data.data.map((el, index) => (
                <QandA key={index} item={el} />
            ))}
        </div>
      </div>
    </>
  );
};

export default JambItems;