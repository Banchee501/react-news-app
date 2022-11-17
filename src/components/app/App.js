import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/NewsCarousel';
import NewsFeed from '../editorialChoice/EditorialChoice';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      <SimpleSlider />
      <NewsFeed />
    </div>
  );
}

export default App;