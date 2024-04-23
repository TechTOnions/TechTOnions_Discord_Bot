interface Props{
    head:string;
    text:string;
    // style:React.CSSProperties | null
}

function SectionComponent(props:Props):JSX.Element {
    const{head,text} =props
  return (
    <div  className={"rounded-lg mt-3"}>
        <div className="flex justify-between bg-hoverbg min-w-full p-3 rounded-lg text-white">
          <div className="flex flex-col items-start justify-center">
            <div className="font-medium text-2xl">{head}</div>
            <div className=" font-normal">
                {text}
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionComponent