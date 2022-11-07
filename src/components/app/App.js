import Navbar from '../navigation/Navbar';
import Statistics from '../statistics/Statistics';
import DarkVariantExample from '../newsCarousel/newsCarousel';


const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Statistics />
      <DarkVariantExample />
    </div>
  );
}

export default App;
