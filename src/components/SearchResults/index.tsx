import { gql } from '@apollo/client';
import { TablePagination } from '@mui/material';
import Filters from '../Filters';
import SearchItem from '../SearchItem';
import styles from './styles.module.scss';
import Info from '../Info';
// import { IResponse } from '../../types';
import { useAppSelector, RootState, useAppDispatch } from '../../redux/store';
import { setPage, setRowsPerPage } from '../../redux/slices/paginationSlice';
// import { client } from '../../main';
// import { useRepos } from '../../useRepos';

// const GET_ONE_REPO = gql`
//    query GetOneRepo($owner:String!, $name:String!){
//     repository(owner:$owner name:$name) {
//       name,
//       stargazers {
//                totalCount
//              },
//       licenseInfo {
//             name
//             nickname
//           }
//       languages(first:3) {
//         edges {
//           node {
//             id,
//             name
//           }
//         }
//       }
//       primaryLanguage {
//                id,
//                name
//              }
//   }
//   }
//   `;
//   const getRepoByName = () => {
//     client.query({
//       query: GET_ONE_REPO,
//       variables: {
//         owner: owner.login,
//         name: name

//       },
//     })
//       .then(result => {
//         // Обработайте результаты запроса
//         console.log("res", result);
//       }).catch((e) => {
//         console.log(e);
//       })
//   }
// eslint-disable-next-line react-refresh/only-export-components
export const GET_REPOSITORIES =
    gql`
query GetRepos($query:String="TODO",$count:Int=8) {
       search(query:$query, type: REPOSITORY, first: $count) {
         repositoryCount
         nodes {
           ... on Repository {
             id
             name
             owner {
         id,
         login
      }
     updatedAt
             forkCount,
             primaryLanguage {
               id,
               name
             }
             stargazers {
               totalCount
             }
           }
         }
       }
     }
`;

const SearchResults = () => {

    const dispatch = useAppDispatch();
    const rowsPerPage = useAppSelector((state: RootState) => state.pagination.rowsPerPage);
    const page = useAppSelector((state: RootState) => state.pagination.page);

    // const [page, setPage] = useState(2);
    // const [rowsPerPage, setRowsPerPage] = useState(10);
    const repos = useAppSelector((state: RootState) => state.repositories.items);
    const loading = useAppSelector((state: RootState) => state.repositories.loading);
    const oneRepo = useAppSelector((state: RootState) => state.oneRepo.data);
    console.log('searchComp', repos);
    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setPage({ event, newPage }));
    };
    const handleChangeRowsPerPage = (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        event: any,
    ) => {
        dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
        dispatch(setPage({ event: event, newPage: 0 }));
    };
    return (
        <div className={styles.Main}>
            <div className={styles.Container}>

                <div className={styles.Header}>
                    <h1 className={styles.Title}>Результаты поиска</h1>

                </div>
                <div className={styles.Content}>
                    <div className={styles.Left}>
                        <div className={styles.Table}>
                            <Filters />
                            {loading ? "loading..." : <ul className={styles.SearchItems}>
                                {repos.length > 0 ? repos.map((item) => <SearchItem
                                    key={item.id}
                                    updatedAt={item.updatedAt}
                                    name={item.name}
                                    forkCount={item.forkCount}
                                    primaryLanguage={item.primaryLanguage}
                                    stargazers={item.stargazers}
                                    owner={item.owner} />) : 'None'}
                                {/* {loading ? "loading" : "None"} */}
                                {/* test */}
                            </ul>}
                        </div>
                        <TablePagination
                            component="div"
                            count={100}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                    {oneRepo !== null && oneRepo !== undefined ? <Info
                        __typename={oneRepo.__typename}
                        languages={oneRepo.languages}
                        licenseInfo={oneRepo.licenseInfo}
                        name={oneRepo.name}
                        primaryLanguage={oneRepo.primaryLanguage}
                        stargazers={oneRepo.stargazers}
                    /> : null}
                </div>
            </div>
        </div>
    )
}

export default SearchResults

// query {
//     search(query:"TODO", type: REPOSITORY, first: 10) {
//         repositoryCount
// pageInfo {
//   endCursor
//   startCursor
//   hasNextPage
//   hasPreviousPage

// }

//         nodes {
//             ... on Repository {
//                 id
//       updatedAt
//                 name
//       owner {
//         id,
//         login
//       }
//                 url
//       forkCount,
//       licenseInfo {
//         name
//         nickname
//       }
//       primaryLanguage {
//         id,
//         name
//       }
//       languages(first:3) {
//             nodes {
// name}
//       }
//                 stargazers {
//                     totalCount
//                 }
//                 defaultBranchRef {
//                     target {
//                         ... on Commit {
//                             committedDate
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }