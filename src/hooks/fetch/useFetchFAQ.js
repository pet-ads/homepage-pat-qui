import { useState, useEffect } from 'react';

const FetchFaq = ({ render }) => {
  const [arrFaq, setFaq] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch('./data/faq.json');
        const data = await response.json();
        setFaq(data.faqs);
      } catch (error) {
        console.error('Ocorreu um erro ao obter o FAQ:', error);
      }
    };

    fetchFaq();
  }, []);

  return render(arrFaq);
};

export default FetchFaq;
