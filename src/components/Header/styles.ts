import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: top;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
  transition: all 0.5s ease-in-out; /* Adiciona transição suave no layout */

  img {
    border-top: -30px;
    border-radius: 10px;
    max-width: 100px; /* Limita o tamanho da imagem em telas menores */
    transition: max-width 0.5s ease-in-out; /* Transição suave para o tamanho da imagem */
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;
    transition: all 0.5s ease-in-out; /* Transição suave no layout do nav */

    a {
      height: auto;
      text-decoration: none;
      color: ${(props) => props.theme.white};
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid transparent;
      padding: 1rem;
      border-radius: 10px;
      transition: border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out; /* Transições para os links */
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]};
    }

    a.active {
      color: ${(props) => props.theme["red-700"]};
      border-bottom: 3px solid ${(props) => props.theme["red-500"]};
    }
  }

  /* Estilos responsivos */
  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os elementos */
    align-items: center;

    img {
      margin-top: -40px;
      max-width: 80px;
    }

    nav {
      position: fixed; /* Fixa na parte inferior */
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: ${(props) => props.theme["gray-500"]}; /* Fundo do menu */
      z-index: 10; /* Para garantir que fique acima de outros elementos */
      padding: 0.5rem 1rem;
      display: flex;
      justify-content: space-around; /* Espaço uniforme entre os links */
      gap: 0;
      transition: all 0.5s ease-in-out; /* Transição suave para o nav na versão mobile */

      a {
        font-size: 1rem; /* Reduz o tamanho do texto */
        padding: 0.5rem;
        flex: 1; /* Cada link ocupa espaço igual */
        text-align: center; /* Centraliza os textos */
      }
    }
  }

  @media (max-width: 480px) {
    nav {
      a {
        font-size: 0.875rem; /* Texto menor para telas muito pequenas */
        padding: 0.25rem;
      }
    }
  }
`;
