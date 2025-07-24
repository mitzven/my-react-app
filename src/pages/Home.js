import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="img-hero"> </div>
      <div className="content">
        <h1 className="HomeTitle">Bonjour, je suis John Doe</h1>
        <h2 className="HomeSubtitle">Développeur web full stack</h2>
        <div>
          <button className="btn btn-danger">En savoir plus</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
