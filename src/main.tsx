import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.module.scss'
const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer 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",
  }
});
// client
//   .query({
//     query: gql`
//       query {
//   repository(owner:"Islam-Parchiev" name:"electroVelo") {
//     name,
//     forks(first:1) {
//       edges {
//         node {
//           id
//         }
//       }
//     },
//     languages(first:3) {
//       edges {
//         node {
//           id,
//           name
//         }
//       }
//     }
// }
// }
//     `,
//   })
//   .then((result) => console.log(result));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>

      <App />
    </ApolloProvider>
  </React.StrictMode>,
)


// query {
// viewer {
// login
// avatarUrl
// }
// }

// query {
//   user(login:"Imangazaliev") {
//     repositories(first:3) {
//       pageInfo {
//         endCursor
//         startCursor
//       }
//     }
// }
// }
// query {
//   user(login:"Imangazaliev") {
//     repositories(first:10) {
//       nodes {
//         id,
//         name
//       }
//     }
// }
// }

// query {
//   repository(owner:"Islam-Parchiev" name:"electroVelo") {
//     name,
//     forks(first:1) {
//       edges {
//         node {
//           id
//         }
//       }
//     },
//     languages(first:3) {
//       edges {
//         node {
//           id,
//           name
//         }
//       }
//     }
// }
// }