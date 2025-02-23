import logo from './logo.svg';
import './App.css';
import HomePage from './components/MainScreen/MainScreen';
import AboutGryphon from './components/AboutScreen/AboutScreen';
import PerformanceScreen from './components/PerformanceScreen/PerformanceScreen';
import PartnerScreen from './components/PartnerScreen/PartnerScreen';
import ServiceScreen from './components/ServiceScreen/ServiceScreen';

function App() {
  return (
<>
<HomePage/>
<AboutGryphon/>
<PerformanceScreen/>
<PartnerScreen/>
<ServiceScreen/>
</>
  );
}

export default App;
