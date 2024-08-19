import useAuth from "./useAuth";

const LoginStatus = () => {
  const { user, dispatch } = useAuth();

  return (
    <>
      {user ? (
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a
            onClick={() => dispatch({ type: "LOGIN", username: "Ashutosh G" })}
            href="#"
          >
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default LoginStatus;
