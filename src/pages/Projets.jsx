import "../styles/Projets.scss";
import allProjets from "../datas/projetsDatas";
import { Link } from "react-router-dom";

function Projets() {
  const mapProjets = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projets" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapCheckPoints = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "checkPoints" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapAteliers = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "ateliers" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapQuetes = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "quetes" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapProjetsPerso = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projetsPerso" ? (
        <div className="divEvenement">
          <Link to={`/projects/${datas.id}`}>
            <img src={datas.img} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.name}
            </h4>
          </Link>
        </div>
      ) : null
    ) : null
  );

  return (
    <div className="ProjetsContainerAll">
      <h3>Projets:</h3>
      <div className="ProjectContainer">{mapProjets}</div>
      <h3>CheckPoints:</h3>
      <div className="ProjectContainer">{mapCheckPoints}</div>
      <h3>Ateliers:</h3>
      <div className="ProjectContainer">{mapAteliers}</div>
      <h3>Quetes:</h3>
      <div className="ProjectContainer">{mapQuetes}</div>
      <h3>Projets Personnels:</h3>
      <div className="ProjectContainer">{mapProjetsPerso}</div>
    </div>
  );
}

export default Projets;
