import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoList = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // if (error) return <p className="text-danger">{error.message}</p>;

  // if (isLoading)
  //   return (
  //     <div className="spinner-border" role="status">
  //       <span className="visually-hidden">Loading...</span>
  //     </div>
  //   );

  return (
    <>
      <h1>Todos:</h1>

      {error && <p className="text-danger">{error.message}</p>}

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
