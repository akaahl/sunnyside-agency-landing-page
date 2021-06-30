import styled from "styled-components";
import emily from "../assets/image-emily.jpg";
import jennie from "../assets/image-jennie.jpg";
import thomas from "../assets/image-thomas.jpg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";

const textReveal = {
  initial: {
    scale: 2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const staggerAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const verticalReveal = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const ContentTwo = () => {
  const [element, control] = useScroll();
  const [grid, controlGrid] = useScroll();

  return (
    <StyledContainer>
      <motion.h4
        ref={element}
        variants={textReveal}
        initial="initial"
        animate={control}
      >
        Client Testimonials
      </motion.h4>

      <motion.div
        className="grid-section"
        ref={grid}
        variants={staggerAnimation}
        initial="initial"
        animate={controlGrid}
      >
        <motion.section variants={verticalReveal}>
          <img src={emily} alt="emily" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs are met and deadlines were always hit.
          </p>

          <div className="personal-details">
            <span>Emily R.</span>
            <small>Marketing Director</small>
          </div>
        </motion.section>

        <motion.section variants={verticalReveal}>
          <img src={thomas} alt="thomas" />
          <p>
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it a satisfying and enjoyable experience.
          </p>

          <div className="personal-details">
            <span>Thomas S.</span>
            <small>Chief Operating Officer</small>
          </div>
        </motion.section>

        <motion.section variants={verticalReveal}>
          <img src={jennie} alt="jennie" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended.
          </p>

          <div className="personal-details">
            <span>Jennie F.</span>
            <small>Business Owner</small>
          </div>
        </motion.section>
      </motion.div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 1.5rem;
    color: hsl(210, 4%, 67%);
  }

  .grid-section {
    margin-top: 4rem;
    display: flex;
    align-items: center;

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;

      img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        object-fit: cover;
      }

      p {
        text-align: center;
        margin-top: 2rem;
        font-weight: 600;
        line-height: 1.5;
        color: hsl(213, 9%, 39%);
      }

      .personal-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;

        span {
          font-weight: 900;
          font-size: 1.2rem;
          font-family: "Fraunces", sans-serif;
          color: hsl(212, 27%, 19%);
        }

        small {
          margin-top: 0.8rem;
          font-weight: 600;
          color: hsl(210, 4%, 67%);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;

    .grid-section {
      flex-direction: column;
      margin-top: 2rem;

      section {
        padding: 0;

        &:not(:first-child) {
          margin-top: 4rem;
        }
      }
    }
  }
`;

export default ContentTwo;
