import { useEffect, useState } from "react";
import { getRecipes } from "../API";
import { useSetRecoilState } from "recoil";
import { recipesState } from "src/state";

export function useFetchRecipes(pageIndex?: number): [boolean, string] {
  const setRecipes = useSetRecoilState(recipesState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      setIsLoading(true);
      const queryParam = new URLSearchParams();

      if (pageIndex) {
        queryParam.append("skip", `${(pageIndex - 1) * 6}`);
        queryParam.append("limit", `${6}`);
        queryParam.append("sort", "createdAt:-1");
      }

      try {
        const fetchedRecipes = await getRecipes(queryParam);
        if (!cancel) {
          if (pageIndex && pageIndex !== 1) {
            setRecipes((x) => [...x, ...fetchedRecipes]);
          } else {
            setRecipes(fetchedRecipes);
          }
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
