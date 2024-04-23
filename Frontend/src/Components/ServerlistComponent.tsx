import React from "react";
import { useGetserverdata } from "../Hooks/User-data-hook";
import { ServerWithPresenceObject } from "../Interface";
import { useNavigate } from "react-router-dom";

export const ServerlistComponent = () => {
  const { userServerWithPresence } = useGetserverdata();  
  return (
    <div className="h-screen text-white bg-mainColor">
      <div className="flex items-center justify-center py-12 ">
        <div className="text-4xl font-extrabold text-white">
          Select a Server
        </div>
      </div>
      <div className="w-2/3 mx-auto my-0">
        <div className="grid content-center grid-cols-3 gap-4 px-6 py-4 justify-items-center">
          {userServerWithPresence.map((server) => (
            <ServerCard key={server.id} data={server} />
          ))}
        </div>
      </div>
    </div>
  );
};
export const ServerCard = ({ data }: { data: ServerWithPresenceObject }) => {
  return (
    <div className="w-[80%]">
      <div
        style={{ "--image-url": `url(${data.icon?data.iconURL:null})` } as React.CSSProperties}
        className={`bg-[image:var(--image-url)] flex items-center justify-center ${
          data.icon ? "" : "bg-navColor"
        } bg-center bg-no-repeat   h-36 rounded-lg`}
      >
        <div className="w-24 h-24 border-2 rounded-full bg-opacity-30">
          {data.icon ? (
            <img
              className="w-full h-full rounded-full"
              src={data.iconURL}
              alt="img"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-2xl font-extrabold text-center rounded-full bg-cardBox">
              {data.name?.charAt(0)}'s Server
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between w-full my-4">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-medium">{data.name}</div>
          {data.owner ? (
            <div className="text-sm text-gray-400">Owner</div>
          ) : (
            <div className="text-sm text-gray-400">Moderator</div>
          )}
        </div>
        {
          data.isPresent?<ButtonGo server_id={data.id} />: <ButtonSetup server_id={data.id}/>
        }
      </div>
    </div>
  );
};

const ButtonGo = ({server_id}:{server_id?:string}) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    window.localStorage.setItem("guild_id",server_id as string);
    navigate('/')
  }
  return (
    <button onClick={handleClick} className="w-24 h-10 text-center duration-300 ease-in-out rounded-md cursor-pointer hover:bg-sidebarHead transiontion bg-gradient-to-r from-cyan-500 to-blue-500 ">
      Go
    </button>
  );
};
const ButtonSetup=({server_id}:{server_id?:string})=>{
  const handleClick= ()=>{
    window.open(`https://discord.com/oauth2/authorize?client_id=1075305629641621504&permissions=8&scope=bot&guild_id=${server_id}`, '_blank', 'toolbar=0,location=0,menubar=0');
    setTimeout(()=>{
      window.location.reload();
    },10000)
  }
  return (
    <button onClick={handleClick} className="w-24 h-10 text-center duration-300 ease-in-out rounded-md cursor-pointer hover:bg-sidebarHead transiontion bg-gradient-to-r from-emerald-500 to-green-500 ">
      Setup
    </button>
  )
}
