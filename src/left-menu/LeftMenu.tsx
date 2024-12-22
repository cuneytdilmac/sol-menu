import React, { useState } from 'react';
import './LeftMenu.css';
import About from './about/About';
import Market from './market/Market';
import Users from './users/Users';

export default function LeftMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="menu-toggle-button" onClick={toggleMenu}>
        {isOpen ? 'Kapat' : 'Aç'}
      </button>
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <div className="menu-buton-container">
          <a href="/about">Hakkında</a>
        </div>
        <div className="menu-buton-container">
          <a href="/market">Market</a>
        </div>
        <div className="menu-buton-container">
          <a href="/users">Kullanıcılar</a>
        </div>
      </div>
    </>
  );
}
