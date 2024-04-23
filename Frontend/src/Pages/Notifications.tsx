import { useEffect, useRef, useState } from "react";
import Heading from "../Components/Heading";
import YT from "../Resources/images/YT.png";
import { MenuDropdown } from "../Components/MenuDropdown";
import { useGetYoutubeChannel, useRemoveChannel, useSetYoutubeCreatorChannel, useYtChannelSet } from "../Hooks/Youtube-Notification";

function Notifications(): JSX.Element {
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Youtube Notifications"} />
      <div className="flex items-center justify-between py-2 mt-4 rounded-lg ">
        <div className="text-xl font-medium text-gray-400 ">
          Notifications for Published YouTube Videos.
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <NotificationPopUp />
        <RemoveChannel />
      </div>
      <div className="p-4 rounded-lg bg-cardBox">
        <div className="text-2xl font-semibold text-white ">Subscribed Channel List</div>
        <SubscribedChannelList/>
      </div>
    </div>
  );
}
const SubscribedChannelList = ()=>{
  const [channels,setChannels]=useState([]);
  const EffectRan= useRef(false)
  useEffect(()=>{
    if(EffectRan.current===false){
      const fetchData =  async()=>{
        const response = await useGetYoutubeChannel();
        setChannels(response)
        EffectRan.current=true
      }
      fetchData();
    }
    return ()=>{
      EffectRan.current=true
    }
      
  },[])

  return <div className="py-4">
    {channels.map((item,key)=>(
      <div key={key + 1} className="flex justify-between w-1/2 px-4 py-2 my-2 text-xl font-medium text-white rounded-lg bg-navColor">
        <div>{key + 1}</div>
        <div className="">{item}</div>
      </div>
    )) }
  </div>
} 
const RemoveChannel = ()=>{
  const [channel, SetChannel] = useState("");
  const handleSubmit = async () => {
    if(channel){
      const response = await useRemoveChannel({channel});
      alert(response.message);
    }
  };
  return(
    <div className="rounded-lg bg-cardBox ">
      {/* TopBar */}
      <div className="flex items-center justify-between px-3 py-3 ">
        <div className="flex items-center justify-start gap-2">
          <img className="w-6 h-6" src={YT} alt="img" />
          <div className="text-xl font-semibold text-white">Remove Channel</div>
        </div>
        {/* Cancel Button */}
      </div>
      <div className="px-3 text-base text-gray-400">
        Enter the Youtube Channel ID.
      </div>
      <div className="w-full px-3 my-3 ">
        <input
          type="text"
          className="w-1/2 px-3 py-3 text-white rounded-lg outline-none bg-navColor"
          placeholder="Channel @handle or ID"
          onChange={(e) => {
            SetChannel(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 px-2 py-6 text-white ">
        <button
          type="button"
          className="px-6 py-1 font-medium rounded-md bg-gradient-to-r from-red-600 bg- to-red-800"
          onClick={handleSubmit}
        >
          Remove
        </button>
      </div>
    </div>
  )
}
export function NotificationPopUp(): JSX.Element {
  const [channel, SetChannel] = useState("");
  
  
  const [value, setValue] = useState<string | unknown>();
  const guild_id = window.localStorage.getItem("guild_id") as string;
  const handleSubmit = async () => {
    if(value){
      const response = await useYtChannelSet({guild_id,channel_id:value as string});
      const ChannelSetResponse = await useSetYoutubeCreatorChannel({guild_id,yt_Channel_name:channel});
      if(response && ChannelSetResponse){
        alert("Channel Added Successfully");
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (  
    <div className="rounded-lg bg-cardBox ">
      {/* TopBar */}
      <div className="flex items-center justify-between px-3 py-3 ">
        <div className="flex items-center justify-start gap-2">
          <img className="w-6 h-6" src={YT} alt="img" />
          <div className="text-xl font-semibold text-white">Add Channel</div>
        </div>
        {/* Cancel Button */}
      </div>
      <div className="px-3 text-base text-gray-400">
        Enter the Youtube Channel ID.
      </div>
      <div>
        <MenuDropdown handleChange={handleChange} value={value}/>
      </div>

      <div className="w-full px-3 my-3 ">
        <input
          type="text"
          className="w-1/2 px-3 py-3 text-white rounded-lg outline-none bg-navColor"
          placeholder="Channel @handle or ID"
          onChange={(e) => {
            SetChannel(e.target.value);
          }}
        />
      </div>
      <div className="flex items-center gap-4 px-2 py-6 text-white ">
        <button
          type="button"
          className="px-6 py-1 font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
export default Notifications;
