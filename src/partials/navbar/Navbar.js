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
            <Link to={"/"}>
              <NavbarLink linkName="ÚVOD" />
            </Link>
            <Link to={"/o-nas"}>
              <NavbarLink linkName="O NÁS" />
            </Link>
            <Link to={"/nase-pokoje"}>
              <NavbarLink linkName="NAŠE POKOJE" />
            </Link>
            <Link to={"/galerie"}>
              <NavbarLink linkName="GALERIE" />
            </Link>
            <Link to={"/kontakt"}>
              <NavbarLink linkName="KONTAKT" />
            </Link>
            <Link to={"/rezervace"}>
              <NavbarLink linkName="REZERVACE" />
            </Link>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
