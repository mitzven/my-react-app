// src/App.js
import "./App.css";
import "./components/navbar.css"; // Tu peux le laisser si tu y ajoutes du style
import CustomNavbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <h1>Bonjour, je suis John Doe</h1>
      <h2>Développeur web full stack</h2>
    </div>
  );
}

export default App;
