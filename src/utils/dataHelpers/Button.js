import { Button } from "antd";
import { useState,useContext } from "react";
import {ModeContext} from "../../context/Mode"

 export const Buttons = () => {
    const [modeContext,setModeContext] = useContext(ModeContext)
    const [modeState, setModeState] = useState({})
    const handleClick = (mode) =>{
       
        setModeContext(mode)
    }
    return ( 
        <div className="button">
                  <Button onClick={() => handleClick('practice')}>Practice mode</Button>
                  <Button onClick={() => handleClick('test')}>Test mode</Button>
              </div>
     );
}
 