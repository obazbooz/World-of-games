import React from 'react';

function DetailedGame({ detailedGameDate }) {
  return (
    <div className="bodyContainer">
      <h4>{detailedGameDate.title}</h4>
      <img
        src={detailedGameDate.thumbnail}
        alt={'Game poster is not available'}
      />
      <p>{detailedGameDate.short_description}</p>
      <p>{detailedGameDate.genre}</p>
      <p>{detailedGameDate.platform}</p>
      <p>{detailedGameDate.developer}</p>
      <p>{detailedGameDate.release_date}</p>
      <p>{detailedGameDate.profile_url}</p>
    </div>
  );
}

export default DetailedGame;
