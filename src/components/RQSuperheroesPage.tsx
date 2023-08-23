import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const RQSuperheroesPage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h2>Loading...</h2>
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