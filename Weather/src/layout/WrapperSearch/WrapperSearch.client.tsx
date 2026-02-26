"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchForm from "@components/SearchForm/SearchForm.server";

interface PropsWrapperSearch {
  display: string;
}

const queryClient = new QueryClient();

export default function WrapperSearch(props: PropsWrapperSearch) {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm display={props.display} />
    </QueryClientProvider>
  );
}
