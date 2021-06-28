import styled from "styled-components";
import egg from "../assets/desktop/image-transform.jpg";
import glass from "../assets/desktop/image-stand-out.jpg";
import cherry from "../assets/desktop/image-graphic-design.jpg";
import orange from "../assets/desktop/image-photography.jpg";

const ContentOne = () => {
  return (
    <StyledMain>
      <section className="egg"></section>
      <section className="egg-content">
        <h2>Transform your brand</h2>

        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <button>Learn more</button>
      </section>

      <section className="glass"></section>
      <section className="glass-content">
        <h2>Stand out to the right audience</h2>

        <p>
          Using a collaborative formula designers, researchers, photographers,
          videographers, and copywriters, we'll build and extend your brand in
          digital places.
        </p>

        <button>Learn more</button>
      </section>

      <section className="cherry">
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </section>

      <section className="orange">
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning photos that
          improve your business image.
        </p>
      </section>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 500px);

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
        border-radius: 5px;
        height: 5px;
        background: hsl(51, 100%, 49%);
        z-index: -1;
      }
    }
  }

  .glass {
    grid-area: glass;
    background: url(${glass});
    background-size: 100% 100%;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .glass-content {
    grid-area: glass-content;
    padding: 6rem;

    h2 {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 900;
      width: 80%;
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
        border-radius: 5px;
        background: hsl(7, 99%, 70%);
        z-index: -1;
      }
    }
  }

  .cherry,
  .orange {
    padding: 4rem 2rem 3rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    h3,
    p {
      text-align: center;
    }

    h3 {
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    p {
      width: 60%;
      font-weight: 600;
    }
  }

  .cherry {
    grid-area: cherry;
    background: url(${cherry});
    background-size: 100% 100%;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    h3,
    p {
      color: hsl(167, 40%, 24%);
    }
  }

  .orange {
    grid-area: orange;
    background: url(${orange});
    background-size: 100% 100%;
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    h3,
    p {
      color: hsl(198, 62%, 26%);
    }

    p {
      width: 55%;
    }
  }
`;

export default ContentOne;
