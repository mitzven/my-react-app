import React, { useState, useEffect } from "react";
import "./Home.css";
import GithubModal from "../components/GithubModal";

function Home() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/octocat") // Remplace par ton username GitHub
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error("Erreur GitHub :", err));
  }, []);

  return (
    <div className="home">
      <div className="home-container-p1">
        <div className="img-hero"></div>
        <div className="content">
          <h1 className="HomeTitle">Bonjour, je suis John Doe</h1>
          <h2 className="HomeSubtitle1">Développeur web full stack</h2>
          <div>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#githubModal"
            >
              En savoir plus
            </button>
            {/* Passe les données GitHub en props */}
            <GithubModal githubData={githubData} />
          </div>
        </div>
      </div>

      {/* ... le reste identique */}
    </div>
  );
}

export default Home;
