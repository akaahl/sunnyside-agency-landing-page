import styled from "styled-components";
import headerImage from "../assets/desktop/image-header.jpg";
import mobileHeader from "../assets/mobile/image-header.jpg";
import downArrow from "../assets/icon-arrow-down.svg";
import { motion } from "framer-motion";

const svgVariants = {
  animate: {
    y: 50,
    transition: {
      delay: 1.5,
      yoyo: Infinity,
      duration: 0.4,
    },
  },
};

const pathVariants = {
  initial: {
    y: -100,
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      delay: 1,
    },
  },
};

const Header = () => {
  return (
    <StyledHeader>
      <h1>We are creatives</h1>
      {/* <img src={downArrow} alt="down arrow" className="down-arrow" /> */}
      <motion.svg
        width="36"
        height="114"
        xmlns="http://www.w3.org/2000/svg"
        className="down-arrow"
        variants={svgVariants}
        animate="animate"
      >
        <g
          stroke="#FFF"
          stroke-width="6"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <motion.path
            d="M18 3v100M3 95.484l15 15 15-15"
            variants={pathVariants}
            initial="initial"
            animate="animate"
          />
        </g>
      </motion.svg>
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
    /* height: 4rem; */
    transform: scaleY(0.7);
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
