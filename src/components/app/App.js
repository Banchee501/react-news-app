import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import SimpleSlider from '../newsCarousel/newsCarousel';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      <SimpleSlider />
    </div>
  );
}

export default App;
