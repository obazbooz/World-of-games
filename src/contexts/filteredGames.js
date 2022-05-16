import React, { useState, createContext } from 'react';

export const FilteredGamesList = createContext();

export const FilteredGamesProvider = (props) => {
  const [filteredGames, setFilteredGames] = useState('empty');
  return (
    <FilteredGamesList.Provider value={{ filteredGames, setFilteredGames }}>
      {props.children}
    </FilteredGamesList.Provider>
  );
};
