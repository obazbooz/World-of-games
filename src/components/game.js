function Game({ game: { id, title, thumbnail, short_description } }) {
  return (
    <div>
      <h4>{title}</h4>
      <img src={thumbnail} alt={'Product img is not available'} />
      <p>{short_description}</p>
    </div>
  );
}

export default Game;
