import './menuNavegacao.css';
import { NavLink } from 'react-router-dom';
import LogoIFSP from '../../logos/LogoIFSP/LogoIFSP';
import React, { useEffect, useState } from 'react';
import MenuMobileDropdown from '../MenuMobile/MenuMobile';

export default function MenuNavegacao() {
  const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setLarguraJanela(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = [
    { path: '/', label: 'Home' },
    { path: '/projetos', label: 'Projetos' },
    { path: '/equipe', label: 'Equipe' },
    { path: '/processo-seletivo', label: 'Processo Seletivo' },
    { path: '/faq', label: 'FAQ' },
  ];

  return (
    <div className="menu">
      <LogoIFSP />
      {larguraJanela < 775 ? (
        <MenuMobileDropdown items={items} />
      ) : (
        <ul className="menu-navegacao">
          <li>
            <NavLink exact to="/" className="menu-navegacao--link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projetos" className="menu-navegacao--link">
              Projetos
            </NavLink>
          </li>
          <li>
            <NavLink to="/equipe" className="menu-navegacao--link">
              Equipe
            </NavLink>
          </li>
          <li>
            <NavLink to="/processo-seletivo" className="menu-navegacao--link">
              Processo Seletivo
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className="menu-navegacao--link">
              FAQ
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}
