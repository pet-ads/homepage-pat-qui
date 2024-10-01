import styles from "./Requisitos.module.css";
import useFetchProcessos from "../../../../hooks/fetch/useFetchProcesos";

function Requisitos() {
  const { requisitos } = useFetchProcessos();
  return (
    <div className={styles.requisitos}>
      <h2 className={styles.titulo_secundario}>Requisitos</h2>
      <p className={styles.texto}>{requisitos.introducao}</p>
      <ul>
      {requisitos?.requirements?.length > 0 ? (
          requisitos.requirements.map((item, index) => (
            <li key={index} className={styles.texto}>
              {item.text}
            </li>
          ))
        ) : (
          <p>Não há requisitos</p>
        )}
      </ul>
    </div>
  );
}
export default Requisitos;
