import { createContext, useState } from "react";

export const CbtWJContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [WaecJambContent, setWaecJambContent] = useState({});
  return (
    <CbtWJContext.Provider value={[WaecJambContent, setWaecJambContent]}>
      {children}
    </CbtWJContext.Provider>
  );
};