import { useContext } from 'react';
import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';
import { SelectedCategory } from '../contexts/selectedCategory';
import SearchBar from './searchBar';

function Games({ params }) {
  const { selectedCategory } = useContext(SelectedCategory);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const allGames = useFetchApi(gamesApiUrl, params);
  return (
    <div className="bodyContainer">
      <div className="bodyHeaderContainer">
        <div>
          <h2>{selectedCategory} games</h2>
        </div>
        <SearchBar />
      </div>
      <ul className="gamesContainer">
        {allGames.map((game, index) => (
          <div className="gameContainer" key={index}>
            <Game game={game} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Games;
