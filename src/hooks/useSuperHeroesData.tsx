import axios from "axios"
import { useQuery } from "react-query"

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");

const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(
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
            onError,
            select: (data) => {
                const superHeroNames = data.data.map(hero => hero.name);
                return superHeroNames;
            }
        }
    );
}

export default useSuperHeroesData