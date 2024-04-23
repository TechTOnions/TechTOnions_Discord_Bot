import { Button, SubmitButton } from "../Components/Button";
import Heading from "../Components/Heading";
import Icon from "../Resources/images/IconGit.png";
import React, { useState } from "react";
import { useSetPrefix } from "../Hooks/Command-hook";

function Commands(): JSX.Element {
  const [prefix, Setprefix] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    Setprefix(e.target.value);
  };
  const handleSubmit = async () => {
    if (prefix) {
      const Response = await useSetPrefix({ new_prefix: prefix });
      console.log(Response);
      alert(Response);
    }
  };
  return (
    <div className="mt-10 ml-8">
      <Heading head={"Commands"} />

      {/* Prefix Section */}
      <div className="flex flex-row justify-between px-4 py-4 mt-4 rounded-lg cursor-default bg-lightbg">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="">
            <div className="text-2xl font-semibold">Prefixes</div>
            <div className="text-base text-gray-400">
              Put one of the following Prefixes in front of your message to
              execute Bot Commands
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            type="text"
            placeholder=" Spcl Char only"
            className="px-3 py-2 text-white rounded-lg bg-navColor"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex items-center justify-center ">
          <SubmitButton handleSubmit={handleSubmit} text="Submit" />
        </div>
      </div>

      {/* Custom Command */}
      <div className="flex flex-row justify-between px-4 py-4 mt-4 rounded-lg cursor-default bg-lightbg">
        <div className="flex items-center justify-center gap-4 text-white">
          <img src={Icon} className="w-6 h-6" alt="icn" />
          <div className="">
            <div className="text-xl font-semibold">Custom Commands</div>
            <div className="text-base text-gray-400">
              Create and Manage your own commands
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <Button text={"Create new Command"} route="/custom-command" />
        </div>
      </div>

      {/* Default Command */}
      <div className="flex flex-row justify-between px-4 py-4 mt-4 transition-colors rounded-lg cursor-default bg-lightbg hover:bg-hoverbg">
        <div className="flex items-center justify-center gap-4 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6zm4 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1zM7 7a1 1 0 0 0 0 2h.001a1 1 0 0 0 0-2H7zm-1 5a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm1 3a1 1 0 1 0 0 2h.001a1 1 0 1 0 0-2H7z"
              clipRule="evenodd"
            />
          </svg>
          <div className="">
            <div className="text-xl font-semibold">Custom Commands</div>
            <div className="text-base text-gray-400">
              Create and Manage your own commands
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" fill="none" />
            <path
              d="M8.59,27.16,17.75,18,8.59,8.82,11.41,6l12,12-12,12Z"
              transform="translate(-5.59 -6)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Commands;
