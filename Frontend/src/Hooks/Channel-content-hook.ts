import axios from "axios"

export const useSetImageChannel = async ({channel_id}:{channel_id:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}add_img_chhannel/?guild=${window.localStorage.getItem("guild_id")}&channel_id=${channel_id}`)
    return await Response.data
}

export const useSetLinkChannel = async ({channel_id}:{channel_id:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}add_link_chhannel/?guild=${window.localStorage.getItem("guild_id")}&channel_id=${channel_id}`)
    return await Response.data
}