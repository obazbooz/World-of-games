function PosterSlider({ screenshots }) {
  return (
    <div>
      {screenshots.map((shot, index) => {
        return (
          <img
            id="detailedGamePoster"
            src={shot.image}
            alt={'Game poster is not available'}
          />
        );
      })}
    </div>
  );
}

export default PosterSlider;
