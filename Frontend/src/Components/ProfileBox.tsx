

interface Props {
  name: string;
  img: string;
}
function ProfileBox(props: Props): JSX.Element {
  const { name, img } = props;
  return (
    
    <div className={"flex items-center justify-between gap-4 px-2 py-1 rounded-3xl hover:bg-[#32373E] hover:transition transition hover:duration-200"}>
      <div className="flex items-center gap-2 justify-evenly">
        <div className="rounded h-5 w-5">
          <img src={img} className="h-full w-full rounded-full" alt="" />
        </div>
        <div className="text-white text-sm font-medium">{name}</div>
      </div>
      <div className="text-center flex items-center justify-center">
        <button
          onClick={(): void => {
            console.log("Clicked");
          }}
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProfileBox;
