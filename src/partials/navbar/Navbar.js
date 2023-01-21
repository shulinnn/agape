import React, { useState } from "react";
import NavbarLink from "components/NavbarLink";
import { Menu, X } from "react-feather";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to={"/o-nas"}>
              <li>O NÁS</li>
            </Link>
            <Link to={"/nase-pokoje"}>
              <li>POKOJE</li>
            </Link>
          </ul>
          <span>Penzion Agape</span>
          <ul>
            <Link to={"/galerie"}>
              <li>GALERIE</li>
            </Link>
            <Link to={"/rezervace"}>
              <li>REZERVACE</li>
            </Link>
            <Link to={"/kontakt"}>
              <li>KONTAKT</li>
            </Link>
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
