import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routing/route.tsx";

// global custom query settings or we can direct specify in custom query hook
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       staleTime: 10 * 1000, // 10s
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// });

// or
// without query settings
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
