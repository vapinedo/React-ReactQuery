import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const RQSuperheroesPage = () => {

  const onSuccess = (data) => {
    console.log("Doing side effect when network request gets data", data);
  };

  const onError = (error) => {
    console.log("Doing side effect when network rquest gets error", error);
  };
   
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heroes", 
    fetchSuperHeroes,
   {
    // cacheTime: 7000, by default is five second ( 50000 ms )
    // staleTime: 3000,
    // refetchOnMount: true ,
    // refetchOnWindowFocus: true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    // enabled: false // this prevent to trigger the network request whe component mounting
    onSuccess,
    onError
   }
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <div className="alert alert-danger" role="alert">{error.message}</div>
  }

  return (
    <article>
      <h2>Super Heroes Page</h2>
      <button onClick={refetch} className="btn btn-primary my-3">Fetch Heroes</button>
      <ul>
        {data?.data.map((hero) => {
          return <li key={hero["id"]}>{hero["name"]}</li>
        })}
      </ul>
    </article>
  )
}

export default RQSuperheroesPage