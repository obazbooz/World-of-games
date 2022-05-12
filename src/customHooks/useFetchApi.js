import { useState, useEffect } from 'react';

const useFetchApi = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const fetchApi = await fetch(url, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            'X-RapidAPI-Key':
              '20f41182f0msh2bf1b2b47f6594ep1f1514jsn31732cb2a91b',
          },
        });
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
