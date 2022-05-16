import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectedCategory } from '../contexts/selectedCategory';
import { IsSearchedContext } from '../contexts/isSearchedHitted';

function NavigationBar() {
  const { setSelectedCategory } = useContext(SelectedCategory);
  const { isSearched, setIsSearched } = useContext(IsSearchedContext);
  return (
    <nav className="navigationContainer">
      <ul className="navListContainer">
        <li className="navItem">
          <Link
            id="homeNav"
            to={'/home'}
            onClick={() => {
              setSelectedCategory('All');
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
              setIsSearched(false);
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
