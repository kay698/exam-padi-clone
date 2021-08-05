import { useState, useEffect, useContext } from "react";
import { WaecJambData } from "../../../../utils/dataHelpers/WaecJambData";
import { CbtWaec } from "./styles";
import QandAPractice from "./QandAPractice";
import { Select, Pagination } from 'antd';
import ModalResult from "./ModalResult";
import { ModeContext } from "../../../../context/Mode";
import QandAT from "./QandAT";



const WaecItems = () => {
  const subjects = [...new Set(WaecJambData.map((item) => item.subject))];
  const [selectedSubject, setSelectedSubject] = useState("English");
  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState();
  const [score, setScore] = useState(0);

  const { Option } = Select

  const [modeContext] = useContext(ModeContext);


  // For pagination logic implimentation
  // const [posts, setPosts] = useState(WaecJambData);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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
  }, [modeContext]);

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
            {WaecJambData.map((item, i) => (
              <Option key={i} value={item.examYear}>
                {item.examYear}
              </Option>
            ))}
          </Select>
          </>
        </CbtWaec>
        <div>
          {modeContext === "practice" &&
          data &&
            data.data.map((el, index) => (
              <QandAPractice key={index} item={el} />
            ))}
            {modeContext === "test" &&
							data &&
							data.data.map((el, index) => (
								<QandAT
									item={el}
									key={index}
									score={score}
									setScore={setScore}
								/>
							))}
        </div>
        <div style={{marginBottom:"10px", marginLeft:'20px', textAlign:'end'}}>
          <ModalResult />
        </div>
        <Pagination responsive={true} showQuickJumper={true} defaultPageSize={5} pageSize={postsPerPage} defaultCurrent={1} style={{textAlign:'end', marginLeft:'20px'}} />
    </div>
  );
};

export default WaecItems;
