import useSuperHeroesData from "../hooks/useSuperHeroesData";

const RQSuperheroesPage = () => {

  const onSuccess = (data) => {
    console.log("Doing side effect when network request gets data", data);
  };

  const onError = (error) => {
    console.log("Doing side effect when network rquest gets error", error);
  };

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);

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
        {/* {data?.data.map((hero) => {
          return <li key={hero["id"]}>{hero["name"]}</li>
        })} */}
        {
          data.map(heroName => <li key={heroName}>{heroName}</li>)
        }
      </ul>
    </article>
  )
}

export default RQSuperheroesPage