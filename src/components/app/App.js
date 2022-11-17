import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/NewsCarousel';
import NewsFeed from '../editorialChoice/EditorialChoice';
import VideoNews from '../videoNews/VideoNews';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      <SimpleSlider />
      <NewsFeed />
      <VideoNews />
    </div>
  );
}

export default App;