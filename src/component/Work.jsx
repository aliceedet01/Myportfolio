
import { LaptopIcon } from "lucide-react";
import storage from "../assets/storage.svg"
import brush from "../assets/brush.svg"
import light from "../assets/light.svg"

function Work() {
  return (
    <div className="grid justify-center gap-50 -mt-45 ml-30 text-white">

      
         <div className="app">
      <LaptopIcon color="white" />
    </div>
             
        <img src={storage} alt="" className="w-8" />
              
        <img src={brush} alt="" className="w-8" />
             
        <img src={light} alt="" className="w-8" />
       
    </div>
  );
}

export default Work