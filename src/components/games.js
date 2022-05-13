import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';

function Games() {
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const apiUrlParams = {};
  const allGames = useFetchApi(gamesApiUrl, apiUrlParams);
  return (
    <ul>
      {allGames.map((game, index) => (
        <div key={index}>
          <Game game={game} />
        </div>
      ))}
    </ul>
  );
}

export default Games;
