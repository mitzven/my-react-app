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
  };

  return (
    <div>
      <div className="mentions container my-5">
        <h3 className="Styleh3 text-center mb-1">Contact</h3>
        <p className="small-writing text-center text-muted">
          Pour me contacter en vue d'un entretien ou d'une future collaboration,
          merci de remplir le formulaire de contact.
        </p>
        <div className="short-blue-line"></div>

        <div className="container my-5 contact-container">
          <div className="row g-4">
            <div className="col-md-6">
              <h4 className="Styleh4">Formulaire de contact</h4>
              <div className="long-blue-line"></div>

              <form onSubmit={handleSubmit}>
                <div className="mb-2">
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
                <div className="mb-2">
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
                <div className="mb-2">
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
                <div className="mb-2">
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

            <div className="col-md-6">
              <h4 className="Styleh4">Mes coordonnées</h4>
              <div className="long-blue-line"></div>

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

              <div className="mt-3">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=40+rue+Laure+Diebold,+Lyon&output=embed"
                  width="100%"
                  height="350"
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
    </div>
  );
};

export default Contact;
