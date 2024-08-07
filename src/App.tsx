/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, gql } from '@apollo/client';
const GET_LOCATIONS = gql`
 query {
  repository(owner:"Islam-Parchiev" name:"electroVelo") {
    name,
    forks(first:1) {
      edges {
        node {
          id
        }
      }
    },
    languages(first:3) {
      edges {
        node {
          id,
          name
        }
      }
    }
}
}
`;
// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return data.locations.map(({ id, name, description, photo }: any) => (
//     <div key={id}>
//       <h3>{name || "Test"}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }
export default function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data);
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br />
      {/* <DisplayLocations /> */}
      testtttt
    </div>
  );
}