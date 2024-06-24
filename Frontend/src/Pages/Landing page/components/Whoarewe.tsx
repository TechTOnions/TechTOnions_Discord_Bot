import WhoImg from "../../../Resources/Svg/TechTOnions_Who_We_Are-1320x867.png";
export const Whoarewe = () => {
  return (
    <div className="bg-transparent bg-[linear-gradient(164deg,_#070707_21%,_#313131_100%)] rounded-t-[48px] text-white px-16 -mt-8 pt-8 -mb-10 pb-8">
      <div className="flex flex-col items-center justify-center py-6 mx-8 ">
        <div className="py-8 text-6xl shadow-transparent">Who We Are</div>
        <div className="grid grid-cols-2 gap-12 my-12">
          <div className="px-8 text-2xl text-left">
            <img src={WhoImg} alt="" />
          </div>
          <div className="flex items-center justify-center text-3xl text-left ">
            TechTOnions.com is more than a company; it's a collaborative
            community of creative minds, tech enthusiasts, and industry experts.
            Our team is driven by a shared goal - revolutionizing the tech
            landscape. From software development and embedded solutions to test
            jigs and 3D printing, our diverse skills ensure comprehensive and
            innovative solutions.
          </div>
        </div>
      </div>
    </div>
  );
};
