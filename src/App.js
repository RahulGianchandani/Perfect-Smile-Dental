import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";
import Home from './Pages/home';
import Footer from './Components/Footer';
import Transformations from './Pages/transformations';
import Contact from './Pages/contact';
import Appointment from './Pages/appointment';
import MouthDental from './Pages/services/mouthDental';
import ZirconiaCrowns from './Pages/services/zirconiaCrowns';
import TransparentOrthodontics from './Pages/services/transparentOrthodontics';
import PanoramaPhotography from './Pages/services/panoramaPhotography';
import CTScan from './Pages/services/ctScan';
import BasalGraft from './Pages/services/basalGraft';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Perfect-Smile-Dental" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/transformations" element={<Transformations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/service-mouth-dental" element={<MouthDental />} />
        <Route path="/service-zirconia-crowns" element={<ZirconiaCrowns />} />
        <Route path="/service-transparent-orthodontics" element={<TransparentOrthodontics />} />
        <Route path="/service-panorama-photography" element={<PanoramaPhotography />} />
        <Route path="/service-ct-scan" element={<CTScan />} />
        <Route path="/service-basal-graft" element={<BasalGraft />} />
      </Routes>
      <Footer />
    </Router>
  );
}

