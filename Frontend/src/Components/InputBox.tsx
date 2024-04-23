interface Props{
    type:string;
    placeholder:string
}

function InputBox(props:Props) {
    const{type,placeholder}=props
  return (
    <div className="px-6 flex justify-center items-center bg-lightbg rounded-lg">
      <input
        type={type}
        className=" bg-transparent w-fit h-fit text-center focus:border-none focus:border-transparent focus:ring-0 text-black "
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputBox;
