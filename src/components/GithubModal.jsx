import { useEffect, useState } from "react";
import "./GithubModal.css";

function GithubModal() {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((error) => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content custom-modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Mon profil GitHub</h4>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"
            ></button>
          </div>

          <div className="modal-body">
            {githubData ? (
              <div className="modal-grid">
                <div className="left-column">
                  <img
                    src={githubData.avatar_url}
                    alt={githubData.name}
                    className="avatar"
                  />
                </div>
                <div className="right-column">
                  <p>
                    <i className="bi bi-person icon"></i>{" "}
                    <a
                      href={githubData.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      {githubData.name}
                    </a>
                  </p>
                  <hr />
                  <p>
                    <i className="bi bi-geo-alt icon"></i>{" "}
                    {githubData.location || "2, Rue de Paris 94000 Créteil"}
                  </p>
                  <hr />
                  <p>
                    <i className="bi bi-card-text icon"></i> {githubData.bio}
                  </p>
                  <hr />
                  <p>
                    <i className="bi bi-box icon"></i> Repos publics :{" "}
                    {githubData.public_repos}
                  </p>
                  <hr />
                  <p>
                    <i className="bi bi-people icon"></i> Followers :{" "}
                    {githubData.followers}
                  </p>
                  <hr />
                  <p>
                    <i className="bi bi-people icon"></i> Following :{" "}
                    {githubData.following}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-light">Chargement...</p>
            )}
          </div>

          <div className="modal-footer border-0 justify-content-end">
            <button
              type="button"
              className="btn btn-light"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GithubModal;
