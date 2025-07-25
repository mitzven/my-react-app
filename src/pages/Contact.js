import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis avec :", formData);
    // Tu peux ici ajouter une requête POST vers un back-end ou envoyer un mail via emailjs
  };

  return (
    <div>
      <h3 className="text-center mb-1">Contact</h3>
      <p className="text-center text-muted">
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <div className="trait-bleu-short"></div>

      <div className="container my-5 contact-container">
        <div className="row g-4">
          {/* Formulaire */}
          <div className="col-md-6">
            <h2>Formulaire de contact</h2>
            <div className="trait-bleu-long"></div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  name="nom"
                  placeholder="Votre nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Votre adresse mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="telephone"
                  name="telephone"
                  placeholder="Votre numéro de téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="sujet"
                  name="sujet"
                  placeholder="Sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6">
            <h2>Mes coordonnées</h2>
            <div className="trait-bleu-long"></div>

            <p>
              <strong>John Doe</strong>
            </p>
            <p>
              40 rue Laure Diebold
              <br />
              69009 Lyon
            </p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>

            <div className="mt-3">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
