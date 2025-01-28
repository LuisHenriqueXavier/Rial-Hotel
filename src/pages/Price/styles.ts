import styled from "styled-components";

export const PriceContainer = styled.main`
  padding-top: 120px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    align-self: flex-start; /* Alinha no início */
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 1.3rem;
    display: flex;
    align-self: flex-start;
    margin-left: 2rem;
    margin-top: 2rem;
    color: ${(props) => props.theme["gray-900"]};
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      align-self: center; /* Centraliza no tablet */
      text-align: center;
    }

    h2 {
      font-size: 1.1rem;
      margin-left: 0;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const Room = styled.div`
  width: 60rem;
  height: auto;
  justify-content: space-between;

  border-radius: 10px;

  padding: 5rem;
  margin: 20px;
  background-color: aliceblue;
  display: flex;
  align-items: center;

  h3 {
    font-size: 1rem;
    padding-left: 2rem;
    border-left: 2px solid ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-900"]};
  }

  img {
    width: 400px;
    border-radius: 10px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos */
    align-items: center;

    width: 90%;
    padding: 2rem;

    img {
      width: 100%; /* Faz a imagem ocupar a largura disponível */
      margin-bottom: 1rem;
    }

    h3 {
      font-size: 0.9rem;
      padding-left: 1rem;
      text-align: center;
      
    border-left: 0;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    h3 {
      font-size: 0.8rem;
    }

    img {
      width: 100%; /* Ajusta para telas pequenas */
    }
  }
`;
