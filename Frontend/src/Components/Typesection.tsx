interface Props {
  ChannelName: string;
}

function Typesection(props: Props): JSX.Element {
  const { ChannelName } = props;
  return (
    <div className="flex items-center justify-between bg-lightbg px-3 py-3 my-2 w-[80%] rounded-lg text-white cursor-default ">
      <div className="text-2xl">{ChannelName}</div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 justify-center">
          <label htmlFor="Text">Text</label>
          <input type="radio" name="Text" id="text" />
        </div>
        <div className="flex items-center gap-2 justify-center">
          <label htmlFor="Text">Img</label>
          <input type="radio" name="Img" id="text" />
        </div>
      </div>
    </div>
  );
}

export default Typesection;
