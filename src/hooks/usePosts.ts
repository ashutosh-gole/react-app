import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const usePosts = (userId: number | undefined) => {
    const fetchPosts = () => {
        const config = {
            params: userId && !isNaN(userId) ? { userId } : {},
        };

        return axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/posts", config)
            .then((res) => res.data);
    }

    return useQuery<Post[], Error>({
        queryKey: userId ? ["users", userId, "posts"] : ["posts"],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000, // 1m
    });
}

export default usePosts;