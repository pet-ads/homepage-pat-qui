import "./cardProjeto.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaSearch, FaGraduationCap, FaArchive } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdExtension, MdOutlineComputer } from "react-icons/md";
export default function CardProjeto(props) {
  const [isOpen, setIsOpen] = useState(false);
  const tipo = props.tipo.toLowerCase().trim();
  const link = props.link.toLowerCase().trim();
  function setingIsOpen() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    isOpen
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <motion.div
          className={isOpen ? "card aberto" : "card fechado"}
          onClick={setingIsOpen}
        >
          <motion.div className="logoConteinerOpenned">
            {tipo === "ensino" && <FaGraduationCap className="logo-projeto" />}
            {tipo === "pesquisa" && <FaSearch className="logo-projeto" />}
            {tipo === "extensão" && <MdExtension className="logo-projeto" />}
            {tipo === "extensão-desenvolivmento" && (
              <MdOutlineComputer className="logo-projeto" />
            )}

            <motion.a
              rel="noopener noreferrer"
              target="_blank"
              href={props.link}
            >
              {link.startsWith("https://github.com/") ? (
                <FaGithub className="Icon" />
              ) : (
                <FaArchive className="Icon" />
              )}
            </motion.a>
          </motion.div>

          <motion.div>
            <motion.h2 className="card-titulo">{props.titulo}</motion.h2>
            <motion.p className="card-descricao">{props.descricao}</motion.p>
          </motion.div>
        </motion.div>
      )}

      {isOpen && (
        <>
          <div
            className="card_background"
            onClick={() => setIsOpen(!isOpen)}
          ></div>
          <motion.div className={isOpen ? "card aberto" : "card fechado"}>
            <motion.div className="logoConteinerClosed">
              {tipo === "ensino" && (
                <FaGraduationCap className="logo-projeto" />
              )}
              {tipo === "pesquisa" && <FaSearch className="logo-projeto" />}
              {tipo === "extensão" && <MdExtension className="logo-projeto" />}
              {tipo === "extensão-desenvolivmento" && (
                <MdOutlineComputer className="logo-projeto" />
              )}

              <motion.a
                rel="noopener noreferrer"
                target="_blank"
                href={props.link}
              >
                <FaGithub className="icon-aberto" />
              </motion.a>
            </motion.div>
            <AiFillCloseCircle
              className="closeButton"
              onClick={() => setIsOpen(!isOpen)}
            />

            <motion.div>
              <motion.h2 className="card-titulo">
                {props.titulo} → {props.status}
              </motion.h2>
              <motion.div className="scrowSpace">
                <p className="card--texto__expandido">{props.expandido}</p>
                <div className="card--texto__envolvidos">
                  <p className="card--texto__expandido">{props.tecnologias} </p>
                  <p className="card--texto__expandido"></p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </>
  );
}
