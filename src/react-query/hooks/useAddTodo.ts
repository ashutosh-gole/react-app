import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todo-service";

interface AddTodoContext {
    previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
    const queryClient = useQueryClient();

    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo) => todoService.post(todo),
        onMutate: (newTodo: Todo) => {
            const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
                newTodo,
                ...(todos || []),
            ]);

            // call onAdd function
            onAdd();

            return { previousTodos };
        },
        // savedTodo - response of server
        // newTodo - local object created (that we passed to server (payload))
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
                todos?.map((todo) => (todo.id === newTodo.id ? savedTodo : todo))
            );
        },
        onError: (error, newTodo, context) => {
            if (!context) return;

            queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
    });
}

export default useAddTodo;