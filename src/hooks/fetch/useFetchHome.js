import { useEffect, useState } from "react";

const useFetchHome = () => {
  const [AboutPET, setAboutPET] = useState(null);
  const [Purpose, setPurpose] = useState(null);

  useEffect(() => {
    const getHome = async () => {
      try {
        const response = await fetch("./data/home.json");
        const data = await response.json();
        setAboutPET(data.AboutPET);
        setPurpose(data.Purpose);
      } catch (e) {
        console.log("Ocorreu um erro ao obter os dados de Home:", e);
      }
    };
    getHome();
  }, []);

  return { AboutPET, Purpose };
};

export default useFetchHome;
