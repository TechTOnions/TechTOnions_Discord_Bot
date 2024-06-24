import { Link } from "react-router-dom";

interface Props {
  text: string;
  route: string;
  setRed?: boolean;
}
export const Button = (props: Props) => {
  const { route, text, setRed } = props;
  return (
    <div
      className={`${setRed ? `bg-gradient-to-r from-red-500 to-red-700` : `bg-gradient-to-r from-cyan-500 to-blue-500`} px-2 py-1 duration-300 text-base ease-in-out rounded-md cursor-pointer hover:bg-sidebarHead transiontion `}
    >
      {setRed ? (
        <button>
          <Link to={route} target="_blank " rel="noopener noreferrer">
            {text}
          </Link>
        </button>
      ) : (
        <button>
          <Link to={route}>{text}</Link>
        </button>
      )}
    </div>
  );
};
export const SubmitButton = ({
  handleSubmit,
  text,
}: {
  handleSubmit: () => void;
  text: string;
}) => {
  return (
    <button
      onClick={() => {
        handleSubmit();
      }}
      className="px-6 py-2 text-sm font-medium text-white transition duration-200 bg-green-800 rounded-lg hover:bg-green-500"
    >
      {text}
    </button>
  );
};
