import "./projetos.css";
import React from "react";
import Header from "../../components/ui/Header/header";
import useIsMobile from "../../hooks/window/useIsMobile";
import FetchProj from "../../hooks/fetch/useFetchProjetos";
import CardProjeto from "./SubComponentes/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";

export default function Projetos() {
  const isMobile = useIsMobile();

  return (
    <>
      <MenuNavegacao />
      <div className="menu-projetos--corpo">
        <Header
          texto={
            isMobile
              ? "Projetos do PET/QUI"
              : "Projetos Desenvolvidos pelo PET/QUI"
          }
        />
        <section className="menu-projetos">
          <FetchProj
            render={(arrProjetos) =>
              arrProjetos.map((projetos) => (
                <CardProjeto
                  key={projetos.id}
                  titulo={projetos.titulo}
                  status={projetos.status}
                  tipo={projetos.tipo}
                  link={projetos.link}
                  descricao={projetos.descricao}
                  expandido={projetos.expandido}
                  tecnologias={projetos.tecnologias}
                ></CardProjeto>
              ))
            }
          />
        </section>
      </div>
    </>
  );
}
