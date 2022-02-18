import React, { useState } from 'react';
import { Button } from './Button';
import './Header.css';


function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href="/#" className='nav-links' onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li
            className='nav-item'

          >
            <a href="/#"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </a>
          </li>
          <li className='nav-item'>
            <a href="/#"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Products
            </a>
          </li>
          <li className='nav-item'>
            <a href="/#"
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="/#"
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </a>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
      
    </>
  );
}

export default Header;
