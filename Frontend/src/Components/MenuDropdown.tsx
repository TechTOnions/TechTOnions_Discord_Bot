import { useRecoilValue } from "recoil";
import { ChannelArray } from "../Atoms/State";
import { Roles } from "../Interface";

export const MenuDropdown = ({handleChange,value,roles}: {handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,value:string|unknown,roles?:Roles[]}) => {
  const ChannelArrays = useRecoilValue(ChannelArray);
  return (
    
      <select
        className="px-2 py-2 mx-4 my-4 text-white rounded outline-none min-w-40 bg-navColor"
        name="levelup"
        value={value as string}
        // defaultValue={}
        onChange={handleChange}
        required
      >
        {roles? roles.map((item) => (
          <option
            key={item.id as string}
            className="p-3 border-none outline-none min-w-24 bg-navColor"
            value={item.id as string}
          >
            {item.role}
          </option>
        )) :
        ChannelArrays.map((item) => (
          <option
            key={item.id as string}
            className="p-3 border-none outline-none bg-navColor"
            value={item.id as string}
          >
            {item.channel}
          </option>
        ))}
      </select>

  );
};
