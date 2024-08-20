import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, login, logout } = useAuthStore();

  return (
    <>
      {user ? (
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a onClick={() => login("Ashutosh G")} href="#">
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default LoginStatus;
