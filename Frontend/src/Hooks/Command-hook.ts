import axios from "axios"

export const useSetPrefix =async ({new_prefix}:{new_prefix:string})=>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}change_prefix/?guild=${window.localStorage.getItem("guild_id")}&new_prefix=${new_prefix}`)
    return Response.data
}