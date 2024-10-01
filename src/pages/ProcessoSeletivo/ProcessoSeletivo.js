import "./ProcessoSeletivo.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";

function ProcessoSeletivo() {
  return (
    <>
      <div className="corpo">
        <Cabecalho />
        <section className="corpo_informacoes">
          <Requisitos />
          <Inscricoes />
        </section>
      </div>
    </>
  );
}

export default ProcessoSeletivo;
