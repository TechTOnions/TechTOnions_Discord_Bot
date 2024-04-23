import {Button }from "./Button";

interface Props {
    img:string;
    heading:string;
    description:string;
    buttonDesc:string;
    route:string

}

function Card(props:Props):JSX.Element {
    const {img,heading,description,buttonDesc,route}= props
  return (
    <div className="flex flex-col items-start justify-center gap-1 p-4 text-white rounded-lg bg-cardBox ">
        <div className="my-1">
            <img src={img} className="h-7 w-7" alt="Icon" />
        </div>
        <div className="my-1 text-xl font-medium text-white">
            {heading}
        </div>
        <div className="my-1 text-base font-normal cursor-default ">
            {description}
        </div>
        <div className="my-1">
            <Button
                 route={route}
                 text={buttonDesc}
            />
        </div>
    </div>
  )
}

export default Card