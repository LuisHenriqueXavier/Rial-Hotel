import styled from "styled-components";

// Container principal do Footer
export const FooterContainer = styled.footer`
  position: fixed; /* Fixa o footer na parte inferior da tela */
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${(props) => props.theme["gray-500"]};
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

// Conteúdo do Footer
export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 0.875rem;
  gap: 10rem;

  small {
    display: block;
    text-align: left;
  }

  // Menu de navegação no footer
  nav {
    display: flex;
    gap: 1.5rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
      display: flex;
      flex-direction: column; /* Ícone sempre acima do texto */
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid transparent;
      padding: 1rem;
      border-radius: 10px;
      transition: border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out;
      gap: 0.25rem; /* Espaço entre o ícone e o texto */

      svg {
        width: 24px;
        height: 24px;
      }
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]};
    }

    a.active {
      color: ${(props) => props.theme["red-700"]};
      border-bottom: 3px solid ${(props) => props.theme["red-500"]};
    }
  }

  // Seção de redes sociais
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
`;
