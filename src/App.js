import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import FavoritePage from './components/favoritePage';
import DetailsGame from './components/detailsPage';
import { FavoriteGamesProvider } from './contexts/favoriteGameList';
import { SelectedCategoryProvider } from './contexts/selectedCategory';
import './App.css';

function App() {
  return (
    <div className="App">
      <FavoriteGamesProvider>
        <SelectedCategoryProvider>
          <Router>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<FavoritePage />} />
              <Route path="/games/:id" element={<DetailsGame />} />
            </Routes>
          </Router>
        </SelectedCategoryProvider>
      </FavoriteGamesProvider>
    </div>
  );
}

export default App;
