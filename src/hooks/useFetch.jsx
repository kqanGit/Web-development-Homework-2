import { useEffect, useState } from "react";

export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    setLoading(true);
    fetcher()
      .then((res) => {
        if (mounted) {
          if (res?.data !== undefined && res?.pagination !== undefined) {
            setData(res.data);
            setPagination(res.pagination);
          } 
          else if (res?.data !== undefined) {
            setData(res.data);
            setPagination(null);
          }
          else {
            setData(res);
            setPagination(null);
          }
        }
      })
      .catch((err) => mounted && setError(err))
      .finally(() => mounted && setLoading(false));

    return () => (mounted = false);
  }, deps);

  return { data, pagination, loading, error };
}