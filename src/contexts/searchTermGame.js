import React, { useState, createContext } from 'react';
export const SearchTermGame = createContext();
export const SearchTermGameProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchTermGame.Provider value={{ searchTerm, setSearchTerm }}>
      {props.children}
    </SearchTermGame.Provider>
  );
};
