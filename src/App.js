import './App.css';
import HomePage from './components/MainScreen/MainScreen';
import AboutGryphon from './components/AboutScreen/AboutScreen';
import PerformanceScreen from './components/PerformanceScreen/PerformanceScreen';
import PartnerScreen from './components/PartnerScreen/PartnerScreen';
import ServiceScreen from './components/ServiceScreen/ServiceScreen';
import RecentWorkScreen from './components/RecentWorkScreen/RecentWorkScreen';
import BlogScreen from './components/BlogScreen/BlogScreen';
import GetInTouchScreen from './components/GetInTouchScreen/GetInTouchScreen';
import MarqueeSection from './components/MarqueeSection/MarqueeSection';
import FooterSection from './components/FoooterSection/FooterSection';

function App() {
  return (
<>
<HomePage/>
<AboutGryphon/>
<PerformanceScreen/>
<PartnerScreen/>
<ServiceScreen/>
<RecentWorkScreen/>
<BlogScreen/>
<GetInTouchScreen/>
<MarqueeSection/>
<FooterSection/>
</>
  );
}

export default App;
