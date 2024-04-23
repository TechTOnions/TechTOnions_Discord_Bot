import axios from "axios"

export const useChangeStatusMessage = async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}welcome_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}
export const useChangeStatusleaveMessage= async({bool}:{bool:boolean})=>{
    const Response =  await axios.post(`${import.meta.env.VITE_IP}leave_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}
export const useChangeStatusLevelSystem= async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}LVLsystem_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}   
export const useChangeStatusSocialNotification= async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}youtube_notification_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}   
export const useChangeStatusImageChannel= async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}IMG_channel_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}   
export const useChangeStatusLinkChannel= async ({bool}:{bool:boolean})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}link_channel_status/?guild=${window.localStorage.getItem("guild_id")}&status=${bool}`)
    return Response.data
}   