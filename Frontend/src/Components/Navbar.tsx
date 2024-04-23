import image from "../Resources/images/TechTOnions Logo Compact 13.png"
import Userprofile from "./Userprofile";

function Navbar(): JSX.Element {
  const img: string =
    "https://images.pexels.com/photos/325521/pexels-photo-325521.jpeg";
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
          <Userprofile name="Yash" img={img} />
        </div>
        
      </div>
  );
}

export default Navbar;
