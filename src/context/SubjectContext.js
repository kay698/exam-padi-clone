import { createContext, useState } from "react";

export const SubjectContext = createContext();

export const SubjectProvider = ({ children }) => {
  const [payloadContext, setPayloadContext] = useState({});
  return (
    <SubjectContext.Provider value={[payloadContext, setPayloadContext]}>
      {children}
    </SubjectContext.Provider>
  );
};
