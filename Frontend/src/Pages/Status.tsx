import { Switch } from "@mui/material";
import Heading from "../Components/Heading";
import { Button } from "../Components/Button";
import { useState } from "react";
import { useChangeStatusImageChannel, useChangeStatusLevelSystem, useChangeStatusLinkChannel, useChangeStatusMessage, useChangeStatusSocialNotification, useChangeStatusleaveMessage } from "../Hooks/Status-hook";

function Settings_general(): JSX.Element {
  const [welcome,setWelcome] = useState(false);
  const [leave,setLeave] = useState(false);
  const [level,setLevel] = useState(false)
  const [notification,setnotification] = useState(false)
  const [image,setImage] = useState(false)
  const [Link,setLink] = useState(false)

  const handleChangeWelcomeMessage = async ()=>{
    await setWelcome(!welcome);
    await useChangeStatusMessage({bool:!welcome})
  }
  const handleChangeLeaveMessage = async ()=>{
    await setLeave(!leave)
    await useChangeStatusleaveMessage({bool:!leave})
  }
  const handleChangeLevelSystem = async ()=>{
    await setLevel(!level)
    await useChangeStatusLevelSystem({bool:!level})
  }
  const handleChangeNotificationSetup= async()=>{
    await setnotification(!notification)
    await useChangeStatusSocialNotification({bool:!notification})
  }
  const handleChangeImageStatus=async()=>{
    await setImage(!image)
    await useChangeStatusImageChannel({bool:!image})
  }
  const handleChangeLinkStatus=async()=>{
    await setLink(!Link)
    await useChangeStatusLinkChannel({bool:!Link})
  }

  return (
    <div className="flex flex-col mt-10 mb-5 ml-8">
      <Heading head={"Feature Status"} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <CardBox heading="Welcome Message" value={welcome} handleChange={handleChangeWelcomeMessage} route="welcome-message"/>
        <CardBox heading="Leave Message" value={leave} handleChange={handleChangeLeaveMessage} route="leave-message"/>
        <CardBox heading="Level System" value={level} handleChange={handleChangeLevelSystem} route="level-setup"/>
        <CardBox heading="Social Notification" value={notification} handleChange={handleChangeNotificationSetup} route="notification"/>
        <CardBox heading="Image Channel " value={image} handleChange={handleChangeImageStatus} route="Channel-content"/>
        <CardBox heading="Link Channel" value={Link} handleChange={handleChangeLinkStatus} route="Channel-content"/>
      </div>
      
    </div>
  );
}

const CardBox = ({heading,route,handleChange,value}:{heading:string,route:string,handleChange:()=>void,value:boolean})=>{
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

export default Settings_general;
