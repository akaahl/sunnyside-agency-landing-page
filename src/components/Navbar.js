import { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <StyledNav>
      <img src={logo} alt="sunnyside agency logo" />

      <ul className="desktop-menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <button className="nav-btn">Contact</button>
        </li>
      </ul>

      {!mobileOpen && (
        <img
          src={hamburgerIcon}
          alt="hamburger"
          className="hamburger-icon"
          onClick={() => setMobileOpen(true)}
        />
      )}

      {mobileOpen && (
        <img
          src={closeIcon}
          alt="close"
          className="close-icon"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <ul className="mobile-menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <button>Contact</button>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .desktop-menu {
    list-style: none;
    display: flex;
    align-items: center;

    li {
      margin: 0 1.5rem;

      a {
        text-decoration: none;
        color: hsl(0, 0%, 100%);
      }

      .nav-btn {
        font-family: "Fraunces", sans-serif;
        padding: 0.8rem 1.5rem;
        border: none;
        background: hsl(0, 0%, 100%);
        border-radius: 1.5rem;
        color: hsl(212, 27%, 19%);
        font-weight: 900;
        text-transform: uppercase;
        transition: all 0.23s ease;

        &:hover {
          background: hsl(212, 27%, 19%);
          color: hsl(0, 0%, 100%);
        }
      }
    }
  }

  .mobile-menu {
    position: absolute;
    background: hsl(0, 0%, 100%);
    padding: 4rem 6rem;
    top: 8rem;
    right: 2rem;
    list-style: none;

    li {
      margin: 1rem 0;
      text-align: center;

      a {
        text-decoration: none;
        color: hsl(232, 10%, 55%);
        font-size: 1.2rem;
      }

      button {
        background: hsl(167, 44%, 70%);
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 2rem;
        font-size: 1.2rem;
        margin-top: 1rem;
        color: hsl(0, 0%, 100%);
        transition: all 0.3s ease;

        &:hover {
          background: hsl(168, 34%, 41%);
        }
      }
    }
  }

  .hamburger-icon,
  .close-icon {
    display: none;
    cursor: pointer;
  }

  /* .hamburger-icon {
    &.closed {
      display: none;
    }
  }

  .close-icon {
    &.open {
      display: block;
    }
  } */

  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }

    .hamburger-icon,
    .close-icon {
      display: block;
    }
  }

  @media (max-width: 375px) {
    .mobile-menu {
      padding: 4rem 2rem;
    }
  }
`;

export default Navbar;
