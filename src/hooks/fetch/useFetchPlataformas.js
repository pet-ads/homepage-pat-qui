import { useState, useEffect } from "react";

export default function useFetchPlataformas() {
  const FETCH_URL = "./data/plataformas.json";
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    const fetchDataPlataforms = async () => {
      try {
        const response = await fetch(FETCH_URL);
        if (!response.ok)
          throw new Error(
            `Falha na requisição ao servidor. Status: ${response.status}`
          );
        const data = await response.json();
        const { plataformas } = data;
        setPlataformas(plataformas);
      } catch (error) {
        console.error(`Erro na busca das plataformas digitais: ${error}`);
      }
    };
    fetchDataPlataforms();
  }, []);

  return { plataformas };
}
