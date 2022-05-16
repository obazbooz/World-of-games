import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import FavoritePage from './components/favoritePage';
import DetailsGame from './components/detailsPage';
import { FavoriteGamesProvider } from './contexts/favoriteGameList';
import { SelectedCategoryProvider } from './contexts/selectedCategory';
import { SearchTermGameProvider } from './contexts/searchTermGame';
import { FilteredGamesProvider } from './contexts/filteredGames';
import { IsSearchedProvider } from './contexts/isSearchedHitted';
import './App.css';

function App() {
  return (
    <div className="App">
      <FavoriteGamesProvider>
        <SelectedCategoryProvider>
          <SearchTermGameProvider>
            <FilteredGamesProvider>
              <IsSearchedProvider>
                <Router>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favorites" element={<FavoritePage />} />
                    <Route path="/games/:id" element={<DetailsGame />} />
                  </Routes>
                </Router>
              </IsSearchedProvider>
            </FilteredGamesProvider>
          </SearchTermGameProvider>
        </SelectedCategoryProvider>
      </FavoriteGamesProvider>
    </div>
  );
}

export default App;
