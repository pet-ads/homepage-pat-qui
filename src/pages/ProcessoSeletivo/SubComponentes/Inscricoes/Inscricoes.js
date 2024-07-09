import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./Inscricoes.module.css";

function Inscricoes({
  titulo,
  texto_1,
  email,
  texto_2,
  data,
  estado,
  texto_3,
}) {
  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.texto}>
        {texto_1}{" "}
        <a
          className={styles.email}
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
        >
          {email}
        </a>
        .
      </p>
      <p className={styles.texto}>
        {texto_2} <span className={styles.encerrado}>{data}</span> {estado}
      </p>
      <p className={styles.texto}>{texto_3} </p>
      <p className={styles.download}>
        <a href="a" rel="noreferrer" target="_blank">
          <AiOutlineCloudDownload className={styles.btnDownload} />
        </a>
      </p>
    </div>
  );
}
export default Inscricoes;
