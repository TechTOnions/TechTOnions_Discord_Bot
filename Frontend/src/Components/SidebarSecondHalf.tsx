import {Modules} from "../Resources/Data"
import SubsidebarModule from "./SubsidebarModule"

function SidebarSecondHalf() {
  return (
    <div className="flex flex-col  items-start justify-center min-w-full mr-1 ">
      <div  className="">
            {Modules.map((item,key)=><SubsidebarModule key={key} name={item.name} route={item.route} img={item.img}/>)}
      </div>
    </div>
  )
}
export default SidebarSecondHalf