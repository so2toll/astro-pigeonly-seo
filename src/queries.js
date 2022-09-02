// import { gql, useQuery } from '@apollo/client';

// console.log(2324234);
// console.log('hey sthervffve');

// export const BLOG = gql`
//   query {
//     movies {
//       title
//       released
//       tagline
//     }
//   }
// `;

// export function Hello() {
//   const { loading, error, data } = useQuery(BLOG);
//   if (loading) return <p>Loading ...</p>;
//   if (error) return <p>Loading ...</p>;
//   console.log(data);
//   console.log(3331313121212);
//   return data.movies.map((movie) => (
//     <Hello key={movie.title} released={movie.released} />
//   ));
// }

// export default Hello;
// Hello();
// export const USER = gql`
//   query user($id: ID) {
//     users(where: { id: $id }) {
//       email
//     }
//   }
// `;

// function Sapp() {
//   // const { data, loading, error } = useQuery(BLOG);

//   // if (loading) return <div>Loading</div>;
//   // if (error) return <div>error</div>;
//   console.log(' sdsdsd data');

//   return (
//     <div>
//       <br />

//       {/*
//       {data.movies.map((title: any) => (
//         <div>{JSON.stringify(title)}</div>
//       ))} */}

//       <br />
//     </div>
//   );
// }
// Sapp();
// export { Sapp };

// type BLOG = {
//   id: string;
//   email: string;
// };

// console.log(useQuery(BLOG));
