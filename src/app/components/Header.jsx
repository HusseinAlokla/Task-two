'use client';

import {RxHamburgerMenu} from "react-icons/rx"
import React, { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center">
        
        <div className="desktop-menu hidden md:flex space-x-4">
          
          <a href="/about" class = 'text-orange-600'>About</a>
          <a href="/features">Features</a>
          <a href="/clients">Clients</a>
          <a href="/plans">Plans</a>
        </div>
        <div className="mobile-menu md:hidden">
          <div className="menu-icon" onClick={toggleMobileMenu}>
            < RxHamburgerMenu size={10}/>
            
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu-items">
              
              <a href="/about">About</a>
              <a href="/features">Features</a>
              <a href="/clients">Clients</a>
              <a href="/plans">Plans</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
          {/*<div className="flex mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
            <h4 className="text-orange-600 mb-2 md:mb-0">About</h4>
            <h4 className="mb-2 md:mb-0">Features</h4>
            <h4 className="mb-2 md:mb-0">Clients</h4>
  <h4 className="mb-2">Plans</h4>*/}