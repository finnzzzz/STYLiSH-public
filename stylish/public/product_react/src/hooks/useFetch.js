import { useState, useEffect } from "react";

function useFetch(fetchData) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchData
      .then(data => {
        setData(data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [fetchData]);
  return { data, loading, error };
}

export default useFetch;
