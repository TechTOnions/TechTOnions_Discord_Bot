import Subsidebar from "./Subsidebar"
import {DataSidebar} from "../Resources/Data"

function Sidebar() {
  return (
    <div className="flex flex-col  items-start justify-center min-w-full mr-1 ">
      <div  className="">
            {DataSidebar.map((item,key)=><Subsidebar key={key} name={item.name} route={item.route} img={item.img}/>)}
      </div>
    </div>
  )
}
export default Sidebar