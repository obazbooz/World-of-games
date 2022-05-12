import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';

function Games() {
  // const gamesApiUrl = 'https://www.freetogame.com/api/games';
  const gamesApiUrl = 'https://www.mmobomb.com/api1/games';
  const allGames = useFetchApi(gamesApiUrl);
  return (
    <div>
      {allGames.map((game) => <Game game={game} />)}
    </div>
  );
}

export default Games;
