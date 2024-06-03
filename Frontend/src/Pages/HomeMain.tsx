import { useRecoilValue } from "recoil";
import CardBox from "../Components/CardBox";
import HomeHeading from "../Components/HomeHeading";
import { UserData } from "../Atoms/State";

function HomeMain(): JSX.Element {
  const {user}= useRecoilValue(UserData);
  return (
    <div className="flex flex-col m-4 ">
      <div className="flex items-center justify-start mx-5 my-2 font-medium">
        <HomeHeading name={user.username} />
      </div>
      <div className="mx-5 mb-10 ">
          <CardBox/>
      </div>
    </div>
  );
}

export default HomeMain;
