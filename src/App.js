import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomNavbar from "./components/navbar";
<<<<<<< Updated upstream
import Home from "./pages/Home";
=======
import Footer from "./components/footer";
import Home from "./pages/Home";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
>>>>>>> Stashed changes

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
