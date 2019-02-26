import { useState, useEffect } from "react";

const delay = time => new Promise(resolve => setTimeout(resolve, time));

const useFetch = url => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  async function fetchUrl() {
    setLoading(true);
    await delay(500);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
