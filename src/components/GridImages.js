import styled from "styled-components";
import milk from "../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../assets/desktop/image-gallery-orange.jpg";
import cone from "../assets/desktop/image-gallery-cone.jpg";
import sugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg";
import { motion } from "framer-motion";

const GridImages = () => {
  return (
    <StyledContainer>
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={milk}
        alt="milk"
        className="desktop"
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={orange}
        alt="milk"
        className="desktop"
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={cone}
        alt="milk"
        className="desktop"
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={sugarCubes}
        alt="milk"
        className="desktop"
      />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default GridImages;
