import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState<number>(1);
  const { data, error, isLoading } = usePosts({ page, pageSize });

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

      <ul className="list-group">
        {data?.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>

      <div className="my-3">
        <button
          className="btn btn-primary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <button className="btn btn-primary ms-2" onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
