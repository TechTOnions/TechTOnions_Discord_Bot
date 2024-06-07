import {  useSearchParams } from "react-router-dom";
import { setLogin } from "../Hooks/Login-hook";
import { LandingNavbar } from "./Landing page/LandingNavbar";
import { Footer } from "./Landing page/Footer";
import { Herosection } from "./Landing page/Herosection";


function Login() {
  const code = useSearchParams()[0].get("code");
  if(code){
    setLogin({ code });
  }
  return (
      <div className="bg-black">
        <LandingNavbar/>
        <Herosection/>
        <Footer/>
      </div>
  );
}
export default Login;
