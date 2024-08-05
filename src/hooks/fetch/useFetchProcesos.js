import { useState, useEffect } from "react";

const FetchProcessos = ({ render }) => {
  const [cabecalho, setcabecalho] = useState({});
  const [requisitos, setRequisitos] = useState({});
  const [inscricao, setIncricao] = useState({});

  useEffect(() => {
    const getProcessos = async () => {
      try {
        const response = await fetch("./data/processos.json");
        const data = await response.json();
        setcabecalho(data.cabecalho);
        setRequisitos(data.requisitos);
        setIncricao(data.inscricao);
      } catch (e) {
        console.error(
          "Ocorreu um erro ao obter os dados de processos seletivos:",
          e
        );
      }
    };
    getProcessos();
  }, []);

  return render({ cabecalho, requisitos, inscricao });
};

export default FetchProcessos;
