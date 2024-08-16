import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
} 

interface PostQuery {
    pageSize: number;
}

const usePosts = (query: PostQuery) => {
    const fetchPosts = ({ pageParam }: { pageParam: any }) => {
        const config = {
            params: {
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize,
            },
        };

        return axios
            .get<Post[]>("https://jsonplaceholder.typicode.com/posts", config)
            .then((res) => res.data);
    };

    return useInfiniteQuery<Post[], Error>({
        queryKey: ["posts", query.pageSize],
        queryFn: fetchPosts,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // return the next page number, or undefined to indicate the end
            if (lastPage.length < query.pageSize) return undefined;
            return allPages.length + 1;
        },
        staleTime: 5 * 60 * 1000, // 5m
    });
}

export default usePosts;
