import styled from "styled-components";
import headerImage from "../assets/desktop/image-header.jpg";
import mobileHeader from "../assets/mobile/image-header.jpg";
import downArrow from "../assets/icon-arrow-down.svg";

const Header = () => {
  return (
    <StyledHeader>
      <h1>We are creatives</h1>
      <img src={downArrow} alt="down arrow" className="down-arrow" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 100vh;
  background: url(${headerImage});
  background-size: 100% 100%;
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    text-transform: uppercase;
    color: hsl(0, 0%, 100%);
    margin-top: -5rem;
    font-size: 3.5rem;
    letter-spacing: 0.4rem;
  }

  .down-arrow {
    margin-top: 3.7rem;
    height: 5rem;
  }

  @media (max-width: 768px) {
    background: url(${mobileHeader});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;

    h1 {
      text-align: center;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (min-height: 1024px) {
    height: 65vh;
  }
`;

export default Header;
