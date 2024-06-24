import React, { useState } from "react";
import Heading from "../Components/Heading";
import { useRecoilValue } from "recoil";
import { RoleArray } from "../Atoms/State";
import { MenuDropdown } from "../Components/MenuDropdown";
import { SubmitButton } from "../Components/Button";
import { useSetJoinMemberRole } from "../Hooks/Roles-hook";

function JoinRoles(): JSX.Element {
  const roles = useRecoilValue(RoleArray);
  const [roleId, setroleId] = useState("");
  const [channelid, setChannelid] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setroleId(e.target.value);
  };
  const handleChangeChannel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setChannelid(e.target.value);
  };
  const useHandleSubmit = async () => {
    if (roleId && channelid) {
      const response = await useSetJoinMemberRole({
        channel_id: channelid,
        role_id: roleId,
      });
      alert(response.role_name + " is Set");
    }
  };
  return (
    <div className="mt-10 ml-8">
      <Heading head="Join Roles" />
      <div className="flex items-center justify-start my-5 ">
        <div className=" bg-cardBox rounded-lg  w-[45%]  p-4">
          <div className="text-xl font-semibold text-white">Join Roles</div>
          <div className="pl-2 my-2 text-base text-white border-l-4">
            All roles listed below will be assigned to every user who joins the
            server.
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="dropdown"
              className="text-base font-medium text-white"
            >
              {" "}
              Select Role
            </label>
            <MenuDropdown
              handleChange={handleChange}
              value={roleId}
              roles={roles}
            />
          </div>
          <div className="flex flex-col mt-3">
            <label
              htmlFor="dropdown"
              className="text-base font-medium text-white"
            >
              {" "}
              Select Channel
            </label>
            <MenuDropdown
              handleChange={handleChangeChannel}
              value={channelid}
            />
          </div>
          <SubmitButton handleSubmit={useHandleSubmit} text="submit" />
        </div>
      </div>
    </div>
  );
}

export default JoinRoles;
