import axios from "axios"

export const useYtChannelSet = async ({guild_id,channel_id}:{guild_id:string,channel_id:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}youtube_notification/?guild=${guild_id}&channel=${channel_id}`);
    return (await Response).data
}

export const useSetYoutubeCreatorChannel = async ({guild_id,yt_Channel_name}:{guild_id:string,yt_Channel_name:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}Set_YT_channel/?guild=${guild_id}&YT_channel_usr=${yt_Channel_name}`)
    return (await Response).data
}
export const useGetYoutubeChannel = async ()=>{
    const Response = await axios.get(`${import.meta.env.VITE_IP}GET_YT_SUB_channels_lst/?guild=${window.localStorage.getItem("guild_id")}`);
    return (await Response).data
}
export const useRemoveChannel = async ({channel}:{channel:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}remove_YT_channel/?guild=${window.localStorage.getItem("guild_id")}&YT_channel_usr=${channel}`);
    return (await Response).data
}