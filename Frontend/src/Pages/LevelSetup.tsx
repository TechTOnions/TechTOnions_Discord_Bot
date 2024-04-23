import { useRecoilValue } from "recoil";
import Heading from "../Components/Heading";
import { RoleArray } from "../Atoms/State";
import { MenuDropdown } from "../Components/MenuDropdown";
import { useState } from "react";
import { SubmitButton } from "../Components/Button";
import { useSetLevelRole } from "../Hooks/Levelrole-hook";

function LevelSetup() {
  return (
    <div className="mt-10 ml-8">
      <Heading head="Levels" />
      <div className="mt-2 text-lg text-gray-500">
        Give your members XP and Levels when they send messages and rank them by
        activity in a leaderboard.
      </div>
      <div className="py-6">
        <LevelingUp />
      </div>
    </div>
  );
}

function LevelingUp() {
  const [value,setValue] = useState(" ");
  const [level,setLevel] = useState("");
  const roles = useRecoilValue(RoleArray);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setValue(e.target.value);
  };
  const handleLevelInput = (e:React.ChangeEvent<HTMLInputElement>) => {
   setLevel(e.target.value);
  }
  const handleSubmit = async ()=>{
    if(value && level){
       const response = await useSetLevelRole({role_id:value,level:level});
       await alert(response.message);
       setValue("");
       setLevel("");
    }
  }
  return (
    <div className="bg-LevelBox rounded-lg w-[80%] px-4 py-4 text-slate-200">
      <div className="text-lg font-semibold">Levelling Up</div>
      <div className="my-2 text-gray-400">
        Whenever the user gains a level,Bot will send a personalized message to
        the user.
      </div>
      <div className="flex flex-col items-start ">
        <div className="font-medium text-gray-600">Level up announcement</div>  
          <MenuDropdown roles={roles} handleChange={handleChange} value={value}/>
      </div>
      <div className="flex flex-col items-start">
        <div className="font-medium text-gray-600">Enter Level (Number)</div>
        <div className="flex justify-center py-2 my-2 rounded-lg bg-navColor">
          <input type="text" onChange={handleLevelInput} className="w-full text-center text-white outline-none bg-navColor" />
        </div>
      </div>
      <SubmitButton handleSubmit={handleSubmit} text="Submit"/>
    </div>
  );
}

export default LevelSetup;
