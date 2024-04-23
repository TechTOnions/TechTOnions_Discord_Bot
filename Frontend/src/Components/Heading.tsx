interface Props{
    head:string
}

function Heading(props:Props) {
    const{head}=props
  return (
    <div className="flex justify-start gap-4 items-center text-white">
        <div className="text-5xl font-semibold">
            {head}
        </div>
    </div>
  )
}

export default Heading