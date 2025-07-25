import "./Mentions.css";
import { useEffect } from "react";

function Mentions() {
  useEffect(() => {
    document.title = "Mentions Légales";
  }, []);

  return (
    <>
      {/* Empêche l'indexation par les moteurs de recherche */}
      <meta name="robots" content="noindex" />

      <div className="mentions container my-5">
        <h3 className="text-center mb-1">Mentions légales</h3>
        <div className="trait-bleu-short"></div>

        <div className="accordion" id="accordionMentions">
          {/* ÉDITEUR DU SITE */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEditeur">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEditeur"
                aria-expanded="true"
                aria-controls="collapseEditeur"
              >
                Éditeur du site
              </button>
            </h2>
            <div
              id="collapseEditeur"
              className="accordion-collapse collapse show"
              aria-labelledby="headingEditeur"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                John Doe
                <br />
                40 rue Laure Diebold
                <br />
                69009 Lyon
                <br />
                10 20 30 40 50
                <br />
                john.doe@gmail.com
              </div>
            </div>
          </div>

          {/* HÉBERGEUR */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingHebergeur">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHebergeur"
                aria-expanded="false"
                aria-controls="collapseHebergeur"
              >
                Hébergeur
              </button>
            </h2>
            <div
              id="collapseHebergeur"
              className="accordion-collapse collapse"
              aria-labelledby="headingHebergeur"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                alwaysdata
                <br />
                91 Rue du Faubourg Saint Honoré, 75008 Paris
                <br />
                <a
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @ www.alwaysdata.com
                </a>
              </div>
            </div>
          </div>

          {/* CRÉDITS */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingCredits">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCredits"
                aria-expanded="false"
                aria-controls="collapseCredits"
              >
                Crédits
              </button>
            </h2>
            <div
              id="collapseCredits"
              className="accordion-collapse collapse"
              aria-labelledby="headingCredits"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                Ce site a été réalisé par John Doe, étudiant au Centre Européen
                de formation.
                <br />
                <br />
                Les images utilisées sur ce site sont libres de droits et ont
                été obtenues sur le site{" "}
                <a
                  href="https://pixabay.com/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pixabay
                </a>
                .<br />
                La favicon de ce site a été fournie par John Doe - Icônes créées
                par{" "}
                <a
                  href="https://www.flaticon.com/authors/freepik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Freepik
                </a>{" "}
                sur{" "}
                <a
                  href="https://www.flaticon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Flaticon
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentions;
