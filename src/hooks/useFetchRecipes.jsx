import { useEffect, useState } from "react";
import { getRecipes } from "../API";
import { useSetRecoilState } from "recoil";
import { recipesState } from "src/state";

export function useFetchRecipes(pageIndex) {
  const setRecipes = useSetRecoilState(recipesState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      setIsLoading(true);
      const queryParam = new URLSearchParams();

      if (pageIndex) {
        queryParam.append("skip", (pageIndex - 1) * 6);
        queryParam.append("limit", 6);
        queryParam.append("sort", "createdAt:-1");
      }

      console.log(queryParam);

      try {
        const fetchedRecipes = await getRecipes(queryParam);
        if (!cancel) {
          setRecipes((x) => [...x, ...fetchedRecipes]);
        }
      } catch (e) {
        console.log(e);
        setError("Erreur");
      } finally {
        if (!cancel) setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      cancel = true;
    };
  }, [pageIndex, setRecipes]);

  return [isLoading, error];
}
