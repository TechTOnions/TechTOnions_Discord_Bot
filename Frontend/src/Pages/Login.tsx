import {  Outlet, useSearchParams } from "react-router-dom";
import { setLogin } from "../Hooks/Login-hook";
import { LandingNavbar } from "./Landing page/components/LandingNavbar";
import { Footer } from "./Landing page/components/Footer";
// import { Herosection } from "./Landing page/components/Herosection";


function Login() {
  const code = useSearchParams()[0].get("code");
  if(code){
    setLogin({ code });
  }
  return (
      <div className="bg-black">
        <LandingNavbar/>
        <Outlet/>
        <Footer/>
      </div>
  );
}
export default Login;
