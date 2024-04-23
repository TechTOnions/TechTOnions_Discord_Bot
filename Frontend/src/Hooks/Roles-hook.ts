import axios from "axios"

export const useGetRoles = async () =>{
    const Response = await axios.get(`${import.meta.env.VITE_IP}server_Roles_List/?guild=${window.localStorage.getItem("guild_id")}`);
    const Roles = Object.entries(Response.data).map(
        ([role, id]) => ({ role, id })
      );
    return Roles;
}

export const useSetJoinMemberRole = async ({channel_id,role_id}:{channel_id:string,role_id:string}) =>{
    const Response = await axios.post(`${import.meta.env.VITE_IP}join_member_role/?guild=${window.localStorage.getItem('guild_id')}&channel=${channel_id}&role=${role_id}`);
    return await Response.data;
}