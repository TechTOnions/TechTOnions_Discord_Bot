import { Button } from "../../Components/Button";
import TechTOnionsLogo from "../../Resources/images/TechTOnions_Bot.png"


export const LandingNavbar = () => {
  return (
    <div className="sticky top-0 px-16 py-4 bg-navColor">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="text-xl font-bold text-white">
          <img src={TechTOnionsLogo} alt="" className="h-8 w-18" />
          </h1>
          <div className="flex items-center gap-4 text-white justify-evenly">
            <div className="text-lg font-semibold transition duration-700 border-b-2 cursor-pointer hover:duration-700 border-navColor hover:border-b-2 hover:border-blue-600 hover:transition">Home</div>
            <div className="text-lg font-semibold transition duration-700 border-b-2 cursor-pointer hover:duration-700 border-navColor hover:border-b-2 hover:border-blue-600 hover:transition">About Us</div>
            <div className="text-lg font-semibold transition duration-700 border-b-2 cursor-pointer border-navColor hover:duration-700 hover:border-b-2 hover:border-blue-600 hover:transition">Contact Us</div>
            <Button  text={"Contribute"} setRed={true} route={import.meta.env.VITE_GITHUB_URI} />
            <Button  text={"Login"} route={import.meta.env.VITE_DISCORD_AUTH} />
          </div>
        </div>
    </div>
  );
};
