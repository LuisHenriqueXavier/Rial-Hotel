import styled from "styled-components";

// Container principal do Footer
export const FooterContainer = styled.footer`
  position: fixed; /* Fixa o footer na parte inferior da tela */
  left: 0; /* Alinha à esquerda */
  right: 0; /* Alinha à direita */
  bottom: 0; /* Garante que fique na base da tela */
  width: 100%; /* Ocupa 100% da largura do viewport */
  background-color: ${(props) => props.theme["gray-500"]}; /* Cor de fundo personalizada */
  padding: 1rem 2rem; /* Espaçamento interno */

  display: flex; /* Ativa o Flexbox */
  justify-content: center; /* Centraliza os itens no eixo horizontal */
  align-items: center; /* Centraliza os itens no eixo vertical */
  z-index: 1; /* Garante que o footer fique acima de outros elementos na tela */

  /* Estilos específicos para telas menores */
  @media (max-width: 768px) {
    display: block; /* Exibe o footer em formato de bloco (vertical) em telas pequenas */
  }
`;

// Conteúdo do Footer
export const FooterContent = styled.div`
  width: 100%; /* Largura total */
  max-width: 1200px; /* Largura máxima do conteúdo */
  display: flex; /* Ativa o Flexbox */
  align-items: center; /* Centraliza os itens verticalmente */
  color: ${(props) => props.theme["gray-100"]}; /* Cor do texto */
  font-size: 0.875rem; /* Tamanho da fonte */
  gap: 10rem; /* Espaço entre os elementos */

  // Estilo para textos pequenos no footer
  small {
    display: block;
    text-align: left; /* Alinha o texto à esquerda */
  }

  // Estilos para o menu de navegação
  nav {
    display: flex; /* Ativa o Flexbox */
    gap: 1.5rem; /* Espaçamento entre os links */

    a {
      height: auto; /* Altura automática */
      text-decoration: none; /* Remove sublinhado dos links */
      color: ${(props) => props.theme.white}; /* Cor dos links */
      display: flex; /* Ativa o Flexbox */
      justify-content: center; /* Centraliza horizontalmente */
      align-items: center; /* Centraliza verticalmente */
      border-bottom: 3px solid transparent; /* Adiciona uma borda inferior transparente */
      padding: 1rem; /* Espaçamento interno */
      border-radius: 10px; /* Bordas arredondadas */
      transition: border-bottom 0.3s ease-in-out, padding 0.3s ease-in-out; /* Transições para efeitos nos links */
      gap: 0.5rem; /* Espaçamento entre os ícones e o texto */
    }

    a:hover {
      border-bottom: 3px solid ${(props) => props.theme["red-700"]}; /* Borda inferior ao passar o mouse */
    }

    a.active {
      color: ${(props) => props.theme["red-700"]}; /* Cor ativa para links */
      border-bottom: 3px solid ${(props) => props.theme["red-500"]}; /* Borda ativa */
    }
  }

  // Seção de redes sociais
  .social-media {
    display: flex; /* Ativa o Flexbox */
    gap: 1rem; /* Espaçamento entre os elementos */
    align-items: center; /* Centraliza verticalmente */
    justify-content: center; /* Centraliza horizontalmente */
    flex: 1; /* Permite que essa seção ocupe o espaço restante */

    .icons {
      display: flex; /* Ativa o Flexbox */
      gap: 1rem; /* Espaçamento entre os ícones */

      a {
        display: flex; /* Ativa o Flexbox */
        justify-content: center; /* Centraliza horizontalmente */
        align-items: center; /* Centraliza verticalmente */
      }
    }
  }

  /* Esconde o footer em telas menores */
  @media (max-width: 968px) {
    display: none;
  }
`;
