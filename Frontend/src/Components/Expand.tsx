interface Props {
  routeName: string;
}

function Expand(props: Props) {
  const { routeName } = props;
  return (
    <div className="flex justify-start gap-4 items-center">
      <div className="text-justify mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="text-white cursor-default text-3xl mt-2 font-medium">
        {routeName}
      </div>
    </div>
  );
}

export default Expand;
