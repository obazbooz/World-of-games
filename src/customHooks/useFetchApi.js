import { useState, useEffect } from 'react';

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const fetchApi = await fetch(url);
        const fetchedData = await fetchApi.json();
        setData(fetchedData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [url]);

  return data;
};

export default useFetchApi;
