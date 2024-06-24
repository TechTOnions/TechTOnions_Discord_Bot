import { Switch } from "@mui/material"
import { Button } from "./Button"

export const StatusCardBox = ({heading,route,handleChange,value}:{heading:string,route:string,handleChange:()=>void,value:boolean})=>{
    return <div className="p-4 rounded-lg bg-cardBox">
      <div className="py-2 text-2xl font-bold text-white">{heading}</div>
      <div className="">
        <div className="py-1 text-xl text-cyan-400 ">Set Status of {heading} </div>
        <div className="flex items-center justify-between py-4 text-white">
          <Switch value={value}  onChange={handleChange}/> 
          <Button text="Visit to Page" route={`/${route}`}/>
        </div>
      </div>
    </div>
  }