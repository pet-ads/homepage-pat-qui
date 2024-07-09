import { AiOutlineCloudDownload } from "react-icons/ai";
import React, { useEffect, useState } from "react";
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
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (estado.toLowerCase() !== "encerrado") {
      setSubject(
        "Inscrição no Processo Seletivo PET Química - IFSP Campus Sertãozinho"
      );
      setBody(
        "Olá,%0D%0A%0D%0AGostaria de obter mais informações sobre o edital do processo seletivo do PET Química do IFSP Campus Sertãozinho. Estou interessado em participar do edital vigente do programa e gostaria de esclarecer algumas dúvidas que não estão disponíveis no site sobre os documentos necessários, critérios de seleção, cronograma e outras informações relevantes.%0D%0A%0D%0AAgradeço antecipadamente pela sua atenção e aguardo seu retorno.%0D%0A%0D%0AAtenciosamente,%0D%0A%0D%0A[Seu Nome]%0D%0A[Seu E-mail]"
      );
    } else {
      setSubject(
        "Informações sobre futuros editais do PET Química - IFSP Campus Sertãozinho"
      );
      setBody(
        "Olá,%0D%0A%0D%0AGostaria de obter mais informações sobre quando serão publicados novos editais para o processo seletivo do PET Química do IFSP Campus Sertãozinho. Estou interessado em participar do programa futuramente e gostaria de esclarecer algumas dúvidas que não estão disponíveis no site sobre os documentos necessários, critérios de seleção, cronograma e outras informações relevantes.%0D%0A%0D%0AAgradeço antecipadamente pela sua atenção e aguardo seu retorno.%0D%0A%0D%0AAtenciosamente,%0D%0A%0D%0A[Seu Nome]%0D%0A[Seu E-mail]"
      );
    }
  }, [estado]);

  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <p className={styles.texto}>
        {texto_1}{" "}
        <a
          className={styles.email}
          href={`mailto:${email}?subject=${subject}&body=${body}`}
          target="_blank"
          rel="noreferrer"
        >
          {email}
        </a>
        .
      </p>
      {estado.toLowerCase() === "encerrado" ? (
        <p className={styles.texto}>
          {texto_2} <span className={styles.encerrado}>{data}</span> ({estado}.)
        </p>
      ) : (
        <p className={styles.texto}>
          {texto_2} {data} ({estado}).
        </p>
      )}
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
