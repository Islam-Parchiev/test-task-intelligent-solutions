/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useQuery, gql } from '@apollo/client';
import Header from './components/Header';
import Main from './components/Main';
// import { IResponse } from './types';
// const GET_TEST = gql`
//  query {
// 		search(query:"TODO", type: REPOSITORY, first: 1) {
// 			repositoryCount
// 			nodes {
// 				... on Repository {
// 					id
// 					name
// 					url
// 					stargazers {
// 						totalCount
// 					}
// 					defaultBranchRef {
// 						target {
// 							... on Commit {
// 								committedDate
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}
// `;
export default function App() {
	// const { loading, error, data } = useQuery<IResponse>(GET_TEST);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error : {error.message}</p>;
	// console.log(data);
	return (
		<div>
			<Header />
			<Main />

		</div>
	);
}
