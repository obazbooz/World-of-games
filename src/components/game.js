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
    <li className="gameItem">
      <div>
        <Link to={`/games/${id}`}>
          <img
            id="gamePoster"
            src={thumbnail}
            alt={'Product img is not available'}
          />
        </Link>
        <div className="titleLikeIconContainer">
          <Link to={`/games/${id}`}>
            <h4 id="gameTitle">{title}</h4>
          </Link>
          <img
            className="likeIcon"
            src={inFavorite(id) ? heartSolid : heartRegular}
            alt={`like icon not available!`}
            onClick={() => {
              updateFavoriteList(id);
            }}
          />
        </div>
        <div className="gameBriefData">
          <div className="gameReleaseYear">
            <span>{release_date}</span>
          </div>
          <div className="gamePublisher">
            <span>{publisher}</span>
          </div>
        </div>
        <div className="gameShortDesc">
          <p>{short_description}</p>
        </div>
      </div>
    </li>
  );
}

export default Game;
