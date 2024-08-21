import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

const UserPage = () => {
  const { user } = useAuth();

  // useNavigate() hook not work due to side effect so we used <Navigate to="/login" /> component to redirect
  if (!user) return <Navigate to="/login" />;

  return (
    <div className="row">
      <div className="col">
        <UserList />
      </div>
      <div className="col" id="mainOutlet">
        <Outlet />
      </div>
    </div>
  );
};

export default UserPage;
