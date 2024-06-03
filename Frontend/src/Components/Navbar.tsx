import { useRecoilValue } from "recoil";
import image from "../Resources/images/TechTOnions Logo Compact 13.png"
import Userprofile from "./Userprofile";
import { UserData } from "../Atoms/State";

function Navbar(): JSX.Element {
 
    const {user} = useRecoilValue(UserData);
    console.log(user)
  return (
      <div className="flex items-center justify-between h-12 min-w-full gap-8">
        <div className="flex items-center gap-8">
          {/* Logo and Name */}
          <div className="flex items-center gap-2 cursor-default">
            <img src={image}  className="w-10 h-10 rounded-2xl"alt="" />
            <p className="text-white">TechTOnion</p>
          </div>
        </div>
        <div className="flex items-center ">
          <Userprofile name={user.username} id={user.id} avatar={user.avatar}  />
        </div>
        
      </div>
  );
}

export default Navbar;
