import React from 'react';
import PosterSlider from './PosterSlider';

function DetailedGame({ detailedGameDate }) {
  return (
    <div className="gameContainer">
      <h1>{detailedGameDate.title}</h1>
      <div className="posterSliderContainer">
        <PosterSlider detailedGameDate={detailedGameDate} />
      </div>
      <div className="gameDetailsContainer">
        <div className="gameDetailsInfo">
          <h3>Games information</h3>
          <p>
            Game platform: <span>{detailedGameDate.platform}</span>
          </p>
          <p>
            Game developer: <span>{detailedGameDate.developer}</span>
          </p>
          <p>
            Game publisher: <span>{detailedGameDate.publisher}</span>
          </p>
          <p>
            Game release date: <span>{detailedGameDate.release_date}</span>
          </p>
          <p>
            Game description: <span> {detailedGameDate.short_description}</span>
          </p>
          <p>
            <span>
              <a href={detailedGameDate.game_url}> Download link</a>
            </span>
          </p>
        </div>
        <div className="gameDetailsSysReq">
          <h3>Minimum system requirements</h3>
          {detailedGameDate.screenshots !== undefined ? (
            <div>
              <p>{detailedGameDate.minimum_system_requirements.os}</p>
              <p>{detailedGameDate.minimum_system_requirements.processor}</p>
              <p>{detailedGameDate.minimum_system_requirements.memory}</p>
              <p>{detailedGameDate.minimum_system_requirements.graphics}</p>
              <p>{detailedGameDate.minimum_system_requirements.storage}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailedGame;
