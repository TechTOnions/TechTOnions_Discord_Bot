import Heading from "../Components/Heading";
import { useState } from "react";
import {
  useChangeStatusImageChannel,
  useChangeStatusLevelSystem,
  useChangeStatusLinkChannel,
  useChangeStatusMessage,
  useChangeStatusSocialNotification,
  useChangeStatusleaveMessage,
} from "../Hooks/Status-hook";
import { StatusCardBox } from "../Components/StatusCardBox";

function Settings_general(): JSX.Element {
  const [welcome, setWelcome] = useState(false);
  const [leave, setLeave] = useState(false);
  const [level, setLevel] = useState(false);
  const [notification, setnotification] = useState(false);
  const [image, setImage] = useState(false);
  const [Link, setLink] = useState(false);

  const useHandleChangeWelcomeMessage = async () => {
    await setWelcome(!welcome);
    await useChangeStatusMessage({ bool: !welcome });
  };
  const useHandleChangeLeaveMessage = async () => {
    await setLeave(!leave);
    await useChangeStatusleaveMessage({ bool: !leave });
  };
  const useHandleChangeLevelSystem = async () => {
    await setLevel(!level);
    await useChangeStatusLevelSystem({ bool: !level });
  };
  const useHandleChangeNotificationSetup = async () => {
    await setnotification(!notification);
    await useChangeStatusSocialNotification({ bool: !notification });
  };
  const useHandleChangeImageStatus = async () => {
    await setImage(!image);
    await useChangeStatusImageChannel({ bool: !image });
  };
  const useHandleChangeLinkStatus = async () => {
    await setLink(!Link);
    await useChangeStatusLinkChannel({ bool: !Link });
  };

  return (
    <div className="flex flex-col mt-10 mb-5 ml-8">
      <Heading head={"Feature Status"} />
      <div className="grid grid-cols-2 gap-4 mt-8">
        <StatusCardBox
          heading="Welcome Message"
          value={welcome}
          handleChange={useHandleChangeWelcomeMessage}
          route="welcome-message"
        />
        <StatusCardBox
          heading="Leave Message"
          value={leave}
          handleChange={useHandleChangeLeaveMessage}
          route="leave-message"
        />
        <StatusCardBox
          heading="Level System"
          value={level}
          handleChange={useHandleChangeLevelSystem}
          route="level-setup"
        />
        <StatusCardBox
          heading="Social Notification"
          value={notification}
          handleChange={useHandleChangeNotificationSetup}
          route="notification"
        />
        <StatusCardBox
          heading="Image Channel "
          value={image}
          handleChange={useHandleChangeImageStatus}
          route="Channel-content"
        />
        <StatusCardBox
          heading="Link Channel"
          value={Link}
          handleChange={useHandleChangeLinkStatus}
          route="Channel-content"
        />
      </div>
    </div>
  );
}

export default Settings_general;
