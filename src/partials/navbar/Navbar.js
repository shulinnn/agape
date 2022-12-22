import React, { useState } from "react";
import NavbarLink from "components/NavbarLink";
import { Menu, X } from "react-feather";

import "./Navbar.css";
import { Link } from "react-router-dom";

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
        <div className="navbar wrapper">
          <ul>
            <Link to={"/"}>
              <li>ÚVOD</li>
            </Link>
            <li>O NÁS</li>
            <li>NAŠE POKOJE</li>
          </ul>
          <span>Penziony Luhačovice</span>
          <ul>
            <li>GALERIE</li>
            <li>KONTAKT</li>
            <li>REZERVACE</li>
          </ul>
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
        {isOpen && (
          <ul className="mobile-menu">
            <NavbarLink linkName="ÚVOD" />
            <NavbarLink linkName="O NÁS" />
            <NavbarLink linkName="NAŠE POKOJE" />
            <NavbarLink linkName="GALERIE" />
            <NavbarLink linkName="KONTAKT" />
            <NavbarLink linkName="REZERVACE" />
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
