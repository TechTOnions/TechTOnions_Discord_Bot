import { useEffect, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGetChannels } from "../Hooks/Channel-hook";
import { useSetRecoilState } from "recoil";
import { ChannelArray, RoleArray, UserData } from "../Atoms/State";
import { ChannelListArray, Roles, userData } from "../Interface";
import { useGetRoles } from "../Hooks/Roles-hook";

import axios from "axios";

export const MainRoute = () => {
  const guild = window.localStorage.getItem("guild_id");
  const id = window.localStorage.getItem("id");
  const setUser = useSetRecoilState<userData>(UserData);
  const setChannels = useSetRecoilState<ChannelListArray[]>(ChannelArray);
  const setRole = useSetRecoilState<Roles[]>(RoleArray);
  const EffectRan = useRef(false);

  useEffect(() => {
    if (!EffectRan.current && guild != null) {
      const useFetchData = async () => {
        const Data = await axios.get(
          `${import.meta.env.VITE_IP}available_users?user_id=${id}`,
        );
        setUser(Data.data);
        const ChannelArray = await useGetChannels();
        const RoleArray = await useGetRoles();
        setRole(RoleArray);
        setChannels(ChannelArray);
      };
      useFetchData();
      return () => {
        EffectRan.current = true;
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return guild ? <Outlet /> : <Navigate to={"serverlist"} />;
};
