import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/NewsCarousel';
import NewsFeed from '../editorialChoice/EditorialChoice';
import VideoNews from '../videoNews/VideoNews';
import Politics from '../otherNews/OtherNews';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      <SimpleSlider />
      <NewsFeed />
      <VideoNews />
      <Politics />
    </div>
  );
}

export default App;