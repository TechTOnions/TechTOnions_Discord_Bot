import Card from "./Card";
import MessageIcon from "../Resources/images/ChatIcon.png";

function CardBox(): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-2">
        <Card
          heading={"Custom Messages"}
          img={MessageIcon}
          description={"Create Custom Messages to be sent to your customers."}
          buttonDesc={"Create Message"}
          route="/welcome-message"  
        
        />
        <Card
          heading={"Leave Message"}
          img={MessageIcon}
          description={"Leave a Custome Message when User left the Server"}
          buttonDesc={"Leave Message"}
          route="/leave-message"  
        />
        <Card
          heading={"Level"}
          img={MessageIcon}
          description={"Level up the Users based on their Activity and Give Rewards"}
          buttonDesc={"Setup Level"}
          route="/level-setup"  
        />
        <Card
          heading={"Social Notification"}
          img={MessageIcon}
          description={"Notifiy the Users on Post and Updates from your Socials like Youtube"}
          buttonDesc={"Set Notification"}
          route="/notification"  
        />
        <Card
          heading={"Prefix"}
          img={MessageIcon}
          description={"Implement how you execute commands"}
          buttonDesc={"Add prefix"}
          route="/commands"  
        />
        <Card
          heading={"AI Moderation"}
          img={MessageIcon}
          description={"User AI to assist you in Moderating your Server"}
          buttonDesc={"Configure AI"}
          route="/automoderation"  
        />
    </div>
  );
}

export default CardBox;
