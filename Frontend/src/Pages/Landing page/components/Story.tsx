import StoryImg from "../../../Resources/Svg/TechTOnions_our_story-1320x1209.webp";

export const Story = () => {
  return (
    <div className="bg-transparent bg-[linear-gradient(164deg,_#070707_21%,_#313131_100%)] text-white px-16 -mt-8 pt-8 -mb-10 pb-8">
      <div className="flex flex-col items-center justify-center py-6 mx-8 ">
        <div className="py-8 text-6xl shadow-transparent">Our Story</div>
        <div className="grid grid-cols-2 gap-12 my-12">
          <div className="flex items-center justify-center px-8 text-3xl text-left">
            Founded in 2020, TechTOnions.com has evolved from a visionary idea
            to a dynamic reality. Our journey began with a passion for pushing
            technological boundaries and a commitment to providing cutting-edge
            solutions.
          </div>
          <div className="flex items-center justify-center text-2xl text-left ">
            <img src={StoryImg} alt="" className="w-96 h-96" />
          </div>
        </div>
      </div>
    </div>
  );
};
