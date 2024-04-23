import CardBox from "../Components/CardBox";
import HomeHeading from "../Components/HomeHeading";

function HomeMain(): JSX.Element {
  return (
    <div className="m-4  flex flex-col ">
      <div className="font-medium  items-center flex justify-start  my-2 mx-5">
        <HomeHeading name={"Yash"} />
      </div>
      <div className="mx-5  mb-10 ">
          <CardBox/>
      </div>
    </div>
  );
}

export default HomeMain;
