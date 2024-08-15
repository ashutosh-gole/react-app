import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      });
  }, []);

  return (
    <>
      <h1>Todos:</h1>

      {error && <p className="text-danger">{error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
