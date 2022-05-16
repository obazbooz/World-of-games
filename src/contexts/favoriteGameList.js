import React, { useState, createContext } from 'react';

export const FavoriteGamesList = createContext();

export const FavoriteGamesProvider = (props) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoriteGamesList.Provider value={{ favorite, setFavorite }}>
      {props.children}
    </FavoriteGamesList.Provider>
  );
};



