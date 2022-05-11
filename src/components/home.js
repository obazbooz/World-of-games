import FooterCopyright from './footerCopyright';
import FooterInfo from './footerInfo';
import Games from './games';
import NavigationBar from './navigationBar';

function Home() {
  return (
    <div>
      <header className="headerContainer">
        <h1>World of games</h1>
      </header>
      <nav className="navContainer">
        <NavigationBar />
      </nav>
      <body className="bodyContainer">
        <Games />
      </body>
      <footer className="footerContainer">
        <FooterInfo />
        <FooterCopyright />
      </footer>
    </div>
  );
}

export default Home;
