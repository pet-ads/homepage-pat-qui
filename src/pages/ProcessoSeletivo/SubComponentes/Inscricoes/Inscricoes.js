import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./Inscricoes.module.css";
import useFetchProcessos from "../../../../hooks/fetch/useFetchProcesos";

function Inscricoes() {
  const { inscricao } = useFetchProcessos();

  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>Inscrições</h2>
      <p className={styles.texto}>
        {inscricao.introducao} {""}
        <a
          className={styles.email}
          href={`mailto:${inscricao.email}?subject=Processo Seletivo PET Química - IFSP Campus Sertãozinho`}
          target="_blank"
          rel="noreferrer"
        >
          {inscricao.email}
        </a>
      </p>
      {inscricao.estado &&
      inscricao.estado.trim().toLowerCase() === "encerrado" ? (
        <p className={styles.texto}>
          {inscricao.prazo}{" "}
          <span className={styles.encerrado}>{inscricao.data}</span> (
          {inscricao.estado})
        </p>
      ) : (
        <p className={styles.texto}>
          {inscricao.prazo}{" "}
          <span className={styles.ativo}>{inscricao.data}</span> (
          {inscricao.estado})
        </p>
      )}
      <p className={styles.texto}>{inscricao.detalhes} </p>
      <a
        className={styles.download}
        href={inscricao.drive}
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineCloudDownload className={styles.btnDownload} />
      </a>
    </div>
  );
}

export default Inscricoes;
