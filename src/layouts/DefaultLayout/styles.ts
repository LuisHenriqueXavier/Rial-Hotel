import styled from "styled-components";
import ita from "../../assets/ita.jpg";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 2.5rem;
  align-items: center;

  background-image: url(${ita});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;

  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1); /* Mais suave, animação personalizada */

  @media (max-width: 768px) { /* Para telas de tablets e celulares */
    height: 400px; /* Reduz a altura */
    padding-top: 1.5rem;
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-color: rgba(128, 128, 128, 0.7); /* Cinza transparente */
  z-index: 1;

  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1); /* Transição suave e animada */

  @media (max-width: 768px) { /* Para telas menores */
    height: 400px; /* Ajusta a altura */
  }
`;

export const WrapTop = styled.div`
  padding: 2rem;
  width: 60rem;
  height: auto;

  h1 {
    margin-top: 4rem;
    margin-left: 2rem;
    font-size: 3rem;
    color: ${(props) => props.theme.white};
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), margin 1s cubic-bezier(0.25, 0.8, 0.25, 1); /* Animações suaves de texto */
  }

  strong {
    font-family: 'Roboto-Mono';
    margin-left: 10rem;
    font-size: 5rem;
    color: ${(props) => props.theme["red-500"]};
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  span {
    font-family: 'Roboto-Mono';
    margin-left: 2rem;
    font-size: 5rem;
    color: ${(props) => props.theme["gray-600"]};
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  p {
    margin-left: 2rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.white};
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  @media (max-width: 768px) { /* Para telas menores */
    width: 90%;
    padding: 1rem;

    h1 {
      margin-top: 1rem;
      margin-bottom: 2rem;
      margin-left: 0;
      font-size: 2rem;
      text-align: center; /* Centraliza o texto */
    }

    strong, span {
      font-size: 3rem;
      text-align: center;
      margin-left: 0;
    }

    p {
      font-size: 1rem;
      text-align: center;
      margin-top: 1rem;
    }
  }
`;
