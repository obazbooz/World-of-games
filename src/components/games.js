import { useContext } from 'react';
import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';
import { SelectedCategory } from '../contexts/selectedCategory';

function Games({ params }) {
  const { selectedCategory } = useContext(SelectedCategory);
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  // const apiUrlParams = {};
  const allGames = useFetchApi(gamesApiUrl, params);
  return (
    <div className="bodyContainer">
      <div className="bodyHeaderContainer">
        <div>
          <h1>{selectedCategory} games</h1>
        </div>
        <div>
          <input />
        </div>
      </div>
      <ul className="gamesContainer">
        {allGames.map((game, index) => (
          <div key={index}>
            <Game game={game} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Games;
