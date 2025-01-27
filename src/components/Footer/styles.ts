import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: fixed; /* Fixa o footer na parte inferior da tela */
  left: 0;
  right: 0;
  bottom: 0; /* Garante que fique na base da tela */
  width: 100%; /* Usa 100% da largura do viewport */
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Garante que o footer fique acima de outros elementos */

  /* Esconde o footer em telas menores */
  @media (max-width: 768px) {
    display: block; /* Exibe o footer de forma empilhada em telas pequenas */
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 0.875rem;
  gap: 2rem;

  p {
    margin: 0;
    font-size: 1rem;
    flex: 1;
  }

  nav {
    display: flex;
    gap: 1.5rem;

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
      gap: 0.5rem;
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]};
    }

    a.active {
      color: ${(props) => props.theme["red-700"]};
      border-bottom: 3px solid ${(props) => props.theme["red-500"]};
    }
  }

  .social-media {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex: 1;

    .icons {
      display: flex;
      gap: 1rem;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media (max-width: 768px) {
    display:none;
  }
`;
