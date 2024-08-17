import APIClient from "./api-client";

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

export default new APIClient<Todo>("/todos");
