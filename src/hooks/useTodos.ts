import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

const useTodos = () => {
    const fetchTodos = () =>
        axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.data);

    // local custom query settings
    return useQuery<Todo[], Error>({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        staleTime: 10 * 1000, // 10s
        refetchOnWindowFocus: false
    });
}

export default useTodos;