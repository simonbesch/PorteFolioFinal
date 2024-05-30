import "../styles/Projets.scss";
import allProjets from "../datas/projetsDatas";
import { useState } from "react";

function Projets() {
  const [divData, setDivData] = useState("");
  const [isData, setIsData] = useState(false);

  const mapProjets = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projets" ? (
        <div
          className="divEvenement"
          onClick={() => {
            {
              isData ? setDivData("") : setDivData(datas), setIsData(!isData);
            }
          }}
        >
          <h4 key={datas.id} className="NameProject">
            {datas.name}
          </h4>
          <p>
            {divData.id === datas.id ? (
              <div className="divOpenEvenement">
                <img src={datas.img} alt="" />
                <p>
                  <span className="titleProject">Description :</span>
                </p>
                <p>{datas.description}</p>
                <p>
                  <span className="titleProject">Collaborateurs :</span>
                </p>
                <p>{datas.mates}</p>
                <p>
                  <span className="titleProject">Github :</span>
                </p>
                <p>{datas.github}</p>
                <p>
                  <span className="titleProject">Deploiment :</span>
                </p>
                <p>{datas.online}</p>
              </div>
            ) : null}
          </p>
        </div>
      ) : null
    ) : null
  );

  const mapCheckPoints = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "checkPoints" ? (
        <div
          className="divEvenement"
          onClick={() => {
            {
              isData ? setDivData("") : setDivData(datas), setIsData(!isData);
            }
          }}
        >
          <h4 key={datas.id} className="NameProject">
            {datas.name}
          </h4>
          <p>
            {divData.id === datas.id ? (
              <div className="divOpenEvenement">
                <p>
                  <span className="titleProject">Description :</span>
                </p>
                <p>{datas.description}</p>
                <p>
                  <span className="titleProject">Collaborateurs :</span>
                </p>
                <p>{datas.mates}</p>
                <p>
                  <span className="titleProject">Github :</span>
                </p>
                <p>{datas.github}</p>
                <p>
                  <span className="titleProject">Deploiment :</span>
                </p>
                <p>{datas.online}</p>
              </div>
            ) : null}
          </p>
        </div>
      ) : null
    ) : null
  );

  const mapAteliers = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "ateliers" ? (
        <div
          className="divEvenement"
          onClick={() => {
            {
              isData ? setDivData("") : setDivData(datas), setIsData(!isData);
            }
          }}
        >
          <h4 key={datas.id} className="NameProject">
            {datas.name}
          </h4>
          <p>
            {divData.id === datas.id ? (
              <div className="divOpenEvenement">
                <p>
                  <span className="titleProject">Description :</span>
                </p>
                <p>{datas.description}</p>
                <p>
                  <span className="titleProject">Collaborateurs :</span>
                </p>
                <p>{datas.mates}</p>
                <p>
                  <span className="titleProject">Github :</span>
                </p>
                <p>{datas.github}</p>
                <p>
                  <span className="titleProject">Deploiment :</span>
                </p>
                <p>{datas.online}</p>
              </div>
            ) : null}
          </p>
        </div>
      ) : null
    ) : null
  );

  const mapQuetes = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "quetes" ? (
        <div
          className="divEvenement"
          onClick={() => {
            {
              isData ? setDivData("") : setDivData(datas), setIsData(!isData);
            }
          }}
        >
          <h4 key={datas.id} className="NameProject">
            {datas.name}
          </h4>
          <p>
            {divData.id === datas.id ? (
              <div className="divOpenEvenement">
                <p>
                  <span className="titleProject">Description :</span>
                </p>
                <p>{datas.description}</p>
                <p>
                  <span className="titleProject">Collaborateurs :</span>
                </p>
                <p>{datas.mates}</p>
                <p>
                  <span className="titleProject">Github :</span>
                </p>
                <p>{datas.github}</p>
                <p>
                  <span className="titleProject">Deploiment :</span>
                </p>
                <p>{datas.online}</p>
              </div>
            ) : null}
          </p>
        </div>
      ) : null
    ) : null
  );

  const mapProjetsPerso = allProjets.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projetsPerso" ? (
        <div
          className="divEvenement"
          onClick={() => {
            {
              isData ? setDivData("") : setDivData(datas), setIsData(!isData);
            }
          }}
        >
          <h4 key={datas.id} className="NameProject">
            {datas.name}
          </h4>
          <p>
            {divData.id === datas.id ? (
              <div className="divOpenEvenement">
                <p>
                  <span className="titleProject">Description :</span>
                </p>
                <p>{datas.description}</p>
                <p>
                  <span className="titleProject">Collaborateurs :</span>
                </p>
                <p>{datas.mates}</p>
                <p>
                  <span className="titleProject">Github :</span>
                </p>
                <p>{datas.github}</p>
                <p>
                  <span className="titleProject">Deploiment :</span>
                </p>
                <p>{datas.online}</p>
              </div>
            ) : null}
          </p>
        </div>
      ) : null
    ) : null
  );

  return (
    <div className="ProjetsContainerAll">
      <div className="ProjectContainer">
        <h3>Projets:</h3>
        {mapProjets}
      </div>
      <div className="ProjectContainer">
        <h3>CheckPoints:</h3>
        {mapCheckPoints}
      </div>
      <div className="ProjectContainer">
        <h3>Ateliers:</h3>
        {mapAteliers}
      </div>
      <div className="ProjectContainer">
        <h3>Quetes:</h3>
        {mapQuetes}
      </div>
      <div className="ProjectContainer">
        <h3>Projets Personnels:</h3>
        {mapProjetsPerso}
      </div>
    </div>
  );
}

export default Projets;
