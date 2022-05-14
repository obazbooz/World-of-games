import React, { useContext } from 'react';
import Header from './header';
import Games from './games';
import Footer from './footer';
import { SelectedCategory } from '../contexts/selectedCategory';

function HomePage() {
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
  console.log(selectedCategory);
  return (
    <div>
      <Header />
      {
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
      }
      <Footer />
    </div>
  );
}

export default HomePage;
