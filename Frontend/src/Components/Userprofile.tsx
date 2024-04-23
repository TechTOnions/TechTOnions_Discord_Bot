import Dropdown from "./Dropdown";
import { useState } from "react";

interface Props {
  name: string;
  img: string;
}


function Userprofile(props: Props): JSX.Element {
  const { name, img } = props;
  const[isOpen,SetIsopen]=useState(false);
  
  return (
    <div className={"flex items-center justify-between gap-4 px-2 py-1 rounded-3xl hover:bg-[#32373E] hover:transition transition hover:duration-200"}>
        {/* Image  And Name*/}
      <div className="flex items-center gap-3 justify-evenly">
        <div className="w-5 h-5 rounded">
          <img src={img} className="w-full h-full rounded-full" alt="" />
        </div>
        <div className="text-sm font-medium text-white cursor-default">{name}</div>
      </div>
      {/* Logo */}
      <div className="flex items-center justify-center text-center text-white">
        <button  onClick={()=>{SetIsopen(prev=>!prev)}} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
      {isOpen?
          <div className="w-[8%] h-[10%] absolute right-14 top-12 z-1 transition">
            <Dropdown/>
          </div>:
        ""}
    </div>
  );
}

export default Userprofile;
