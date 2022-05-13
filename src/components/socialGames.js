import React, { useContext } from 'react';
import { FavoriteGamesList } from '../contexts/favoriteGameList';
import useFetchApi from '../customHooks/useFetchApi';
import gamesFilterById from '../utilities/gamesFilterById';
import Game from './game';
import NavigationBar from './navigationBar';

function SocialGames() {
  const { favorite } = useContext(FavoriteGamesList);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const apiUrlParams = { category: 'Social' };
  const allGames = useFetchApi(gamesApiUrl, apiUrlParams);
  return (
    <div>
      <div className="headerNavContainer">
        <NavigationBar />
      </div>
      <ul>
        {allGames.map((game, index) => (
          <div key={index}>
            <Game game={game} />
          </div>
        ))}
      </ul>
    </div>
  );
}
export default SocialGames;
