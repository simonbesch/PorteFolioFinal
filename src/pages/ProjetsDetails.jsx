import "../styles/ProjetsDetails.scss";
import { useParams } from "react-router-dom";
import allProjets from "../datas/projetsDatas";

function ProjetsDetails() {
  const { id } = useParams();

  const mapProjetsDetails = allProjets.map((datas) =>
    datas.id === id ? (
      <div key={datas.id} className="DPContainer">
        <h1>{datas.name}</h1>
        {datas.online === "" ? null : (
          <div className="DPOnline">
            <h4>
              <img
                src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
                alt=""
                className="arrowProjet"
              />
              <a href={datas.online} target="_blanck">
                Lien du site (déployement)
              </a>
            </h4>
          </div>
        )}
        {datas.github === "" ? null : (
          <div className="DPGithub">
            <h4>
              <img
                src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
                alt=""
                className="arrowProjet"
              />
              <a href={datas.github} target="_blanck">
                Visiter le repository Github
              </a>
            </h4>
          </div>
        )}
        {datas.lien === "" ? null : (
          <div className="DPLien">
            <h4>
              <img
                src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
                alt=""
                className="arrowProjet"
              />
              <a href={datas.lien} target="_blanck">
                Autre Lien
              </a>
            </h4>
          </div>
        )}
        {datas.mates === "" ? null : (
          <div className="DPMates">
            <h4>Equipe :</h4>
            <p>{datas.mates}</p>
          </div>
        )}
        {datas.description === "" ? null : (
          <div className="DPDescription">
            <h4>Description : </h4>
            <p>{datas.description}</p>
            <br />
            {datas.description2 === "" ? null : <p>{datas.description2}</p>}
            <br />
            {datas.description3 === "" ? null : <p>{datas.description3}</p>}
          </div>
        )}
        {datas.img === "" ? null : (
          <div className="DPimgContainerP">
            <h4>Images du projet :</h4>
            <div className="DPimgContainer">
              <img src={datas.img} alt="" className="DPimg" />
              {datas.img2 === "" ? null : (
                <img src={datas.img2} alt="" className="DPimg" />
              )}
              {datas.img3 === "" ? null : (
                <img src={datas.img3} alt="" className="DPimg" />
              )}
              {datas.img4 === "" ? null : (
                <img src={datas.img4} alt="" className="DPimg" />
              )}
              {datas.img5 === "" ? null : (
                <img src={datas.img5} alt="" className="DPimg" />
              )}
              {datas.img6 === "" ? null : (
                <img src={datas.img6} alt="" className="DPimg" />
              )}
              {datas.img7 === "" ? null : (
                <img src={datas.img7} alt="" className="DPimg" />
              )}
              {datas.img8 === "" ? null : (
                <img src={datas.img8} alt="" className="DPimg" />
              )}
              {datas.img9 === "" ? null : (
                <img src={datas.img9} alt="" className="DPimg" />
              )}
              {datas.img10 === "" ? null : (
                <img src={datas.img10} alt="" className="DPimg" />
              )}{" "}
            </div>
          </div>
        )}
      </div>
    ) : null
  );

  return <div>{mapProjetsDetails}</div>;
}

export default ProjetsDetails;
