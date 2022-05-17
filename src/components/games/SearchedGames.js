import React from 'react';
import Game from './Game';
import SearchBar from './SearchBar';

function SearchedGames({ filteredGames }) {
  return (
    <div className="gameContainer">
      <div className="gamesHeaderContainer">
        <div>
          <h2 className="selectedCategoryTitle">Search results</h2>
        </div>
        <SearchBar />
      </div>
      {filteredGames.length === 0 ? (
        <p className="noResults">
          No games found with the searched text try again!
        </p>
      ) : (
        <ul className="gamesBodyContainer">
          {filteredGames.map((game, index) => (
            <div className="game" key={index}>
              <Game game={game} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchedGames;
