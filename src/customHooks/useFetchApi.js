import { useState, useEffect, useContext } from 'react';
import { LoadingContext } from '../contexts/isLoading';

const useFetchApi = (url, apiUrlParams) => {
  const [data, setData] = useState([]);
  const { setIsLoading, setIsFail } = useContext(LoadingContext);
  const requestedApiEndpoint = url + '?' + new URLSearchParams(apiUrlParams);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const fetchApi = await fetch(requestedApiEndpoint, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
            'X-RapidAPI-Key':
              '20f41182f0msh2bf1b2b47f6594ep1f1514jsn31732cb2a91b',
          },
        });
        const fetchedData = await fetchApi.json();
        setData(fetchedData);
        setIsLoading(false);
        setIsFail(false);
      } catch (error) {
        setIsFail(true);
        console.log(error);
      }
    })();
  }, [requestedApiEndpoint, setIsFail, setIsLoading]);

  return data;
};

export default useFetchApi;
