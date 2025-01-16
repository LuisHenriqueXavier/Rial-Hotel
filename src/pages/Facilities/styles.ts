import styled from "styled-components";

export const FacilitiesContainer = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;

  h1{
    align-self: flex-start;
  }


    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }
    }
  
`;



// Modal para a imagem em tela cheia
export const FullscreenImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    width: 100vh;
    height: 100vh;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    
    object-fit: contain;
    &:hover {
        transform: scale(1);
      }
  }

`;
