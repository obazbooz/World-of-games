import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FavoritePage from './components/pages/FavoritePage';
import DetailsGame from './components/pages/DetailsPage';
import { FavoriteGamesProvider } from './contexts/favoriteGameList';
import { SelectedCategoryProvider } from './contexts/selectedCategory';
import { SearchTermGameProvider } from './contexts/searchTermGame';
import { FilteredGamesProvider } from './contexts/filteredGames';
import { IsSearchedProvider } from './contexts/isSearchedHitted';
import { LoadingProvider } from './contexts/isLoading';

import './App.css';

function App() {
  return (
    <div className="App">
      <FavoriteGamesProvider>
        <SelectedCategoryProvider>
          <SearchTermGameProvider>
            <FilteredGamesProvider>
              <IsSearchedProvider>
                <LoadingProvider>
                  <Router>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/favorites" element={<FavoritePage />} />
                      <Route path="/games/:id" element={<DetailsGame />} />
                    </Routes>
                  </Router>
                </LoadingProvider>
              </IsSearchedProvider>
            </FilteredGamesProvider>
          </SearchTermGameProvider>
        </SelectedCategoryProvider>
      </FavoriteGamesProvider>
    </div>
  );
}

export default App;
