import FooterCopyright from './footerCopyright';
import FooterInfo from './footerInfo';
import Games from './games';
import NavigationBar from './navigationBar';

function Home() {
  return (
    <div>
      <div className="headerContainer">
        <h1>World of games</h1>
      </div>
      <div className="navContainer">
        <NavigationBar />
      </div>
      <div className="bodyContainer">
        <Games />
      </div>
      <div className="footerContainer">
        <FooterInfo />
        <FooterCopyright />
      </div>
    </div>
  );
}

export default Home;
