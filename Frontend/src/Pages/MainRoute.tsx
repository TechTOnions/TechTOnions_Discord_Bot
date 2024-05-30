import { useEffect, useRef } from "react";
import { Navigate, Outlet, } from "react-router-dom";
import { useGetChannels } from "../Hooks/Channel-hook";
import { useSetRecoilState } from "recoil";
import { ChannelArray, RoleArray } from "../Atoms/State";
import { ChannelListArray, Roles } from "../Interface";
import { useGetRoles } from "../Hooks/Roles-hook";

export const MainRoute=()=>{
    
    const guild= window.localStorage.getItem('guild_id');
    const setChannels= useSetRecoilState<ChannelListArray[]>(ChannelArray)
    const setRole = useSetRecoilState<Roles[]>(RoleArray);
    const EffectRan = useRef(false);

    useEffect(()=>{
      if(!EffectRan.current){
        const fetchData = async ()=>{
          const ChannelArray = await useGetChannels();
          const RoleArray = await useGetRoles();
          setRole(RoleArray)
          setChannels(ChannelArray);
        }
        fetchData()
        EffectRan.current=true;
      } 
    },[])
    
    return  guild?<Outlet/>:<Navigate to={'/serverlist'}/>
  }