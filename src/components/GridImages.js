import styled from "styled-components";
import milk from "../assets/desktop/image-gallery-milkbottles.jpg";
import orange from "../assets/desktop/image-gallery-orange.jpg";
import cone from "../assets/desktop/image-gallery-cone.jpg";
import sugarCubes from "../assets/desktop/image-gallery-sugarcubes.jpg";

const GridImages = () => {
  return (
    <StyledContainer>
      <img src={milk} alt="milk" className="desktop" />
      <img src={orange} alt="milk" className="desktop" />
      <img src={cone} alt="milk" className="desktop" />
      <img src={sugarCubes} alt="milk" className="desktop" />
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
