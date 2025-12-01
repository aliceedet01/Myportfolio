
import { Accordiondata } from "../Const/Accordiondata"
import { useState } from "react";



function Accordion() {
  const [openId, setOpenId] = useState(null)

  function handleToggle(id){
    setOpenId(openId == id ? null : id)
  }



  return (
    <section>
      <div className="w-4/5 grid grid-cols-2 gap-4">
        {Accordiondata.map((item) => {
          return(
            <div key={item.id} className="border-b border-gray-500 text-white space-y-3">
              <div className="flex justify-between" onClick={() => (handleToggle(item.id))}>
                <h2 className="text-2xl">{item.title}</h2>
                <span className="text-2xl">{openId == item.id ? '-': '+'}</span>
              </div>
             { openId == item.id ? (<div>
                {item.description}
              </div>) : null}

              

            </div>
          )

        })}


      </div>
    </section>
  );
}

export default Accordion