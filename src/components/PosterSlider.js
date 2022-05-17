import { useState } from 'react';
import BtnSlider from './BtnSlider';
function PosterSlider({ detailedGameDate: { screenshots } }) {
  const [posterIndex, setPosterIndex] = useState(1);

  const nextPoster = () => {
    if (posterIndex !== screenshots.length) {
      setPosterIndex((prevIndex) => prevIndex + 1);
    } else {
      setPosterIndex(1);
    }
  };
  const prevPoster = () => {
    if (posterIndex !== 1) {
      setPosterIndex((prevIndex) => prevIndex - 1);
    } else {
      setPosterIndex(screenshots.length);
    }
  };
  return (
    <div className="detailedGamePoster">
      {screenshots !== undefined ? (
        screenshots.map((shot, index) => {
          return (
            <div
              className={
                posterIndex === index + 1 ? 'posterActive' : 'posterDeactivate'
              }
            >
              <img
                key={index}
                id="detailedGamePosterImg"
                src={shot.image}
                alt={'Game poster is not available'}
              />
            </div>
          );
        })
      ) : (
        <></>
      )}
      <BtnSlider movePoster={nextPoster} direction={'next'} />
      <BtnSlider movePoster={prevPoster} direction={'prev'} />
    </div>
  );
}

export default PosterSlider;
