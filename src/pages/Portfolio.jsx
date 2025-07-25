const projects = [
  {
    title: "Fresh Food",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec PHP et MySQL",
    img: "/images/portfolio/fresh-food.jpg",
    link: "https://www.google.com/",
  },
  {
    title: "Restaurant Akira",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec WordPress",
    img: "/images/portfolio/restaurant-japonais.jpg",
    link: "https://www.google.com/",
  },
  {
    title: "Espace bien-être",
    desc: "Site de vente de produits frais en ligne",
    tech: "Site réalisé avec LARAVEL",
    img: "/images/portfolio/espace-bien-etre.jpg",
    link: "https://www.google.com/",
  },
  {
    title: "SEO",
    desc: "Amélioration du référencement d’un site e-commerce",
    tech: "Utilisation des outils SEO",
    img: "/images/portfolio/seo.jpg",
    link: "https://www.google.com/",
  },
  {
    title: "Création d’une API",
    desc: "Création d’une API RESTFULL publique",
    tech: "PHP - SYMFONY",
    img: "/images/portfolio/coder.jpg",
    link: "https://www.google.com/",
  },
  {
    title: "Maquette d’un site web",
    desc: "Création du prototype d’un site",
    tech: "Réalisé avec FIGMA",
    img: "/images/portfolio/screens.jpg",
    link: "https://www.google.com/",
  },
];

const Portfolio = () => {
  return (
    <div className="container my-5 portfolio-container">
      <h3 className="Styleh3 text-center mb-1">Portfolio</h3>
      <p className="small-writing text-center text-muted">
        Voici quelques-unes de mes réalisations.
      </p>
      <div className="short-blue-line"></div>
      <div className="text-center row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="custom-card card h-500">
              <img
                src={project.img}
                className="card-img-top img-fluid mb-3"
                alt={project.title}
              />
              <div className="card-body">
                <h4 className="Styleh4">{project.title}</h4>
                <p className="card-text">{project.desc}</p>
                <a
                  href={project.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site
                </a>
              </div>
              <div className="card-footer text-muted small">{project.tech}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
