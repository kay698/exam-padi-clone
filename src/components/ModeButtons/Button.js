import { Button } from "antd";
import { useContext, useEffect } from "react";
import {ModeContext} from "../../context/Mode"

 export const Buttons = () => {
    const [modeContext,setModeContext] = useContext(ModeContext)
    const handleClick = (mode) =>{
       
        setModeContext(mode)
    }
useEffect(() => {
   setModeContext("practice")
}, [setModeContext])
    console.log(modeContext, "mode")
    return ( 
        <div className="button">
                  <Button className={modeContext === "practice" && "active"} onClick={() => handleClick('practice')}>Practice mode</Button>
                  <Button className={modeContext === "test" && "active"} onClick={() => handleClick('test')}>Test mode</Button>
        </div>
     );
}
 