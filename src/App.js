import './styles/App.scss';
import Header from './components/layout/Header';
import Intro from './components/Intro';
import OtherSection from './components/other-section';
import NextSection from './components/next-section';
import Services from './components/services';
import Provide from './components/provide';
import CounterSection from './components/counterSection';
import Clients from './components/Clients';
import Banner from './components/Banner';
import Footer from './components/layout/Footer';
//import './script.js';



function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <OtherSection />
      <NextSection />
      <Services />
      <Provide />
      <CounterSection />
      <Clients />
      <Banner />
      <Footer />
    </div>
  );
}


export default App;
