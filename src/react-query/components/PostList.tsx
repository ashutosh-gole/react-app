import React from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

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

      {data?.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </React.Fragment>
      ))}

      <div className="my-3">
        <button
          className="btn btn-primary ms-2"
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "No more posts"}
        </button>
      </div>
    </>
  );
};

export default PostList;
