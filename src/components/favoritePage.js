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
      <div className="gameContainer">
        {favorite.length === 0 ? (
          <div>
            <p id="noFavoriteItems">No games in the favorites list yet.</p>
          </div>
        ) : (
          <div>
            <ul className="gamesBodyContainer">
              {favoriteProductData.map((game, index) => (
                <div key={index}>
                  <Game game={game} />
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
export default FavoriteGames;
