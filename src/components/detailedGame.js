import React from 'react';
import useFetchApi from '../customHooks/useFetchApi';
import { useParams } from 'react-router-dom';
import NavigationBar from './navigationBar';

function DetailedGame() {
  const { id } = useParams();
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/game';
  const apiUrlParams = { id: `${id}` };
  const detailedGameDate = useFetchApi(gamesApiUrl, apiUrlParams);
  return (
    <div>
      <div className="headerNavContainer">
        <NavigationBar />
      </div>
      <h4>{detailedGameDate.title}</h4>
      <img
        src={detailedGameDate.thumbnail}
        alt={'Game poster is not available'}
      />
      <p>{detailedGameDate.short_description}</p>
      <p>{detailedGameDate.genre}</p>
      <p>{detailedGameDate.platform}</p>
      <p>{detailedGameDate.developer}</p>
      <p>{detailedGameDate.release_date}</p>=
      <p>{detailedGameDate.profile_url}</p>
    </div>
  );
}

export default DetailedGame;
