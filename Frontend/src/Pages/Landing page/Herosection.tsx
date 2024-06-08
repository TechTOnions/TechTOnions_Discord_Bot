// import { Button } from "../../Components/Button";

import { Button } from "../../Components/Button";

export const Herosection = () => {
  return (
    <div className="px-16 rounded-b-[48px] py-8 bg-[linear-gradient(164deg,_#070707_21%,_#009fff_100%)] min-h-96 flex justify-start items-center">
      <div className="flex flex-col items-start justify-start gap-4 text-3xl font-bold text-white">
        <div>
          <div className="w-full font-medium text-7xl ">Welcome To</div>
          <div className="font-medium text-7xl">
            Tech<span className="text-[#009fff]">TOnions</span> Discord Bot
          </div>
        </div>
        <div className="py-2 text-3xl font-medium text-gray-400">
           <div>
           Multipurpose Discord bot.
           </div>
           <div>
            Fully Customizable.
           </div>
           <div>
            Completely Free and OpenSource.
           </div>
        </div>
        <div className="flex items-center gap-4">
          <Button text="Add to Discord" route={import.meta.env.VITE_DISCORD_AUTH}/>
          <Button text="Contribute" route={import.meta.env.VITE_GITHUB_URI}setRed={true} />
        </div>
      </div>
    </div>
  );
};
