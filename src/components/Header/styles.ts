import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%; /* O cabeçalho ocupa toda a largura da página */
  display: flex; /* Usa flexbox para organização */
  align-items: top; /* Alinha os itens no topo */
  justify-content: space-between; /* Distribui os elementos igualmente */
  gap: 3rem; /* Espaçamento entre os elementos do cabeçalho */
  padding: 1rem; /* Espaçamento interno */
  transition: all 0.5s ease-in-out; /* Suaviza as transições de layout */

  img {
    border-radius: 10px; /* Arredonda as bordas da imagem */
    max-width: 100px; /* Define o tamanho máximo da imagem */
    transition: max-width 0.5s ease-in-out; /* Suaviza a mudança de tamanho */
  }

  nav {
    display: flex; /* Usa flexbox para organizar os links */
    align-items: center; /* Alinha os links verticalmente */
    gap: 1rem; /* Espaçamento entre os itens do menu */
    font-size: 1.25rem; /* Define o tamanho do texto */
    transition: all 0.5s ease-in-out; /* Suaviza mudanças no layout */

    a {
      display: flex; /* Define um layout flexbox */
      justify-content: center; /* Centraliza horizontalmente */
      align-items: center; /* Centraliza verticalmente */
      text-decoration: none; /* Remove sublinhado dos links */
      color: ${(props) => props.theme.white}; /* Define a cor do texto */
      border-bottom: 3px solid transparent; /* Borda inferior invisível por padrão */
      padding: 1rem; /* Espaçamento interno */
      border-radius: 10px; /* Arredonda as bordas */
      gap: 0.5rem; /* Espaço entre ícone e texto */
      transition: border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out;
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]}; /* Destaque ao passar o mouse */
    }

    a.active {
      color: ${(props) => props.theme["red-700"]}; /* Cor para link ativo */
      border-bottom: 3px solid ${(props) => props.theme["red-500"]}; /* Destaque para link ativo */
    }
  }

  /* Estilos para telas menores (até 968px) */
  @media (max-width: 968px) {
    flex-direction: column; /* Muda o layout para coluna */
    align-items: center; /* Centraliza os itens */

    img {
      margin-top: -40px; /* Ajuste para a logo */
      max-width: 80px; /* Reduz o tamanho da imagem */
    }

    nav {
      position: fixed; /* Fixa o menu na parte inferior da tela */
      bottom: 0; /* Cola o menu no rodapé */
      left: 0;
      width: 100%; /* Ocupa toda a largura */
      background-color: ${(props) => props.theme["gray-500"]}; /* Cor de fundo */
      z-index: 10; /* Garante que fique sobre outros elementos */
      padding: 0.5rem 1rem; /* Ajusta o espaçamento interno */
      display: flex; /* Usa flexbox */
      justify-content: space-around; /* Espaço igual entre os itens */
      transition: all 0.5s ease-in-out; /* Suaviza as mudanças */

      a {
        flex-direction: column; /* Ícone acima do texto */
        text-align: center; /* Centraliza os itens */
        font-size: 12px; /* Define tamanho do texto */
        gap: 0.2rem; /* Espaçamento entre ícone e texto */
        padding: 0.5rem; /* Ajuste no espaçamento interno */
      }

      a svg {
        font-size: 24px; /* Define o tamanho do ícone */
      }
    }
  }

  /* Estilos para telas muito pequenas (até 480px) */
  @media (max-width: 480px) {
    nav a {
      padding: 0.25rem; /* Ajuste de espaçamento para telas menores */
    }
  }
`;
