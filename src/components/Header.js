import React from "react";
import logo from '..assets/logo.png'

function Header() {
  return (
    <header>
      {/* The header content will go here */}
      <img src={logo} alt="Little Lemon Logo" />
      Header
    </header>
  );
}

export default Header;