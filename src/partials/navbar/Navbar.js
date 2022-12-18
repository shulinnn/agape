import React, { useState } from "react";
import { Menu, X } from "react-feather";

import "./Navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  ///
  /// Comment comes here
  ///
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar-wrapper">
          <span>AGAPE</span>
          {!isOpen ? (
            <Menu
              color="black"
              size={32}
              strokeWidth={1}
              onClick={handleToggle}
            />
          ) : (
            <X color="black" size={32} strokeWidth={1} onClick={handleToggle} />
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
