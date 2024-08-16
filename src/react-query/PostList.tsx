import usePosts from "../hooks/usePosts";

const PostList = () => {
  const { data, error, isLoading } = usePosts();

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
    </>
  );
};

export default PostList;
