import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/NewsCarousel';
import NewsFeed from '../editorialChoice/EditorialChoice';
import VideoNews from '../videoNews/VideoNews';
import Other from '../otherNews/OtherNews';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      {/* <SimpleSlider /> */}
      <NewsFeed />
      <VideoNews />
      <Other />
      <Footer />
    </div>
  );
}

export default App;