import React, { useContext } from 'react';
import useFetchApi from '../../customHooks/useFetchApi';
import { useParams } from 'react-router-dom';
import DetailedGame from '../games/DetailedGame';
import Footer from '../footers/Footer';
import Header from '../headers/Header';
import { LoadingContext } from '../../contexts/isLoading';

function DetailsGame() {
  const { id } = useParams();
  const gamesApiUrl = 'https://mmo-games.p.rapidapi.com/game';
  const apiUrlParams = { id: `${id}` };
  const detailedGameDate = useFetchApi(gamesApiUrl, apiUrlParams);
  const { isLoading, isFail } = useContext(LoadingContext);
  return (
    <div>
      <div className="headerNavContainer">
        <Header />
      </div>

      {isLoading && !isFail ? (
        <div className="gamesBodyContainer">
          <img
            className="loadingImg"
            src="/isLoading.gif"
            alt="Loading icon is not available!"
          />
        </div>
      ) : (
        <DetailedGame detailedGameDate={detailedGameDate} />
      )}
      <Footer />
    </div>
  );
}

export default DetailsGame;
