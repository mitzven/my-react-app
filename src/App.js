import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import CustomNavbar from "./components/navbar";
import "./index.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Portfolio" element={<Portfolio />} />

        {/* ajoute d'autres routes ici plus tard */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
