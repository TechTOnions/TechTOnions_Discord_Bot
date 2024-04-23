import { useState } from "react";
import { MenuDropdown } from "../Components/MenuDropdown";
import { SubmitButton } from "../Components/Button";
import Heading from "../Components/Heading";
import { useSetImageChannel, useSetLinkChannel } from "../Hooks/Channel-content-hook";

export default function Messages(): JSX.Element {
  const [channel, SetChannel] = useState("");
  const [channel_Link, SetChannel_link] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    SetChannel(e.target.value);
  };
  const handleSubmitImage = async () => {
    if(channel){
      const Response = await useSetImageChannel({channel_id:channel});
      // console.log(Response)
      alert(Response.message)
    }
  };
  const handleChangeLink= (e:React.ChangeEvent<HTMLSelectElement>)=>{
    SetChannel_link(e.target.value)
  }
  const handleSubmitLink = async ()=>{
    if(channel_Link){
      const Response =  await useSetLinkChannel({channel_id:channel_Link})
      alert(Response.message)
    }
  }
  return (
    <div className="mt-10 ml-8">
      <Heading head="Channel Content" />
      {/* <MenuDropdown handleChange={handleChange} value={channel} /> */}
      <div className="flex flex-row justify-between px-4 py-4 mt-4 rounded-lg cursor-default bg-lightbg">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="">
            <div className="text-xl font-semibold">Set Image Channel</div>
            <div className="text-base text-gray-400">
              Channel where Only images are Allowed
            </div>
          </div>
        </div>

        <div className="">
          <MenuDropdown handleChange={handleChange} value={channel} />
          <SubmitButton handleSubmit={handleSubmitImage} text="Submit" />
        </div>
      </div>

      <div className="flex flex-row justify-between px-4 py-4 mt-4 rounded-lg cursor-default bg-lightbg">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="">
            <div className="text-xl font-semibold">Set Link Channel</div>
            <div className="text-base text-gray-400">
              Channel where Only Links are Allowed
            </div>
          </div>
        </div>

        <div className="">
          <MenuDropdown handleChange={handleChangeLink} value={channel_Link} />
          <SubmitButton handleSubmit={handleSubmitLink} text="Submit" />
        </div>
      </div>
    </div>
  );
}
