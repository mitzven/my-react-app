import { useEffect } from "react";

function Mentions() {
  useEffect(() => {
    document.title = "Mentions Légales";
  }, []);

  return (
    <>
      <meta name="robots" content="noindex" />

      <div className="mentions container my-5">
        <h3 className="Styleh3 text-center mb-1">Mentions légales</h3>
        <div className="short-blue-line"></div>

        <div className="accordion" id="accordionMentions">
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
              className="accordion-collapse collapse"
              aria-labelledby="headingEditeur"
              data-bs-parent="#accordionMentions"
            >
              <div className="accordion-body">
                <p className="margin-p">John Doe</p>
                <p className="small-writing margin-p">
                  <i class="bi bi-map icon"></i>
                  40 rue Laure Diebold
                </p>
                <p className="small-writing margin-p">
                  <i className="bi bi-geo-alt icon"></i>69009 Lyon
                </p>
                <p className="small-writing margin-p">
                  <i className="bi bi-phone icon"></i>10 20 30 40 50
                </p>
                <p className="small-writing margin-p">
                  <i className="bi bi-envelope-at icon"></i>john.doe@gmail.com
                </p>
              </div>
            </div>
          </div>

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
                <p className="alwaysdata">
                  <strong>alwaysdata</strong>
                </p>
                <p className="medium-writing">
                  91 Rue du Faubourg Saint Honoré, 75008 Paris
                </p>

                <i className="bi bi-globe2 icon small-writing"></i>
                <a
                  className="medium-writing"
                  href="https://www.alwaysdata.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.alwaysdata.com
                </a>
              </div>
            </div>
          </div>

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
                <p className="medium-writing">
                  {" "}
                  Ce site a été réalisé par John Doe, étudiant au {""}
                  <a
                    href="https://eleve.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Centre Européen de formation
                  </a>
                  .
                </p>
                <p className="medium-writing">
                  {" "}
                  <em>
                    Les images utilisées sur ce site sont libres de droits et
                    ont été obtenues sur le site{" "}
                    <a
                      href="https://pixabay.com/fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pixabay
                    </a>
                    .
                  </em>
                </p>
                <p className="medium-writing">
                  {" "}
                  <em>
                    La favicon de ce site a été fournie par{" "}
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John doe Icons erstellt von Freepik-Flaticon
                    </a>{" "}
                    .
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentions;
