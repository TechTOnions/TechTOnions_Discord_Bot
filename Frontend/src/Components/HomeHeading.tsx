interface Props {
  name: string;
}

function HomeHeading(props: Props): JSX.Element {
  const { name } = props;
  

  return (
    <div className="">
      <div className="text-5xl font-bold text-white flex gap-4">
        <h1>Welcome</h1>
        <h1 className="text-blueHead">-{name}-</h1>
      </div>
      <div className="text-white  text-2xl font-normal my-3">
        Find Commonly Used Dashboard Pages below.
      </div>
    </div>
  );
}

export default HomeHeading;
