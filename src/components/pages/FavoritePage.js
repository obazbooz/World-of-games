import React, { useContext } from 'react';
import { FavoriteGamesList } from '../../contexts/favoriteGameList';
import useFetchApi from '../../customHooks/useFetchApi';
import gamesFilterById from '../../utilities/gamesFilterById';
import Header from '../headers/Header';
import Game from '../games/Game';
import Footer from '../footers/Footer';
import { LoadingContext } from '../../contexts/isLoading';

function FavoriteGames() {
  const { favorite } = useContext(FavoriteGamesList);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const apiUrlParams = {};
  const allGames = useFetchApi(gamesApiUrl, apiUrlParams);
  const favoriteProductData = gamesFilterById(allGames, favorite);
  const { isLoading, isFail } = useContext(LoadingContext);
  return (
    <div>
      <Header />
      <div className="gameContainer">
        {favorite.length === 0 ? (
          <div>
            <p className="noResults">No games in the favorites list yet.</p>
          </div>
        ) : isLoading && !isFail ? (
          <div className="gamesBodyContainer">
            <img
              className="loadingImg"
              src="/isLoading.gif"
              alt="Loading icon is not available!"
            />
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
