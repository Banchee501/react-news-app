import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/newsCarousel';
import NewsFeed from '../editorialChoice/editorialChoice';

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
