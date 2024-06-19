import svg from "../../../Resources/images/FeatureLogo.png"
import feature from '../../../Resources/Svg/1.svg'
import socialNotif from "../../../Resources/Svg/2.svg"
export const Features = () => {
  return (
    <div className="bg-transparent text-white px-16 bg-[linear-gradient(164deg,_#070707_21%,_#313131_100%)] min-h-96 -mb-10 pb-10 -mt-8 pt-8">
      <div className="flex flex-col pt-12">
        <h1 className="py-4 text-5xl font-semibold w-fit">
          Extensive customization options
          <div className=" p-[2px] bg-blue-600 -mt-2"></div>
          <div className="py-2 text-xl text-white font-extralight">
            TechTOnions Bot have a high Degree of Customization.
          </div>
        </h1>
      </div>
      <div className="flex items-center justify-center w-full mt-12 ">
          <div className="flex flex-col items-start justify-center gap-2 p-4 text-2xl font-light3">
            <div className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(130deg,#008fff,#09ffff)]">Message Components</div>
             <div className="flex flex-col gap-1 px-4">
                <div>Let users assign themselves roles</div>
                <div>Create beautiful info messages</div>
                <div>Send messages based on keywords</div>
             </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 font-light3">
             <img src={svg} alt=""  className="w-full h-[30rem]"/>
          </div>
      </div>
      <div className="flex items-center justify-center w-full pt-12 my-4 ">
      <div className="flex flex-col items-start justify-center gap-2 font-light3">
             <img src={feature} alt=""  className="w-full h-[30rem]"/>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 p-4 ml-8 text-2xl font-light3">
            <div className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(130deg,#008fff,#09ffff)]">Moderation</div>
             <div className="flex flex-col gap-1 px-4">
                <div>Easily Manage Cases</div>
                <div>Define reason aliases</div>
                <div>Custom DM notifications</div>
             </div>
          </div>
          
      </div>
      <div className="flex items-center justify-center w-full my-4 ">
          <div className="flex flex-col items-start justify-center gap-2 p-4 text-2xl font-light3">
            <div className="text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(130deg,#008fff,#09ffff)]">Manage Social Media</div>
             <div className="flex flex-col gap-1 px-4">
                <div>Create beautiful Social Notification</div>
                <div>Let User Assign their favourite Creator</div>
                <div>Live Updates from the Channel</div>
             </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-2 font-light3">
             <img src={socialNotif} alt=""  className="w-full h-[30rem]"/>
          </div>
      </div>
    </div>
  );
};
