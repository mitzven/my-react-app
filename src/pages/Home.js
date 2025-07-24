import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container-p1">
        <div className="img-hero"> </div>
        <div className="content">
          <h1 className="HomeTitle">Bonjour, je suis John Doe</h1>
          <h2 className="HomeSubtitle1">Développeur web full stack</h2>
          <div>
            <button className="btn btn-danger">En savoir plus</button>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="HomeSubtitle2">A propos</h3>
            <img
              src="/images/john-doe-about.jpg"
              alt="John Doe"
              className="img-fluid mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              necessitatibus consectetur tempore perferendis nostrum, ex
              delectus reiciendis impedit aut iure enim placeat? Natus, neque
              at?
            </p>
          </div>

          <div className="col-md-6 mb-4">
            <h3 className="HomeSubtitle2">Mes compétences</h3>

            <p>HTML5 90%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-danger"
                style={{ width: "90%" }}
              ></div>
            </div>

            <p>CSS3 80%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-info"
                style={{ width: "80%" }}
              ></div>
            </div>

            <p>JAVASCRIPT 70%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-warning"
                style={{ width: "70%" }}
              ></div>
            </div>

            <p>PHP 60%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-success"
                style={{ width: "60%" }}
              ></div>
            </div>

            <p>REACT 50%</p>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-primary"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
