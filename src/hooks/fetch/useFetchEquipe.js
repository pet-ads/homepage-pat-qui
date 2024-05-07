import { useState, useEffect } from 'react';

const FetchEquipe = ({ render }) => {
  const [alunos, setAlunos] = useState([]);
  const [tutores, setTutores] = useState([]);
  const [exAlunos, setExAlunos] = useState([]);
  const [exTutores, setExTutores] = useState([]);

  useEffect(() => {
    const fetchIntegrantes = async () => {
      try {
        const response = await fetch('./data/integrantes.json');
        const data = await response.json();
        setAlunos(data.aluno);
        setTutores(data.tutores);
        setExAlunos(data.exAlunos);
        setExTutores(data.exTutores);
      } catch (error) {
        console.error('Ocorreu um erro ao obter os integrantes:', error);
      }
    };

    fetchIntegrantes();
  }, []);

  return render({ alunos, tutores, exAlunos, exTutores });
};

export default FetchEquipe;
