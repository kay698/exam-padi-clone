import { createContext, useState} from "react";

export const ModeContext = createContext();
export const ModeProvider = ({children}) =>{
    const [NecoSatContext, setNecoSatContext] = useState({});
  return (
    <ModeContext.Provider value={[NecoSatContext, setNecoSatContext]}>
      {children}
    </ModeContext.Provider>
  );
};
