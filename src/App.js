import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import FavoriteGames from './components/favoriteGames';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<FavoriteGames />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
