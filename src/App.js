import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import CustomNavbar from "./components/navbar";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<services />} />

        {/* ajoute d'autres routes ici plus tard */}
      </Routes>
      <Footer /> {/* <-- Corrigé */}
    </Router>
  );
}

export default App;
