import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
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
  }, [url]);

  return { data, loading, error }; // Removed "products" if it's not used
};

export { useFetch };
