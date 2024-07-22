import React from "react";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/home";
import Equipe from "./pages/Equipe/equipe";
import Footer from "./components/ui/Footer/footer";
import Projetos from "./pages/Projetos/projetos";
import NotFound from "./pages/NotFound/NotFound";
import ProcessoSeletivo from "./pages/ProcessoSeletivo/ProcessoSeletivo";
import MenuNavegacao from "./components/menus/MenuNavegacao/menuNavegacao";
import { Route, Routes, HashRouter } from "react-router-dom";

function RouterApp() {
  return (
    <HashRouter>
      <MenuNavegacao/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/processo-seletivo" element={<ProcessoSeletivo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default RouterApp;
