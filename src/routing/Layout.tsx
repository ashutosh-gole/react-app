import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="mainOutlet">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
