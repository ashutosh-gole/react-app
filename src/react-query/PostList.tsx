import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      <h1>Posts:</h1>

      <select
        className="form-select mb-3"
        value={userId}
        onChange={(event) => setUserId(parseInt(event.target.value))}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul className="list-group">
        {data?.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
