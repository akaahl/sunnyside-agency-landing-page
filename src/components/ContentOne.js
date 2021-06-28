import styled from "styled-components";
import egg from "../assets/desktop/image-transform.jpg";
import glass from "../assets/desktop/image-stand-out.jpg";
import cherry from "../assets/desktop/image-graphic-design.jpg";
import orange from "../assets/desktop/image-photography.jpg";

const ContentOne = () => {
  return (
    <StyledMain>
      <div className="content egg"></div>
      <div className="content egg-content">
        <h2>Transform your brand</h2>

        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <button>Learn more</button>
      </div>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;

  grid-template-areas:
    "egg-content egg"
    "glass glass-content"
    "cherry orange";

  .egg {
    grid-area: egg;
    background: url(${egg});
    background-size: 100% 100%;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .egg-content {
    grid-area: egg-content;
    padding: 6rem;

    h2 {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 900;
      width: 60%;
      color: hsl(212, 27%, 19%);
    }

    p {
      margin-top: 2rem;
      line-height: 150%;
      color: hsl(232, 10%, 55%);
      font-weight: 600;
      width: 80%;
    }

    button {
      background: none;
      border: none;
      text-transform: uppercase;
      margin-top: 2rem;
      color: hsl(212, 27%, 19%);
      font-weight: 900;
      font-size: 1rem;
      padding: 0 0.5rem;
      position: relative;
      z-index: 10;

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 5px;
        width: 97%;
        height: 5px;
        background: hsl(51, 100%, 49%);
        z-index: -1;
      }
    }
  }
`;

export default ContentOne;
