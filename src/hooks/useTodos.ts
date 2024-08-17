import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";

export interface Todo {
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
        queryKey: CACHE_KEY_TODOS,
        queryFn: fetchTodos,
        staleTime: 10 * 1000, // 10s
        refetchOnWindowFocus: false
    });
}

export default useTodos;