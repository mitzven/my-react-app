import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ajoute d'autres routes ici plus tard */}
      </Routes>
      <Footer /> {/* <-- Corrigé */}
    </Router>
  );
}

export default App;
