import React, { useState, createContext } from 'react';

export const IsSearchedContext = createContext();

export const IsSearchedProvider = (props) => {
  const [isSearched, setIsSearched] = useState(false);
  return (
    <IsSearchedContext.Provider value={{ isSearched, setIsSearched }}>
      {props.children}
    </IsSearchedContext.Provider>
  );
};
