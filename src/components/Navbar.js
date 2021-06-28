import styled from "styled-components";
import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";

const Navbar = () => {
  return (
    <StyledNav>
      <img src={logo} alt="sunnyside agency logo" />

      <ul>
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

      <img src={hamburgerIcon} alt="hamburger" className="hamburger-icon" />
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

  ul {
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
      }
    }
  }

  .hamburger-icon {
    display: none;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }

    .hamburger-icon {
      display: block;
    }
  }
`;

export default Navbar;
