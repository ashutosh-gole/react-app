import { useState } from "react";

const LoginStatus = () => {
  const [user, setUser] = useState("");

  return (
    <>
      {user ? (
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => setUser("")} href="#">
            Logout
          </a>
        </div>
      ) : (
        <div>
          <a onClick={() => setUser("Ashutosh G")} href="#">
            Login
          </a>
        </div>
      )}
    </>
  );
};

export default LoginStatus;
