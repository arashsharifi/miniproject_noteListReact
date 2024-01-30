import styles from "./StudyItem.module.css";
function StudyItem({ onDataStudy }) {
  return (
    <div className={styles.containerItem}>
      <h3>this note is :{onDataStudy.title}</h3>
      <h4>{onDataStudy.decriptionOne}</h4>
      <h4>{onDataStudy.decriptiontwo}</h4>
    </div>
  );
}
export default StudyItem;
