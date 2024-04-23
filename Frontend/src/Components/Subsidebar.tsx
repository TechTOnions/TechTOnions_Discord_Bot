import { Link } from "react-router-dom";

interface Props {
  name: string;
  img: string;
  route: string;
}

function Subsidebar(props: Props): JSX.Element {
  const { name, img, route } = props;
  return (
    <Link to={route}>
        <div className="flex  items-center gap-4 min-w-[90%] justify-start my-3 py-1 px-2 cursor-pointer hover:transition transition text-gray-400 hover:font-medium hover:text-white rounded hover:bg-hoverbg ">
          <div className="">
            <img src={img} className="h-5 w-5" alt="" />
          </div>
          <div className="col-span-2">{name}</div>
        </div>
    </Link>
  );
}

export default Subsidebar;
