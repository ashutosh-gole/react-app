import { useParams } from "react-router-dom";

const UserDetail = () => {
  // pathparams
  const params = useParams();
  console.log("params === ", params);

  return <div>User: {params?.id} </div>;
};

export default UserDetail;
