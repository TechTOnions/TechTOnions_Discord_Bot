import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserData, loading } from "../Atoms/State";
import { ServerListInterface } from "../Interface";

export const useUserData = () => {
  const id = window.localStorage.getItem("id");
  const setUser = useSetRecoilState(UserData);
  const setLoader = useSetRecoilState(loading);
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const Response = await axios.get(
          `${import.meta.env.VITE_IP}available_users?user_id=${id}`
        );
        setLoader(false);
        setUser(Response.data);
      };
      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);
};

export const useGetserverdata = () => {
  const { guilds } = useRecoilValue(UserData);
  const [totalServer, setTotalServer] = useState<ServerListInterface>();
  const effectRan = useRef(true);
  useUserData();
  useEffect(() => {
    if (effectRan.current === true) {
      const fetchData = async () => {
        const Response = await axios.get(`${import.meta.env.VITE_IP}server_List/`);
        setTotalServer(Response.data);
      };
      fetchData();
    }
    return () => {
      effectRan.current = false;
    };
  }, []);
  const userServerWithPresence = guilds.map((server) => ({
    ...server,
    isPresent: totalServer?.ServerList.some(
      (listServer) => listServer.id === server.id
    ),
    iconURL:`https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`
  }));

  return {  
    userServerWithPresence,
  };
};
