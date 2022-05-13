import React, { useContext } from 'react';
import { FavoriteGamesList } from '../contexts/favoriteGameList';
import useFetchApi from '../customHooks/useFetchApi';
import gamesFilterById from '../utilities/gamesFilterById';
import Game from './game';
import NavigationBar from './navigationBar';

function FavoriteGames() {
  const { favorite } = useContext(FavoriteGamesList);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const apiUrlParams = {};
  const allGames = useFetchApi(gamesApiUrl, apiUrlParams);
  const favoriteProductData = gamesFilterById(allGames, favorite);
  return (
    <div>
      <div className="navContainer">
        <NavigationBar />
      </div>
      {favorite.length === 0 ? (
        <p>No games in the favorites list yet.</p>
      ) : (
        <ul>
          {favoriteProductData.map((game, index) => (
            <div key={index}>
              <Game game={game} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
export default FavoriteGames;
