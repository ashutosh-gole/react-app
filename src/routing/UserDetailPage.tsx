import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  // pathparams
  const params = useParams();
  console.log("params === ", params);

  // queryparams
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams === ", searchParams);
  console.log("searchParams name=== ", searchParams.get("name"));
  console.log("searchParams age=== ", searchParams.get("age"));
  console.log("searchParams if not found=== ", searchParams.get("test"));

  // location info
  const location = useLocation();
  console.log("location === ", location);

  return (
    <>
      <div>params id: {params["id"]}</div>

      <div>searchParams name: {searchParams.get("name")}</div>

      <div>location: {JSON.stringify(location)}</div>
    </>
  );
};

export default UserDetailPage;
