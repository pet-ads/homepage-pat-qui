import { useState, useEffect } from "react";

function useFetchProcessos() {
  const FETCH_URL = "./data/processos.json";
  const [inscricao, setInscricao] = useState({});
  const [requisitos, setRequisitos] = useState({});
  const [informacoes, setInformacoes] = useState("");

  useEffect(() => {
    const getProcessos = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok)
          throw new Error(
            `Falha na requisição ao servidor. Status: ${response.status}`
          );
        const data = await response.json();
        const {
          inscricoesContent,
          requisitosContent,
          processoSeletivoContent,
        } = data;

        setInscricao(inscricoesContent);
        setRequisitos(requisitosContent);
        setInformacoes(processoSeletivoContent);
      } catch (e) {
        console.log(
          `Ocorreu um erro ao requisitar os dados de processo seletivo: ${e}.`
        );
      }
    };
    getProcessos();
  }, []);

  return { inscricao, requisitos, informacoes };
}

export default useFetchProcessos;
