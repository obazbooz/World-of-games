import { useContext } from 'react';
import Game from './Game';
import useFetchApi from '../../customHooks/useFetchApi';
import { SelectedCategory } from '../../contexts/selectedCategory';
import SearchBar from './SearchBar';
import CategoryTitle from './CategoryTitle';
import { LoadingContext } from '../../contexts/isLoading';

function Games({ params }) {
  const { selectedCategory } = useContext(SelectedCategory);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const allGames = useFetchApi(gamesApiUrl, params);
  const { isLoading, isFail } = useContext(LoadingContext);
  return (
    <div className="gameContainer">
      <div className="gamesHeaderContainer">
        <CategoryTitle selectedCategory={selectedCategory} />
        <SearchBar />
      </div>

      {isLoading && !isFail ? (
        <div className="gamesBodyContainer">
          <img
            className="loadingImg"
            src="/isLoading.gif"
            alt="Loading icon is not available!"
          />
        </div>
      ) : (
        <ul className="gamesBodyContainer">
          {allGames.map((game, index) => (
            <div className="game" key={index}>
              <Game game={game} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Games;
