import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Homepage </h1>
      <div className="grid gap-3">
        <div>
          <Link to="/users">Users</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
