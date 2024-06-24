import { useLocation } from "react-router-dom";
import { Modules } from "../Resources/Data";
import SubsidebarModule from "./SubsidebarModule";

function SidebarSecondHalf() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col items-start justify-center min-w-full mr-1 ">
      <div className="">
        {Modules.map((item, key) => (
          <div
            className={`${pathname == item.route ? " text-white font-medium bg-hoverbg rounded" : "text-gray-400"}`}
          >
            <SubsidebarModule
              key={key}
              name={item.name}
              route={item.route}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default SidebarSecondHalf;
