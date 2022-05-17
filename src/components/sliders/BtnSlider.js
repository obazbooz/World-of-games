function BtnSlider({ movePoster, direction }) {
  return (
    <div>
      <button
        className={`btnSlider ${
          direction === 'next' ? 'nextPosterBtn' : 'prevPosterBtn'
        }`}
        onClick={movePoster}
      >
        {direction === 'next' ? <p>Next</p> : <p>Previous</p>}
      </button>
    </div>
  );
}

export default BtnSlider;
