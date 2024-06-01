import axios from "axios";
import { useEffect, useRef, useState } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { AllServer, UserData, loading } from "../Atoms/State";

export const useUserData = () => {
  const id = window.localStorage.getItem("id");
  const setTotalServer = useSetRecoilState(AllServer);
  const setUser = useSetRecoilState(UserData);
  const setLoader = useSetRecoilState(loading);
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current === false) {
      const fetchData = async () => {
        const Response = await axios.get(
          `${import.meta.env.VITE_IP}available_users?user_id=${id}`
        );
        const Response2 = await axios.get(
          `${import.meta.env.VITE_IP}server_List/`
        );
        await setUser(Response.data);
        await setTotalServer(Response2.data);
        await setLoader(false);
      };
      fetchData();
    }
    return () => {
      effectRan.current = true;
    };
  }, []);
};
interface Server {
  id: string;
  name: string;
  icon?: string;
  owner: boolean;
  permissions: number;
  permissions_new: string;
  features: any[];
}

interface ServerWithPresence extends Server {
  isPresent: boolean;
  iconURL: string;
}

export const useGetserverdata = () => {
  const { guilds } = useRecoilValue(UserData);
  const totalServer = useRecoilValue(AllServer);
  const [userServerWithPresence, setUserServerWithPresence] = useState<ServerWithPresence[]>([]);
  const [loading, setLoading] = useState(true); 
  console.table(guilds);
  console.table(totalServer);
  useEffect(() => {
    if (guilds && (totalServer.ServerList && totalServer)) {
      const userServerWithPresence1:ServerWithPresence[] = guilds.map((server) => {
        return {
          ...server,
          isPresent: totalServer?.ServerList?.some((obj) => obj.id === server.id),
          iconURL: `https://cdn.discordapp.com/icons/${server.id}/${server.icon}.png?size=1024`,
        };
      });
      setUserServerWithPresence(userServerWithPresence1);
      setLoading(false);
    }
  }, [guilds, totalServer]);
  if (loading) {
    return { userServerWithPresence: [] }; // or return a loading state
  }
  

  return {
    userServerWithPresence,
  };
};
