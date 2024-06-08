
import { Navigate, Outlet} from "react-router-dom";

function ProtectedRoute() {
  const code : string | null = window.localStorage.getItem("code");
  return <div>{ code ? <Outlet/> : <Navigate to={'/login'}/>}</div>;
}

export default ProtectedRoute;
