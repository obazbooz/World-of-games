import React from 'react';
import PosterSlider from '../sliders/PosterSlider';

function DetailedGame({ detailedGameDate }) {
  return (
    <div className="gameContainer">
      <h1>{detailedGameDate.title}</h1>
      <div className="posterSliderContainer">
        <PosterSlider detailedGameDate={detailedGameDate} />
      </div>
      <div className="gameDetailsContainer">
        <div className="gameDetailsInfo">
          <h2 className="infoHeader">Games information</h2>
          <p className="infoTitle">
            Game platform:
            <span className="information">{detailedGameDate.platform}</span>
          </p>
          <p className="infoTitle">
            Game developer:
            <span className="information">{detailedGameDate.developer}</span>
          </p>
          <p className="infoTitle">
            Game publisher:
            <span className="information">{detailedGameDate.publisher}</span>
          </p>
          <p className="infoTitle">
            Game release date:
            <span className="information">{detailedGameDate.release_date}</span>
          </p>
          <p className="infoTitle">
            Game description:
            <span className="information">
              {detailedGameDate.short_description}
            </span>
          </p>
          <p className="infoTitle">
            <span>
              <a href={detailedGameDate.game_url}> Download link</a>
            </span>
          </p>
        </div>
        <div className="gameDetailsSysReq">
          <h2 className="infoHeader">Minimum system requirements</h2>
          {detailedGameDate.screenshots !== undefined ? (
            <div>
              <p className="information">
                {detailedGameDate.minimum_system_requirements.os}
              </p>
              <p className="information">
                {detailedGameDate.minimum_system_requirements.processor}
              </p>
              <p className="information">
                {detailedGameDate.minimum_system_requirements.memory}
              </p>
              <p className="information">
                {detailedGameDate.minimum_system_requirements.graphics}
              </p>
              <p className="information">
                {detailedGameDate.minimum_system_requirements.storage}
              </p>
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
