import React from 'react';

import {NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navBar">
        <h1>Travelia</h1>
        <div className="links">
          <NavLink to='/'><p>Home</p></NavLink>
          <NavLink to='/progs'><p>Programes</p></NavLink>
          <NavLink to='/about'><p>About</p></NavLink>
        </div>

        <h2>Contact Us</h2>
      </div>
    </>
  );
}

export default Navbar;
