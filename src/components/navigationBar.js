import React, { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul className="navHeaderContent">
        <li className="navItem">
          <Link to={'/games'}>All games</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Favorites</Link>
        </li>
        <li className="navItem">
          <Link to={'/socialGames'}>Social</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Card Game</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Shooter</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>MMORPG</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>MOBA</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Fighting</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Strategy</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Racing</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Sports</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Fantasy</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>MMO</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Battle Royale</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Action RPG</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>MMO</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>ARPG</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Card</Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
