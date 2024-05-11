import { useEffect, useState } from "react";

export function useFetchData(url, pageIndex) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancel = false;

    async function fetchData() {
      setIsLoading(true);
      const queryParam = new URLSearchParams();

      if (pageIndex) {
        queryParam.append("skip", (pageIndex - 1) * 18);
        queryParam.append("limit", 18);
        queryParam.append("sort", "createdAt:-1");
      }

      try {
        const response = await fetch(url + `?${queryParam}`);

        if (response.ok && !cancel) {
          const newData = await response.json();

          setData((x) => {
            return Array.isArray(newData)
              ? [...x, ...newData]
              : [...x, newData];
          });
        } else {
          console.log("Error, or cancel ===", cancel);
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
  }, [url, pageIndex]);

  return [[data, setData], isLoading, error];
}
