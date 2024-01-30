import { useState } from "react";
import pic from "../images/rafiki.png";
import styles from "./Homee.module.css";
import ModalInfoHome from "./ModalInfoHome";
import { listsNote } from "../data";
import NoteColor from "./NoteColor";

function Homee({ handlerPage, handlerIdData, sendData }) {
  const [modalShow, setModalShow] = useState(false);
  // const [notes, setNotes] = useState(listsNote);
  // function handlerIdData(id) {
  //   console.log(id);
  // }
  return (
    <div className={styles.containerHome}>
      <div className={styles.header}>
        <h1>Notes</h1>
        <div className={styles.svgContainer}>
          <div className={styles.svgC}>
            <button className={styles.btn}>
              <i className="bi bi-search"></i>
            </button>
          </div>
          <div className={styles.svgC}>
            <button onClick={() => setModalShow(true)} className={styles.btn}>
              <i className="bi bi-info-circle"></i>
            </button>
          </div>
        </div>
      </div>
      <div className={listsNote.length > 0 ? "d-none" : "d-block"}>
        <img className={styles.imgInfo} src={pic} alt="noot" />
        <p>Creat your first note!</p>
      </div>
      <div className={styles.notesContainer}>
        {sendData.map((note) => (
          <div
            onClick={() => handlerPage("noteStudy")}
            key={note.id}
            className={styles.note}
          >
            <NoteColor
              key={note.id}
              ondata={note}
              handlerIdData={handlerIdData}
            />
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.plasBtn}
          onClick={() => handlerPage("creatNote")}
        >
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
      <ModalInfoHome show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}
export default Homee;
