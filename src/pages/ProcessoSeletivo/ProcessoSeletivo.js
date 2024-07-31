import "./ProcessoSeletivo.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";
import FetchProcessos from "../../hooks/fetch/useFetchProcesos";

function ProcessoSeletivo() {
  return (
    <>
      <div className="corpo">
        <FetchProcessos
          render={({ cabecalho, requisitos, inscricao }) => (
            <>
              <Cabecalho titulo={cabecalho.titulo} texto={cabecalho.texto} />
              <section className="corpo_informacoes">
                <Requisitos
                  titulo={requisitos.titulo}
                  texto={requisitos.texto}
                  item_1={requisitos.item_1}
                  item_2={requisitos.item_2}
                  item_3={requisitos.item_3}
                />
                <Inscricoes
                  titulo={inscricao.titulo}
                  texto_1={inscricao.texto_1}
                  email={inscricao.email}
                  texto_2={inscricao.texto_2}
                  data={inscricao.data}
                  estado={inscricao.estado}
                  texto_3={inscricao.texto_3}
                />
              </section>
            </>
          )}
        />
      </div>
    </>
  );
}

export default ProcessoSeletivo;
