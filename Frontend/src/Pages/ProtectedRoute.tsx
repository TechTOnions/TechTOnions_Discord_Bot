
import { Outlet } from "react-router-dom";
import Login from "./Login";
function ProtectedRoute() {
  console.log("Main Route")
  const code : string | null = window.localStorage.getItem("code");
  return <div>{ code ? <Outlet/> : <Login/>}</div>;
}

export default ProtectedRoute;
