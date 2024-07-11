import styles from "./Requisitos.module.css";
function Requisitos({ titulo, texto, item_1, item_2, item_3 }) {
  return (
    <div className={styles.requisitos}>
      <h2 className={styles.titulo_secundario}>{titulo}</h2>
      <p className={styles.texto}>{texto}</p>
      <ul>
        <li className={styles.texto}>{item_1}</li>
        <li className={styles.texto}>{item_2} </li>
        <li className={styles.texto}>{item_3} </li>
      </ul>
    </div>
  );
}
export default Requisitos;
