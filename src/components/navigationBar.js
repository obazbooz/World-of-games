import React, { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <div>
        <Link to={'/games'}>All games</Link>
        <Link to={'/favorites'}>Favorites</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
