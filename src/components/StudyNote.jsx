import styles from "./StudyNote.module.css";
import StudyItem from "./StudyItem";
import { useState } from "react";
import ModalStudy from "./ModalStudy";

function StudyNote({ handlerPage, findId, handlerToDelete, sendData }) {
  console.log(findId);
  const [modalShow, setModalShow] = useState(false);

  const findObj = sendData.find((item) => item.id === findId);
  console.log(sendData);
  console.log(findObj);

  const objToList = [];
  objToList.push(findObj);
  function isDelete(bolli) {
    if (bolli) {
      handlerToDelete(findId);
    }
  }
  return (
    <div className={styles.containerStudy}>
      <div className={styles.itemHeader}>
        <button onClick={() => handlerPage("home")} className={styles.btnS}>
          <i className="bi bi-chevron-compact-left"></i>
        </button>
        <button onClick={() => setModalShow(true)} className={styles.btnS}>
          <i className="bi bi-trash3"></i>
        </button>
      </div>
      <div className={styles.study}>
        {objToList.map((item) => (
          <StudyItem key={item.id} onDataStudy={item} />
        ))}
      </div>
      <ModalStudy
        show={modalShow}
        onHide={() => setModalShow(false)}
        isDelete={isDelete}
      />
    </div>
  );
}
export default StudyNote;
