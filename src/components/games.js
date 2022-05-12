import Game from './game';
import useFetchApi from '../customHooks/useFetchApi';

function Games() {
  // const gamesApiUrl = 'https://www.freetogame.com/api/games';
  // const gamesApiUrl = 'https://www.mmobomb.com/api1/games';
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const allGames = useFetchApi(gamesApiUrl);
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
