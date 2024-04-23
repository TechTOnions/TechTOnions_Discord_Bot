import axios from "axios";

export const useGetChannels = async () => {
  const Response = await axios.get(
    `${import.meta.env.VITE_IP}server_Channels_List/?guild=${window.localStorage.getItem(
      "guild_id"
    )}`
  );
  const ChannelArray = Object.entries(Response.data).map(
    ([channel, id]) => ({ channel, id })
  );

  return ChannelArray;
};
