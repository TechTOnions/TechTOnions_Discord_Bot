import Navbar from "../Components/Navbar";
import { ServerlistComponent } from "../Components/ServerlistComponent";
import { getData } from "../Hooks/Login-hook";

export const ServerlistPage = () => {
  const id = getData();
  const flag = window.localStorage.getItem("id");

  return (
    <div>
      <div className="sticky top-0 z-10 flex items-center h-12 px-16 py-4 bg-navColor">
        <Navbar />
      </div>
      {id || flag ? (
        <div>
          <ServerlistComponent />
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen text-4xl font-bold text-white bg-slate-500 ">
          Loading....
        </div>
      )}
    </div>
  );
};

