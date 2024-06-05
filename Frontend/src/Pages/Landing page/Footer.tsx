export const Footer = () => {
  return (
    <div className="h-auto p-8 text-white bg-navColor">
      <div className="flex items-center justify-center text-3xl font-bold">
        A Discord Bot
      </div>
      <div className="grid justify-center grid-cols-6 my-8">
        <div className="flex items-center justify-center col-span-2 p-4 text-4xl font-extrabold text-center">
          TechTOnions
        </div>
        <div className="col-span-2 gap-0 ">
          <div className="grid grid-cols-3">
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400 ">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
            <div className="flex flex-col">
              <div className="text-lg font-medium">Navigation</div>
              <div className="text-gray-400">Home</div>
              <div className="text-gray-400">About</div>
              <div className="text-gray-400">Status</div>
              <div className="text-gray-400">Dashboard</div>
            </div>
          </div>
        </div>
        <div className="col-span-2">Socials</div>
      </div>
      <div className="flex justify-center">2024-Designed by TechTOnions Team</div>
    </div>
  );
};
