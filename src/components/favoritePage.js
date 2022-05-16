import React, { useContext } from 'react';
import { FavoriteGamesList } from '../contexts/favoriteGameList';
import useFetchApi from '../customHooks/useFetchApi';
import gamesFilterById from '../utilities/gamesFilterById';
import Header from './header';
import Game from './game';
import Footer from './footer';

function FavoriteGames() {
  const { favorite } = useContext(FavoriteGamesList);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const apiUrlParams = {};
  const allGames = useFetchApi(gamesApiUrl, apiUrlParams);
  const favoriteProductData = gamesFilterById(allGames, favorite);
  return (
    <div>
      <Header />
      {favorite.length === 0 ? (
        <div className="bodyContainer">
          <p>No games in the favorites list yet.</p>
        </div>
      ) : (
        <div className="bodyContainer">
          <ul>
            {favoriteProductData.map((game, index) => (
              <div key={index}>
                <Game game={game} />
              </div>
            ))}
          </ul>
        </div>
      )}
      <Footer />
    </div>
  );
}
export default FavoriteGames;
