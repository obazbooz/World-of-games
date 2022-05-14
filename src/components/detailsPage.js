import React from 'react';
import useFetchApi from '../customHooks/useFetchApi';
import { useParams } from 'react-router-dom';
import DetailedGame from './detailedGame';
import Footer from './footer';
import Header from './header';

function DetailsGame() {
  const { id } = useParams();
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/game';
  const apiUrlParams = { id: `${id}` };
  const detailedGameDate = useFetchApi(gamesApiUrl, apiUrlParams);
  return (
    <div>
      <div className="headerNavContainer">
        <Header />
      </div>
        <DetailedGame detailedGameDate={detailedGameDate} />
        <Footer/>
    </div>
  );
}

export default DetailsGame;
