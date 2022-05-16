import React from 'react';
import PosterSlider from './PosterSlider';

function DetailedGame({ detailedGameDate }) {
  return (
    <div className="gameContainer">
      <PosterSlider screenshots={detailedGameDate.screenshots} />;
      <p>{detailedGameDate.description}</p>
      <p>{detailedGameDate.genre}</p>
      <p>{detailedGameDate.platform}</p>
      <p>{detailedGameDate.developer}</p>
      <p>{detailedGameDate.publisher}</p>
      <p>{detailedGameDate.release_date}</p>
      <p>{detailedGameDate.game_url}</p>
      {/* <h4>minimum system requirements</h4>
      <p>{os}</p>
      <p>{processor}</p>
      <p>{memory}</p>
      <p>{graphics}</p>
      <p>{storage}</p> */}
    </div>
  );
}

export default DetailedGame;
