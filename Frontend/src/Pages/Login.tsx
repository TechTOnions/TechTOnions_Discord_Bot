import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useSetLogin } from "../Hooks/Login-hook";
import { LandingNavbar } from "./Landing page/components/LandingNavbar";
import { Footer } from "./Landing page/components/Footer";
import { useWindowSize } from "../Hooks/window-size";
import { DimensionIssue } from "../Components/DimensionIssue";
// import { Herosection } from "./Landing page/components/Herosection";

function Login() {
  const code = useSearchParams()[0].get("code");
  if (code) {
    useSetLogin({ code });
  }
  const dimension = useWindowSize();
  const { pathname } = useLocation();
  return (
    <>
      {dimension.width > 1000 ? (
        <div className="bg-black">
          <LandingNavbar />
          {pathname == "/login" ? (
            <Navigate to={"home"} />
          ) : (
            <Navigate to={"home"} />
          )}
          <Outlet />
          <Footer />
        </div>
      ) : (
        <DimensionIssue />
      )}
    </>
  );
}
export default Login;
