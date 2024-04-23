import { useSearchParams } from "react-router-dom";
import { Button } from "../Components/Button";
import { setLogin } from "../Hooks/Login-hook";

function Login() {
  const code = useSearchParams()[0].get("code");
  if (code) {
    setLogin({ code });
  }
  return (
    <div>
      <div className="h-screen font-sans ">
        <nav className="p-4 bg-navColor">
          <div className="container flex items-center justify-between mx-auto">
            <h1 className="text-xl font-bold text-white">TechTOnions Bot</h1>
            <ul className="flex space-x-4">
              <Button
                text={"Login"}
                route={import.meta.env.VITE_DISCORD_AUTH}
              />
            </ul>
          </div>
        </nav>
        <header className="container py-8 mx-auto text-center bg-mainColor">
          <h2 className="text-4xl font-bold text-cyan-300 ">
            Welcome to TechTOnions Bot
          </h2>
          <p className="mt-4 text-lg text-white">
            The ultimate Discord bot for Messaging,Notifications, leveling, and
            more.
          </p>
          <div className="flex justify-center mx-auto mt-8 font-semibold text-white w-36">
            <Button
              text={"Add to Server"}
              route={import.meta.env.VITE_DISCORD_AUTH}
            />
          </div>
        </header>
        <section className="container px-16 py-12 mx-auto bg-mainColor">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Cards */}
            <div className="p-6 rounded-lg shadow-md bg-cardBox">
              <h3 className="mb-4 text-2xl font-semibold text-cyan-500">
                Welcome Messages
              </h3>
              <p className="text-white">
                Extend a warm and personalized greeting to new members when they
                join the server.Take the opportunity to introduce them to the
                server's rules, topics of discussion, and any ongoing events or
                activities. This way, you know that everyone has a positive and
                inclusive experience from the moment they join.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-cardBox">
              <h3 className="mb-4 text-xl font-semibold text-cyan-500">
                Leveling
              </h3>
              <p className="text-white ">
                Elevate your server's activity by implementing our text-based
                leveling system, designed to track and reward your most active
                members. That’s right, it’s like you’re adding a game to the
                Discord chat application. you can configure exclusive access to
                channels and roles, offering special privileges to those who
                consistently engage in conversations. By incentivizing your
                members to chat more, you will foster a more lively server
                community.
              </p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-cardBox">
              <h3 className="mb-4 text-xl font-semibold text-cyan-500">
                Customizable
              </h3>
              <p className="text-white">
                Empower your server with custom commands designed to automate
                tasks, streamline role management, and deliver predefined
                messages.With TechTOnions, you have the power to create
                personalized commands that align with your server's unique
                needs. Enhance user experience, save time, and unlock the full
                potential of your server by harnessing the customizable command
                system offered by TechTOnions.
              </p>
            </div>
          </div>
        </section>
        <footer className="py-12 text-white bg-navColor">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 TechTOnions Bot. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Login;
