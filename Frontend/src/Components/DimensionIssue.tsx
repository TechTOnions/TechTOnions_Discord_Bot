import { Link } from "react-router-dom";
import TechTOnionsLogo from "../Resources/images/TechTOnions_Bot.png";
export const DimensionIssue = () => {
  return (
    <div className="bg-[linear-gradient(164deg,_#070707_21%,_#009fff_100%)] bg-transparent h-screen p-6 text-white  ">
      <div className="flex items-center justify-center mx-auto my-auto ">
        <img src={TechTOnionsLogo} className="h-12 w-18" alt="" />
      </div>
      <div className="flex items-center justify-center my-10 text-2xl text-center">
        Sorry,This Application is Designed to Use in Desktop
      </div>
      <Link to={"https://techtonions.com"}>
        <div className="flex items-center justify-center my-10 text-2xl text-center">
          Visit TechTOnions.com
        </div>
      </Link>
    </div>
  );
};
