import React, { useContext } from 'react';
import { FavoriteGamesList } from '../contexts/favoriteGameList';
import { Link } from 'react-router-dom';
import heartRegular from '../icons/heartRegular.svg';
import heartSolid from '../icons/heartSolid.svg';

function Game({
  game: { id, title, thumbnail, short_description, release_date, publisher },
}) {
  const { favorite, setFavorite } = useContext(FavoriteGamesList);

  const updateFavoriteList = (gameId) => {
    const isGameInFavoriteList = favorite.includes(gameId);
    if (!isGameInFavoriteList) {
      setFavorite(() => {
        return [...favorite, gameId];
      });
    } else {
      const filteredFavoriteArray = favorite.filter(
        (favoriteGame) => favoriteGame !== gameId,
      );
      setFavorite(filteredFavoriteArray);
    }
  };

  const inFavorite = (gameId) => {
    const gameInFavorite = favorite.includes(gameId);
    return gameInFavorite;
  };

  return (
    <li className="gameListItemContainer">
      <div className="gameDetails">
        <img
          className="likeIcon"
          src={inFavorite(id) ? heartSolid : heartRegular}
          alt={`like icon not available!`}
          onClick={() => {
            updateFavoriteList(id);
          }}
        />
        <div>
          <Link to={`/games/${id}`}>
            <h4>{title}</h4>
            <img src={thumbnail} alt={'Product img is not available'} />
          </Link>
          <div className="gameData">
            <div className="gameYear">
              <span>{release_date}</span>
            </div>
            <div className="gameCategories">
              <span>{publisher}</span>
            </div>
          </div>
          <div className="gameDesc">
            <p>{short_description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Game;
