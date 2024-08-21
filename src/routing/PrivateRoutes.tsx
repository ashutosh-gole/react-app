import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();

  // useNavigate() hook not work due to side effect so we used <Navigate to="/login" /> component to redirect
  if (!user) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
