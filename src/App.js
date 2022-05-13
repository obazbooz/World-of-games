import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import FavoriteGames from './components/favoriteGames';
import DetailedGame from './components/detailedGame';
import { FavoriteGamesProvider } from './contexts/favoriteGameList';
import './App.css';
import SocialGames from './components/socialGames';

function App() {
  return (
    <div className="App">
      <FavoriteGamesProvider>
        <Router>
          <Routes>
            <Route path="/games" element={<Home />} />
            <Route path="favorites" element={<FavoriteGames />} />
            <Route path="/games/:id" element={<DetailedGame />} />
            <Route path="/socialGames" element={<SocialGames />} />
          </Routes>
        </Router>
      </FavoriteGamesProvider>
    </div>
  );
}

export default App;
