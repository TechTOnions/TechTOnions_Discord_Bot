import axios from "axios"

export const useSelectChannel = async({guild_id,channel_id}:{guild_id:string,channel_id:string}) => {
  const Response = await axios.post(`${import.meta.env.VITE_IP}welcome_channel_set/?guild=${guild_id}&channel=${channel_id}`)
  return (await Response).data
}

export const useSetWelcomeMessage = async ({message}:{message:string}) => {
  const Response = await axios.post(
    `${import.meta.env.VITE_IP}welcome_message/?guild=${window.localStorage.getItem(
      "guild_id"  
    )}&message=${message}`
  );
  return Response.data
}

export const useSetLeaveMessage = async ({message}:{message:string}) => {
  const Response = await axios.post(
    `${import.meta.env.VITE_IP}leave_message/?guild=${window.localStorage.getItem(
      "guild_id"  
    )}&message=${message}`
  );
  return Response.data
}

export const useSelectLeaveChannel = async({guild_id,channel_id}:{guild_id:string,channel_id:string}) => {
  const Response = await axios.post(`${import.meta.env.VITE_IP}leave_channel_set/?guild=${guild_id}&channel=${channel_id}`)
  return (await Response).data
}