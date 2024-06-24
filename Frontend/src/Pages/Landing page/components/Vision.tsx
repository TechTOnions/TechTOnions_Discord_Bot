import VisionImg from "../../../Resources/Svg/TechTOnions_Our_Vision-1320x1177.png";
export const Vision = () => {
  return (
    <div className="bg-transparent rounded-t-[48px] bg-[linear-gradient(164deg,_#070707_21%,_#313131_100%)] text-white px-16 -mt-8 pt-8 -mb-10 pb-8">
      <div className="flex flex-col items-center justify-center py-6 mx-8 ">
        <div className="py-8 text-6xl shadow-transparent">Our Vision</div>
        <div className="grid grid-cols-2 gap-12 my-12">
          <div className="flex items-center justify-center px-8 text-3xl text-left">
            At TechTOnions.com, we envision a future where technology seamlessly
            integrates into every aspect of our lives. Our goal is to enhance
            efficiency and accessibility, making advanced technological
            solutions available to everyone. We are committed to driving
            transformative innovations that not only simplify daily tasks but
            also open up new possibilities for growth and progress. By focusing
            on user-centric designs and cutting-edge advancements, we aim to
            create a world where technology empowers individuals and communities
            to achieve more and experience life to its fullest potential.
          </div>
          <div className="flex items-center justify-center text-2xl text-left ">
            <img src={VisionImg} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
