import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes1");

const RQSuperheroesPage = () => {
  const { isLoading, data, isError, error } = useQuery("super-heroes", fetchSuperHeroes);

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