import { Routes, Route } from 'react-router-dom'
import Travel from './Travel'
import Explore from './Explore'
import Flights from './Flights'
import Hotels from './Hotels'
import HolidayRentals from './HolidayRentals'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Travel />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/flights' element={<Flights />} />
      <Route path='/hotels' element={<Hotels />} />
      <Route path='/holiday-rentals' element={<HolidayRentals />} />
    </Routes>
  );
};

export default App