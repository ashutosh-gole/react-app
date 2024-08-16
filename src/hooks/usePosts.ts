import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    page: number;
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    const fetchPosts = () => {
        const config = {
            params: {
                _start: (query.page - 1) * query.pageSize,
                _limit: query.pageSize
            }
        };

        return axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/posts", config)
            .then((res) => res.data);
    }

    // show old data using key => placeholderData => return the previous data if available
    return useQuery<Post[], Error>({
        queryKey: ["posts", query],
        queryFn: fetchPosts,
        staleTime: 1 * 60 * 1000,
        placeholderData: (prevQueryData) => {
            // return the previous data if available
            return prevQueryData || [];
        }
    });
}

export default usePosts;