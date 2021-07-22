import { useState, useEffect } from "react";
import { WaecJambData } from "../../../../utils/dataHelpers/WaecJambData";
import { CbtWaec } from "./styles";
import QandA from "../Jamb/QandA";

const WaecItems = () => {
  const subjects = [...new Set(WaecJambData.map((item) => item.subject))];
  const [selectedSubject, setSelectedSubject] = useState(WaecJambData.subject);
  const [selectedYear, setSelectedYear] = useState({});
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
    <div>
      <div>
        <CbtWaec>
          <select className="selectcss"
            value={selectedSubject}
            onChange={(e) => filterSubject(e.target.value)}
          >
              <span className="arrowdown"></span>

            {subjects.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select className="selectcss"
            value={selectedYear}
            onChange={(e) => filterYear(e.target.value)}>
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
              <QandA key={index} item={el} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default WaecItems;
