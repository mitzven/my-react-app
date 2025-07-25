import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import CustomNavbar from "./components/navbar";
import "./index.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mentions from "./pages/Mentions";
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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
