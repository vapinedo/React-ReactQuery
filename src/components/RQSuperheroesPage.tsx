import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const RQSuperheroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "super-heroes", 
    fetchSuperHeroes,
   {
    // cacheTime: 7000, by default is five second ( 50000 ms )
    staleTime: 3000
   } 
  );

  console.log({ isLoading, isFetching }); 

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <div className="alert alert-danger" role="alert">{error.message}</div>
  }

  return (
    <article>
      <h2>Super Heroes Page</h2>
      <ul>
        {data?.data.map((hero) => {
          return <li key={hero["id"]}>{hero["name"]}</li>
        })}
      </ul>
    </article>
  )
}

export default RQSuperheroesPage