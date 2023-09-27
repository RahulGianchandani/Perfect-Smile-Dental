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


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>

        <Route path="/Perfect-Smile-Dental" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/transformations" element={<Transformations />} />
      </Routes>
      <Footer />
    </Router>
  );
}

