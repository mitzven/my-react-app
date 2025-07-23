import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CustomNavbar from "./components/navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
