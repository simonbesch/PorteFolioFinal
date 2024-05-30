import skills from "../datas/skillsDatas";
import "../styles/Skills.scss";

function Skills() {
  const mapSkillsTechno = skills.map((data, index) =>
    data.categorie === "Technos" ? (
      <p key={index} className="TechAndImg">
        <img src={data.icon} alt={data.name} />
        <li className={data.niveauCSS}>{data.name}</li>
      </p>
    ) : null
  );
  const mapSkillsAutresTechnos = skills.map((data, index) =>
    data.categorie === "AutresTechnos" ? (
      <p key={index} className="TechAndImg">
        <img src={data.icon} alt={data.name} />
        <li className={data.niveauCSS}>{data.name}</li>
      </p>
    ) : null
  );
  const mapSkillsLociciels = skills.map((data, index) =>
    data.categorie === "Logiciels" ? (
      <p key={index} className="TechAndImg">
        <img src={data.icon} alt={data.name} />
        <li className={data.niveauCSS}>{data.name}</li>
      </p>
    ) : null
  );
  const mapSkillsInteretPerso = skills.map((data, index) =>
    data.categorie === "Langues" ? (
      <p key={index} className="TechAndImg">
        <img src={data.icon} alt={data.name} />
        <li className={data.niveauCSS}>{data.name}</li>
      </p>
    ) : null
  );
  const mapSkillsLangues = skills.map((data, index) =>
    data.categorie === "InteretPerso" ? (
      <p key={index} className="TechAndImg">
        <img src={data.icon} alt={data.name} />
        <li className={data.niveauCSS}>{data.name}</li>
      </p>
    ) : null
  );

  return (
    <div className="skillsContainer">
      <h1>Mes skills </h1>
      <div className="skillsContainerC">
        <div className="skillsContainerD">
          <h4>Technos :</h4>
          <ul>{mapSkillsTechno}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Autres Technos :</h4>
          <ul>{mapSkillsAutresTechnos}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Lociciels :</h4>
          <ul>{mapSkillsLociciels}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Interets Personnels :</h4>
          <ul>{mapSkillsInteretPerso}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Langues :</h4>
          <ul>{mapSkillsLangues}</ul>
        </div>
      </div>
    </div>
  );
}
export default Skills;
