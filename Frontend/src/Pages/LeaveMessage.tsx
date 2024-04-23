import {useState } from "react";
import Heading from "../Components/Heading";
import { useSelectLeaveChannel, useSetLeaveMessage } from "../Hooks/Message-Hook";
import { SubmitButton } from "../Components/Button";
import { useRecoilValue } from "recoil";
import { ChannelArray } from "../Atoms/State";
import { MenuDropdown } from "../Components/MenuDropdown";
const defaultText =
  "Sorry, We are Sad that your Leaving the Server, Have a great time elsewhere.Goodbye (Gaddari karbe Gaddari karbe)";

function LeaveMessage(): JSX.Element {
  const [message, setMessage] = useState(defaultText);
  const [value, setValue] = useState<string|unknown>();
  const ChannelArrays = useRecoilValue(ChannelArray);

  const handleSubmit = async () => {
    if (value) {
      const response = await useSetLeaveMessage({message});
      const responseChannel=  await useSelectLeaveChannel({guild_id:window.localStorage.getItem('guild_id') as string, channel_id:value as string})
      
      if(response && responseChannel){
        alert("Welcome Message Updated on " + `"${ChannelArrays?.find((channel)=>channel.id===value)?.channel}" Channel`)
      }
    }
    else{
      alert("Please select a channel")
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mt-10 ml-8">
      <Heading head="Leave Message" />

      <div className="flex flex-col gap-4 mt-4">
        <div className="text-base font-medium text-gray-400 ">
          Enter the Leave message here.
        </div>

        <div>
          <MenuDropdown value={value as string} handleChange={handleChange}/>
        </div>

        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className=" bg-hoverbg rounded-lg outline-none text-white px-2 py-2 w-[80%]"
          defaultValue={defaultText}
          name="customMessage"
          id="customMessage"
          cols={100}
          rows={10}
        ></textarea>
      </div>
      <div className="mt-4">

      <SubmitButton handleSubmit={handleSubmit}  text="Submit"/>
      </div>
    </div>
  );
}

export default LeaveMessage;


