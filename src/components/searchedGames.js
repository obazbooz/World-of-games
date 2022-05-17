import React from 'react';
import Game from './game';
import SearchBar from './searchBar';

function SearchedGames({ filteredGames }) {
  return (
    <div className="bodyContainer">
      <div className="bodyHeaderContainer">
        <div>
          <h2>Search results</h2>
        </div>
        <SearchBar />
      </div>
      {filteredGames.length === 0 ? (
        <p>No games found with the searched text try again!</p>
      ) : (
        <ul className="gamesContainer">
          {filteredGames.map((game, index) => (
            <div className="gameContainer" key={index}>
              <Game game={game} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchedGames;
