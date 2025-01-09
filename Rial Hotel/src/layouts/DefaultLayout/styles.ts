import styled from "styled-components";
import ita from "../../assets/ita.jpg";

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: 700px;
  margin: auto;
  padding: 2.5rem;
  align-items: center;

  background-image: url(${ita}); /* Adiciona a imagem de fundo */
  background-size: cover; /* Ajusta a imagem para cobrir todo o container */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição da imagem */

  display: flex;
  flex-direction: column;
`;