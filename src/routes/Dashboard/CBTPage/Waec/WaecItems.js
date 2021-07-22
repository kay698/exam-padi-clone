// import "./styles.css";
import { useState, useEffect } from "react";
import { WaecJambData } from "../../../../utils/dataHelpers/WaecJambData";
import { Button } from "antd";
import { CbtWaec } from "./styles";

// console.log(WaecJambData.map((item) => item.subject));
const WaecItems = () => {
  const subjects = [...new Set(WaecJambData.map((item) => item.subject))];
  const [selectedSubject, setSelectedSubject] = useState(WaecJambData.subject);
  const [selectedYear, setSelectedYear] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [data, setData] = useState();
//   const [pyhsics, SetPhysics] = useState("Physics");

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
    setData(filteredSubjectResults[0]); // since it is only one object in the array we send the object instead
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <CbtWaec>
          <select className="selectcss"
            value={selectedSubject}
            onChange={(e) => filterSubject(e.target.value)}
          >
              <span className="arrowdown"></span>
            {/* <option value="default" disabled>
            Select Subject
        </option> */}
            {subjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select className="selectcss"
            value={selectedYear}
            onChange={filterYear}
            // onChange={(e) => filterYear(e.target.value)}
          >
            {/* <option value="default" disabled>
            Select Year
        </option> */}
            {WaecJambData.map((item) => (
              <option key={item} value={item.examYear}>
                {item.examYear}
              </option>
            ))}
          </select>
        </CbtWaec>

        <div>
          {data &&
            data.data.map((el, index) => (
              <div key={index}>
                <p>{el.question}</p>
                {el.answers.map((answer) => (
                  <Button 
                  style={{display: 'block', margin:'12px', borderRadius:'7px', backgroundColor: answer.answer === selectedAnswer.answer ? "#979797": '#F2F2F2', color: answer.answer === selectedAnswer.answer ? '#F2F2F2' : "#979797" }}
                   onSubmit={handleSubmit}>{answer?.answer}</Button>
                ))}
                {/* <button>{el.answers}</button> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WaecItems;
