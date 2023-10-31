'use client';
import React, { useState } from 'react';
import {RxHamburgerMenu} from "react-icons/rx"


function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="desktop-menu hidden md:flex space-x-4">
          <a href="/about" className="text-orange-600">
            About
          </a>
          <a href="/features">Features</a>
          <a href="/clients">Clients</a>
          <a href="/plans">Plans</a>
        </div>
        <div className="mobile-menu md:hidden">
          <div className="menu-icon" onClick={openDrawer}>
            <RxHamburgerMenu size={20} />
          </div>
          <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <button onClick={closeDrawer}style={{ marginLeft: '-10px'}}>&times;</button>
            <a href="/about">About</a>
            <a href="/features">Features</a>
            <a href="/clients">Clients</a>
            <a href="/plans">Plans</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
