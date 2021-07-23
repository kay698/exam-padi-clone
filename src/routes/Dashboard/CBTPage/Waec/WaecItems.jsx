import { useState, useEffect } from "react";
import { WaecJambData } from "../../../../utils/dataHelpers/WaecJambData";
import { CbtWaec } from "./styles";
import QandA from "../Jamb/QandA";
import { Select, Pagination } from 'antd';


const   WaecItems = () => {
  const subjects = [...new Set(WaecJambData.map((item) => item.subject))];
  const [selectedSubject, setSelectedSubject] = useState("English");
  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState();
  const { Option } = Select


  const [page, setpage] = useState(1)
  const [pageSize, setpageSize] = useState(10)


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
        <CbtWaec>
          <>
          <Select className="selectcss" bordered={false}
            defaultValue={selectedSubject}
            onChange={filterSubject}
            // onChange={(e) => filterSubject(e.target.value)}
          >
            {subjects.map((item, i) => (
              <Option key={i} value={item}>
                {item}
              </Option>
            ))}
          </Select>

          <Select className="selectcss" bordered={false}
            defaultValue={selectedYear}
            onChange={filterYear}>
            {/* onChange={(e) => filterYear(e.target.value)}> */}
            {WaecJambData.map((item, i) => (
              <Option key={i} value={item.examYear}>
                {item.examYear}
              </Option>
            ))}
          </Select>
          </>
        </CbtWaec>

        <div>
          {data &&
            data.data.map((el, index) => (
              <QandA key={index} item={el} />
            ))}
        </div>
        <Pagination style={{textAlign:'end'}}
          dataSource={WaecJambData}
          columns={WaecJambData}
         Pagination={{
          current: page,
          pageSize: pageSize,
        }} />
    </div>
  );
};

export default WaecItems;
