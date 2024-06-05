import {  useSearchParams } from "react-router-dom";
import { setLogin } from "../Hooks/Login-hook";
import { LandingNavbar } from "./Landing page/LandingNavbar";
import { Footer } from "./Landing page/Footer";


function Login() {
  const code = useSearchParams()[0].get("code");
  if(code){
    setLogin({ code });
  }
  return (
      <div className="flex flex-col justify-between w-screen overflow-y-auto font-sans">
        <LandingNavbar/>
        <br />
        <Footer/>
      </div>
  );
}
export default Login;
