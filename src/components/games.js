import { useContext } from 'react';
import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';
import { SelectedCategory } from '../contexts/selectedCategory';

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
        <div className="searchFormContainer">
          <form>
            <input className="submit" type={'submit'} />
            <fieldset>
              <input className="search" type={'text'} />
            </fieldset>
          </form>
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
