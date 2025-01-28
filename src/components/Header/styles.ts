import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%; /* O cabeçalho ocupa toda a largura da página */
  display: flex; /* Define o layout flexbox */
  align-items: top; /* Alinha os itens no topo */
  justify-content: space-between; /* Espaço uniforme entre os elementos do cabeçalho */
  gap: 3rem; /* Espaçamento entre os elementos dentro do cabeçalho */
  padding: 1rem; /* Espaçamento interno */
  transition: all 0.5s ease-in-out; /* Transição suave em mudanças no layout */

  img {
    border-top: -30px; /* Definido incorretamente, não tem efeito válido */
    border-radius: 10px; /* Arredonda as bordas da imagem */
    max-width: 100px; /* Limita o tamanho máximo da imagem em 100px para telas menores */
    transition: max-width 0.5s ease-in-out; /* Animação suave ao redimensionar a imagem */
  }

  nav {
    display: flex; /* Layout flexbox para os links de navegação */
    align-items: center; /* Alinha os links verticalmente ao centro */
    gap: 1rem; /* Espaçamento horizontal entre os links */
    font-size: 1.25rem; /* Tamanho do texto dos links */
    transition: all 0.5s ease-in-out; /* Animação suave no layout do nav */

    a {
      height: auto; /* Altura do link ajustada automaticamente */
      text-decoration: none; /* Remove o sublinhado padrão dos links */
      color: ${(props) => props.theme.white}; /* Define a cor do texto */
      display: flex; /* Define layout flexbox para os links */
      justify-content: center; /* Centraliza o texto horizontalmente */
      align-items: center; /* Centraliza o texto verticalmente */
      border-bottom: 3px solid transparent; /* Borda inferior inicial transparente */
      padding: 1rem; /* Espaçamento interno dos links */
      border-radius: 10px; /* Arredonda os cantos dos links */
      gap: 0.5rem; /* Espaçamento entre ícones e texto nos links */
      transition: border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out; /* Animação suave para borda e espaçamento */
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]}; /* Cor da borda ao passar o mouse */
    }

    a.active {
      color: ${(props) => props.theme["red-700"]}; /* Cor do texto para o link ativo */
      border-bottom: 3px solid ${(props) => props.theme["red-500"]}; /* Cor da borda para o link ativo */
    }
  }

  /* Estilos para telas menores (até 768px) */
  @media (max-width: 968px) {
    flex-direction: column; /* Alinha os elementos em coluna */
    align-items: center; /* Centraliza os itens horizontalmente */

    img {
      margin-top: -40px; /* Move a imagem para cima */
      max-width: 80px; /* Reduz o tamanho máximo da imagem para telas menores */
    }

    nav {
      position: fixed; /* Fixa a barra de navegação na parte inferior da tela */
      bottom: 0; /* Define a posição inferior como 0 */
      left: 0; /* Define a posição à esquerda como 0 */
      width: 100%; /* Barra de navegação ocupa toda a largura */
      background-color: ${(props) => props.theme["gray-500"]}; /* Cor de fundo do menu */
      z-index: 10; /* Eleva a barra de navegação acima de outros elementos */
      padding: 0.5rem 1rem; /* Espaçamento interno */
      display: flex; /* Layout flexbox */
      justify-content: space-around; /* Distribui os links uniformemente */
      gap: 0; /* Remove o espaçamento entre os links */
      transition: all 0.5s ease-in-out; /* Animação suave para o nav na versão mobile */

      a {
        font-size: 12px; /* Reduz o tamanho do texto dos links */
        padding: 0.5rem; /* Reduz o espaçamento interno */
        flex: 1; /* Cada link ocupa espaço igual */
        text-align: center; /* Centraliza os textos */
      }
    }
  }

  /* Estilos para telas muito pequenas (até 480px) */
  @media (max-width: 480px) {
    nav {
      a {
        padding: 0.25rem; /* Reduz o espaçamento interno dos links */
      }
    }
  }
`;
