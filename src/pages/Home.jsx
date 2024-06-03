import "../styles/Home.scss";
import linkd from "../assets/icons/linkd.png";
import github from "../assets/icons/github.png";

function Home() {
  return (
    <div>
      <div className="Welcome">
        <h5>Bienvenue</h5>
      </div>
      <div className="PorteFolio">
        <h4>Sur Mon PorteFolio</h4>
      </div>

      <div className="homeContainer">
        <h1>Simon, DEVELOPPEUR WEB</h1>
      </div>
      <div className="FullStack">
        <h2>Full Stack</h2>
      </div>
      <div className="buttonHome">
        <button className="buttonHomeProjet">
          <span>Essaye Moi</span>
        </button>
      </div>
      <div className="iconeHomeContainer">
        <a href="https://www.linkedin.com/in/simon-bescheron/" target="_blank">
          <img src={linkd} alt="" className="iconeContactHome" />
        </a>
        <a href="https://github.com/simonbesch" target="_blank">
          <img src={github} alt="" className="iconeContactHome" />
        </a>
      </div>
    </div>
  );
}

export default Home;
