import FooterCopyright from './footerCopyright';
import FooterInfo from './footerInfo';
import Games from './games';
import NavigationBar from './navigationBar';

function Home() {
  return (
    <div>
      <div>
        <div className="headerTitleContainer">
          <h1>World of games</h1>
        </div>
        <div className="headerNavContainer">
          <NavigationBar />
        </div>
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
