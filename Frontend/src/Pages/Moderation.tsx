import Heading from "../Components/Heading";
import { Link, Outlet } from "react-router-dom";
import Expand from "../Components/Expand";
import { useRecoilState } from "recoil";
import { ModerationPath } from "../Atoms/State";

function Moderation(): JSX.Element {
  
  const DesiredRoute = "/moderation/message-type";
  const [modePathValue,setModePathValue] = useRecoilState(ModerationPath);
  if(modePathValue === DesiredRoute){
    return (
        <div className="mt-10 ml-8">
            <div className="flex items-center justify-start gap-4 my-4">
              <Link to={"/moderation"} onClick={()=>{setModePathValue("/moderation")}}>
                <Heading head="Moderation" />
              </Link>
              <Expand routeName="Message Type" />
            </div>
            <Outlet />
        </div>
    )
  }  
  
  return (
    <div className="mt-10 ml-8">
      <div className="flex items-center justify-start gap-4 my-4">
                <Heading head="Moderation" />
      </div>
      <Link to="/moderation/message-type" onClick={()=>{setModePathValue("/moderation/message-type")}} >
          <div className="flex items-center justify-start w-full gap-3 px-3 py-3 mt-4 transition-all rounded-lg bg-lightbg hover:bg-hoverbg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <div className="px-3 text-white ">
              <p className="text-xl font-medium">Message type</p>
              <p className="text-lg">
                Select the type of Messages for a channel (Image or Text)
              </p>
            </div>
          </div>
        </Link>
    </div>
  );
}

export default Moderation;
