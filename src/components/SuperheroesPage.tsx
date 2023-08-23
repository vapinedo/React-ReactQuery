import axios from "axios"
import { useEffect, useState } from "react"

const SuperheroesPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes")
      .then((response) => {
        setData(response.data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <article>
      <h2>Super Heroes Page</h2>
      <ul>
        {data.map((hero) => {
          return <li key={hero["id"]}>{hero["name"]}</li>
        })}
      </ul>
    </article>
  )
}

export default SuperheroesPage