function Services() {
  return (
    <div>
      <div>
        <img src="/images/banner.jpg" alt="banner" className="img-fluid" />{" "}
      </div>
      <div className="container my-5 px-3">
        <h3 className="text-center mb-1 fs-3 fs-md-2 Subtitle-style1 ">
          Mon offre de services
        </h3>
        <p className="text-center mb-3 small text-muted">
          Voici les prestations sur lesquelles je peux intervenir
        </p>
        <div className="trait-bleu"></div>

        <div className="row">
          {/* Carte UX Design */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card custom-card text-center p-3">
              <div className="card-body">
                <i className="bi bi-brush fs-1 text-primary mb-3"></i>
                <h4 className="card-title fw-bold">UX Design</h4>
                <p className="card-text">
                  L'UX Design est une discipline qui consiste à concevoir des
                  produits (sites web, applications mobiles, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre des
                  préoccupations. L'objectif est de rendre l'expérience
                  utilisateur la plus fluide et agréable possible.
                </p>
              </div>
            </div>
          </div>

          {/* Carte Développement web */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card custom-card h-100 shadow-sm text-center p-3">
              <div className="card-body">
                <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
                <h4 className="card-title fw-bold">Développement web</h4>
                <p className="card-text">
                  Le développement de sites web consiste à créer des sites
                  internet en utilisant des langages de programmation (HTML,
                  CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap,
                  React, Angular, etc.).
                </p>
              </div>
            </div>
          </div>

          {/* Carte Référencement */}
          <div className="col-12 col-md-4 mb-4">
            <div className="card custom-card h-100 shadow-sm text-center p-3">
              <div className="card-body">
                <i className="bi bi-search fs-1 text-primary mb-3"></i>
                <h4 className="card-title fw-bold">Référencement</h4>
                <p className="card-text">
                  Le référencement naturel (SEO) est une technique qui consiste
                  à optimiser un site web pour le faire remonter dans les
                  résultats des moteurs de recherche (Google, Bing, Yahoo,
                  etc.). L'objectif est d'attirer un maximum de visiteurs
                  qualifiés sur le site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
