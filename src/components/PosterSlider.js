function PosterSlider({ detailedGameDate }) {
  console.log(detailedGameDate.screenshots);
  return (
    <div>
      {detailedGameDate.screenshots !== undefined ? (
        detailedGameDate.screenshots.map((shot, index) => {
          return (
            <img
              key={index}
              id="detailedGamePoster"
              src={shot.image}
              alt={'Game poster is not available'}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

export default PosterSlider;
