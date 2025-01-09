import styled from "styled-components";
import ita from "../../assets/ita.jpg";

export const LayoutContainer = styled.div`
  width: 100%;
  height: 600px;
  padding-top: 2.5rem;
  align-items: center;

  background-image: url(${ita}); /* Adiciona a imagem de fundo */
  background-size: cover; /* Ajusta a imagem para cobrir todo o container */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita repetição da imagem */
    

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
`;

export const Overlay = styled.div`
display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
    position: absolute; /* Faz com que cubra todo o contêiner */
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: rgba(128, 128, 128, 0.6); /* Cinza transparente */
    z-index: 1; /* Camada acima da imagem */
  `

export const WrapTop = styled.div`
    padding: 2rem;
    width: 60rem;
    height: auto;

    h1{
        margin-top: 5rem;
        margin-left: 2rem;
        font-size: 3rem;
        color: ${(props) => props.theme.white};
    }

    strong{
        font-family: 'Roboto-Mono';
        margin-left: 10rem;
        font-size: 5rem;
        color: ${(props) => props.theme["red-500"]}

    }

    span{
        
        font-family: 'Roboto-Mono';
        margin-left: 2rem;
        font-size: 5rem;
        color: ${(props) => props.theme["gray-600"]};
    }

    p {
        margin-left: 2rem;
        font-size: 2rem;
        color: ${(props) => props.theme.white};
    }
`