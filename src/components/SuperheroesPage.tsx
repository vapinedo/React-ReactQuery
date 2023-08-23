import axios from "axios"
import { useEffect, useState } from "react"

const SuperheroesPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes")
      .then((response) => {
        setData(response.data);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div className="alert alert-primary" role="alert">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger" role="alert">{error}</div>;
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