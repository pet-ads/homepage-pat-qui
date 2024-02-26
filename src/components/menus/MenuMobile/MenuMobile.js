import './MenuMobile.css';
import menuIcon from './menu-icon.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuMobileDropdown = ({ items }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`menu-mobile ${isDropdownOpen ? 'active' : ''}`}>
      <img
        className="menu-icon"
        src={menuIcon}
        alt="Menu"
        onClick={toggleDropdown}
      />
      {isDropdownOpen && (
        <div className="dots" onClick={toggleDropdown}>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="shadow cut"></div>
          <div className="container cut">
            <div className="drop cut2"></div>
          </div>
          <div className="list">
            <ul>
              {items.map((item) => (
                 <NavLink
                 exact
                 to={item.path}
                 className="dropdown-link"
                 activeClassName="active"
                 onClick={toggleDropdown}
               >
                  <li key={item.path}>
                  
                      {item.label}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
          <div className="dot"></div>
        </div>
      )}
      {isDropdownOpen && <div className="cursor" onClick={toggleDropdown}></div>}
    </div>
  );
};

export default MenuMobileDropdown;