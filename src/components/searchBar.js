import React, { useContext } from 'react';
import useFetchApi from '../customHooks/useFetchApi';
import { SearchTermGame } from '../contexts/searchTermGame';
import { FilteredGamesList } from '../contexts/filteredGames';
import { IsSearchedContext } from '../contexts/isSearchedHitted';

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(SearchTermGame);
  const { filteredGames, setFilteredGames } = useContext(FilteredGamesList);
  const { isSearched, setIsSearched } = useContext(IsSearchedContext);
  const params = {};
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/games';
  const allGames = useFetchApi(gamesApiUrl, params);
  const filteredGamesArray = allGames.filter((game) => {
    if (searchTerm === 'empty') {
      return 'empty';
    } else {
      if (game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return game;
      }
    }
  });
  return (
    <div className="searchFormContainer">
      <input
        type={'text'}
        placeholder={'Search for a game'}
        onKeyUp={(event) => {
          setSearchTerm(event.target.value);
          setFilteredGames(filteredGamesArray);
          setTimeout(() => {
            setIsSearched(true);
          }, 1500);
        }}
      />
    </div>
  );
}

export default SearchBar;
