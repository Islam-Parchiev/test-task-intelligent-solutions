// import { useState } from "react";
import { GET_REPOSITORIES } from "./components/SearchResults";
// import { client } from "./main";
// import { RootState, useAppSelector } from "./redux/store";
import { TSearchItem } from "./types";
import { ApolloError, useQuery } from "@apollo/client";


export const useRepos = ({ count = 8, value = "" }: { count: number; value: string; }): { data: { search: { nodes: TSearchItem[] } }; error: ApolloError | undefined; loading: boolean } => {
    // const searchValue = useAppSelector(
    //     (state: RootState) => state.search.value
    // )
    // const [repos, setRepos] = useState<TSearchItem[]>([]);
    // const [loading, setLoading] = useState(true);
    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        variables: {
            query: value,
            count: count

        }
    });
    // console.log(data);
    return { data, error, loading }
}