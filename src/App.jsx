import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import Destination from './components/Destination';
import Crew from './components/Crew';
import TechnologyPage from './components/TechnologyPage';

function App() {
  return (
    <>
        <Navigation />
       <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<TechnologyPage />} />
      </Routes>
    </>
  )
}

export default App;
