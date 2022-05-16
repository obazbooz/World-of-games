import { useContext } from 'react';
import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';
import { SelectedCategory } from '../contexts/selectedCategory';
import SearchBar from './searchBar';
import CategoryTitle from './CategoryTitle';

function Games({ params }) {
  const { selectedCategory } = useContext(SelectedCategory);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const allGames = useFetchApi(gamesApiUrl, params);
  return (
    <div className="gameContainer">
      <div className="gamesHeaderContainer">
        <CategoryTitle selectedCategory={selectedCategory} />
        <SearchBar />
      </div>
      <ul className="gamesBodyContainer">
        {allGames.map((game, index) => (
          <div className="game" key={index}>
            <Game game={game} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Games;
