import axios from "axios";

export const useSetLevelRole = async ({role_id,level}:{role_id:string,level:string})=>{
  const Response =   await axios.post(`${import.meta.env.VITE_IP}LVL_role_set/?guild=${window.localStorage.getItem("guild_id")}&role=${role_id}&lvl=${level}`);
  return await Response.data;
}