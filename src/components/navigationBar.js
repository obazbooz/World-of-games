import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SelectedCategory } from '../contexts/selectedCategory';
import { IsSearchedContext } from '../contexts/isSearchedHitted';

function NavigationBar() {
  const { selectedCategory, setSelectedCategory } =
    useContext(SelectedCategory);
  const { setIsSearched } = useContext(IsSearchedContext);
  return (
    <nav className="navigationContainer">
      <ul className="navListContainer">
        <li className="navItem">
          <Link
            className={` homeLink ${
              selectedCategory === 'All'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Social'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Card'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Shooter'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Fighting'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Strategy'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Racing'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Sports'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Fantasy'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Action'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'PC'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
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
            className={` categoryLink ${
              selectedCategory === 'Browser'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/'}
            onClick={() => {
              setSelectedCategory('Browser');
              setIsSearched(false);
            }}
          >
            Web browser platform games
          </Link>
        </li>
        <li className="navItem">
          <Link
            className={` categoryLink ${
              selectedCategory === 'favorites'
                ? 'selectedCategoryStyle'
                : 'unselectedCategoryStyle'
            }`}
            to={'/favorites'}
            onClick={() => {
              setSelectedCategory('favorites');
              setIsSearched(false);
            }}
          >
            My favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
