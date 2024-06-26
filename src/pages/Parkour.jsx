import cv from "../datas/parkourDatas";
import "../styles/Parkour.scss";
import { useState } from "react";
import Modal from "react-modal";
import trial from "../assets/icons/trial.png";

function Parkour() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [divData, setDivData] = useState("");
  const [isData, setIsData] = useState(false);
  const [isCroissant, setIsCroissant] = useState(true);

  const mapCv = cv.map((data) => (
    <p key={data.id}>
      <li className="liDate">
        {data.date}, {data.lieu} :
      </li>
      <li
        className="liEvenement"
        onClick={() => {
          {
            isData ? setDivData("") : setDivData(data), setIsData(!isData);
          }
        }}
      >
        {data.evenement}
      </li>
      <div
        onClick={() => {
          setModalData(data);
          setModalIsOpen(true);
        }}
      >
        {divData.id === data.id ? <p>{data.description}</p> : null}
      </div>
    </p>
  ));

  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      transform: "translate(-40%, -10%)",
      color: "black",
    },
  };

  const trialChange = () => {
    setIsCroissant(!isCroissant);
  };

  return (
    <div className="parkourContainer">
      <div className="parkourAndTrial">
        <h1>Mon Parcour Professionnel : </h1>
        <button className="btnTrial" onClick={trialChange}>
          <img src={trial} alt="Trier" className="imgTrial" />
        </button>
      </div>

      <ul
        className={isCroissant ? "ulParkourDeCroissant" : "ulParkourCroissant"}
      >
        {mapCv}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h1>{modalData.evenement}</h1>
        <p>{modalData.date}</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>X</button>
        </div>
      </Modal>
    </div>
  );
}
export default Parkour;
