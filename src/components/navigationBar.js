import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectedCategory } from '../contexts/selectedCategory';

function NavigationBar() {
  const { setSelectedCategory } = useContext(SelectedCategory);
  return (
    <nav className="navigationContainer">
      <ul className="navListContainer">
        <li className="navItem">
          <Link
            id="homeNav"
            to={'/home'}
            onClick={() => {
              setSelectedCategory('All');
            }}
          >
            All games
          </Link>
        </li>

        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Social');
            }}
          >
            Social games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Card');
            }}
          >
            Card Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Shooter');
            }}
          >
            Shooting Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Fighting');
            }}
          >
            Fighting Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Strategy');
            }}
          >
            Strategy Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Racing');
            }}
          >
            Racing Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Sports');
            }}
          >
            Sports Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Fantasy');
            }}
          >
            Fantasy Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Action');
            }}
          >
            Action Games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('PC');
            }}
          >
            PC platform games
          </Link>
        </li>
        <li className="navItem">
          <Link
            to={'/home'}
            onClick={() => {
              setSelectedCategory('Browser');
            }}
          >
            Web browser platform games
          </Link>
        </li>
        <li className="navItem">
          <Link to={'/favorites'}>My favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
