import './global/App.css';
import React from 'react';
import Faq from './pages/Faq/Faq';
import Home from './pages/Home/home';
import Equipe from './pages/Equipe/equipe';
import Footer from './components/ui/Footer/footer';
import Projetos from './pages/Projetos/projetos';
import { Route, Routes, HashRouter } from 'react-router-dom';
import ProcessoSeletivo from './pages/ProcessoSeletivo/ProcessoSeletivo';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/processo-seletivo" element={<ProcessoSeletivo />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
