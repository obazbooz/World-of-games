import React, { useContext } from 'react';
import Header from '../headers/Header';
import Games from '../games/Games';
import Footer from '../footers/Footer';
import ScrollToUP from '../games/ScrollToTop';
import { SelectedCategory } from '../../contexts/selectedCategory';
import { FilteredGamesList } from '../../contexts/filteredGames';
import { IsSearchedContext } from '../../contexts/isSearchedHitted';
import SearchedGames from '../games/SearchedGames';

function HomePage() {
  const { filteredGames } = useContext(FilteredGamesList);
  const { isSearched } = useContext(IsSearchedContext);
  const allGamesApiParams = {};
  const socialGamesApiParams = { category: 'Social' };
  const cardGamesApiParams = { category: 'card' };
  const shootingGamesApiParams = { category: 'shooter' };
  const fightingGamesApiParams = { category: 'fighting' };
  const strategyGamesApiParams = { category: 'strategy' };
  const racingGamesApiParams = { category: 'racing' };
  const sportGamesApiParams = { category: 'sports' };
  const fantasyGamesApiParams = { category: 'fantasy' };
  const actionGamesApiParams = { category: 'action' };
  const pcGamesApiParams = { platform: 'pc' };
  const browserGamesApiParams = { platform: 'browser' };
  const { selectedCategory } = useContext(SelectedCategory);

  return (
    <div>
      <Header />
      {!isSearched ? (
        {
          All: <Games params={allGamesApiParams} />,
          Social: <Games params={socialGamesApiParams} />,
          Card: <Games params={cardGamesApiParams} />,
          Shooter: <Games params={shootingGamesApiParams} />,
          Fighting: <Games params={fightingGamesApiParams} />,
          Strategy: <Games params={strategyGamesApiParams} />,
          Racing: <Games params={racingGamesApiParams} />,
          Sports: <Games params={sportGamesApiParams} />,
          Fantasy: <Games params={fantasyGamesApiParams} />,
          Action: <Games params={actionGamesApiParams} />,
          PC: <Games params={pcGamesApiParams} />,
          Browser: <Games params={browserGamesApiParams} />,
        }[selectedCategory]
      ) : (
        <SearchedGames filteredGames={filteredGames} />
      )}
      <Footer />
      <ScrollToUP />
    </div>
  );
}

export default HomePage;
