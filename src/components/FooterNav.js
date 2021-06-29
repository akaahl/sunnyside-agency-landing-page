import styled from "styled-components";
import logoGreen from "../assets/logo - green.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";

const FooterNav = () => {
  return (
    <StyledFooter>
      <img src={logoGreen} alt="logo green" />

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
      </ul>

      <div className="social-links">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={pinterest} alt="pinterest" />
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.nav`
  padding: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsl(167, 44%, 70%);

  ul {
    list-style: none;
    display: flex;
    margin: 2rem 0 4rem 0;

    li {
      margin: 0 2rem;

      a {
        font-weight: 600;
        text-decoration: none;
        color: #2c7566;
      }
    }
  }

  .social-links {
    img {
      margin: 0 1rem;
    }
  }
`;

export default FooterNav;
