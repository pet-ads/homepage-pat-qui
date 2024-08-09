import React, { useState } from "react";
import styles from "./CardAluno.module.css";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const withBlur = { filter: "blur(2px) grayscale(80%) brightness(0.5)" };
const noBlur = { filter: "blur(0px) grayscale(0%)" };

function CardAluno({ nome, srcFoto, tipo, github, linkedin }) {
  const [blurred, setBlur] = useState(noBlur);
  let altFoto = `Foto do(a) ${nome}, tutor(a) do PET QUI do IFSP Sertãozinho`;

  return (
    <div className={styles.card}>
      <div
        className={styles.imgContainer}
        onMouseEnter={() => setBlur(withBlur)}
        onMouseLeave={() => setBlur(noBlur)}
      >
        <img
          style={blurred}
          className={styles.img}
          src={srcFoto}
          alt={altFoto}
        />
        <div className={styles.iconWrapper}>
          {/* <a href={github} target="_blank" rel="noopener noreferrer">
            <span className={styles.githubIcon}>
              <FaGithub />
            </span>
          </a> */}
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles.linkedinIcon}>
              <FaLinkedin />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.descricao}>
        <strong>
          <p className={styles.p}>{nome}</p>
        </strong>
        <strong>
          <p className={styles.p}>{tipo}</p>
        </strong>
        <pre></pre>
      </div>
    </div>
  );
}

export default CardAluno;
