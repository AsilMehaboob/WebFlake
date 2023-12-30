import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const iconStyle = { width: '20px', height: '20px' };

  return (
    <nav className='navbar-class'>
      <h1>Treats & Reels</h1>
      <ul className='listing'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/recipes'>Recipes</Link>
        </li>
        <li>
          <Link to='/movies'>Movies</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <div className="icons">
        {/* Add any icons or additional elements here */}
      </div>
    </nav>
  );
};

export default Navbar;
