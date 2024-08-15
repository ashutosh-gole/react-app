import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading)
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      <h1>Todos:</h1>

      <ul className="list-group">
        {todos?.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
