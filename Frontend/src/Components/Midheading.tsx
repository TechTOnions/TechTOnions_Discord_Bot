interface Props{
    head:String
}

function Midheading(props:Props) :JSX.Element {
    const head = props.head;
  return (
    <div className="text-[#909498] text-lg font-medium mt-4" >
            {head}
      </div>
  )
}

export default Midheading