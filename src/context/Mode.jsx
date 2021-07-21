import { createContext, useState, useEffect } from "react";
import { Buttons } from "../utils/dataHelpers/Button";
// import { Neco } from "../utils/dataHelpers/NecoSat";

export const ModeContext = createContext();
export const ModeProvider = ({children}) =>{
    const [NecoSatContext, setNecoSatContext] = useState({});
  return (
    <ModeContext.Provider value={[NecoSatContext, setNecoSatContext]}>
      {children}
    </ModeContext.Provider>
  );
};
