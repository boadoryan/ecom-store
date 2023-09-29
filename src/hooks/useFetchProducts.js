import { useEffect, useState } from "react";
import axios from "axios";

const useFetchProducts = (url, exchangeRate) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err); // Capture and set the error
        setLoading(false);
      }
    };
    fetchData();
  }, [url, exchangeRate]);

  return { data, loading, error };
};

export { useFetchProducts };
