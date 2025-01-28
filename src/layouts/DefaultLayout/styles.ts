import styled from "styled-components";
import ita from "../../assets/ita.jpg"; // Importa a imagem de fundo

// Container principal do layout
export const LayoutContainer = styled.div`
  width: 100%; // Largura total
  height: 600px; // Altura fixa
  padding-top: 2.5rem; // Espaçamento superior
  align-items: center; // Centraliza os itens verticalmente

  background-image: url(${ita}); // Define a imagem de fundo
  background-size: cover; // A imagem cobre todo o container
  background-position: center; // Centraliza a imagem no container
  background-repeat: no-repeat; // Evita que a imagem se repita

  display: flex; // Ativa o Flexbox
  flex-wrap: wrap; // Permite quebra de linha dos itens
  flex-direction: column; // Direção dos itens em coluna
  align-content: center; // Centraliza o conteúdo alinhado no eixo cruzado

  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1); // Adiciona transições suaves

  @media (max-width: 968px) { // Estilos para dispositivos menores (tablets e celulares)
    height: 400px; // Reduz a altura
    padding-top: 1.5rem; // Ajusta o espaçamento superior
  }
`;

// Sobreposição semitransparente para destacar o conteúdo sobre a imagem de fundo
export const Overlay = styled.div`
  display: flex; // Ativa o Flexbox
  flex-wrap: wrap; // Permite quebra de linha dos itens
  flex-direction: column; // Direção dos itens em coluna
  align-content: center; // Centraliza o conteúdo alinhado no eixo cruzado

  position: absolute; // Posição fixa em relação ao container
  top: 0; // Alinha no topo
  left: 0; // Alinha à esquerda
  width: 100%; // Largura total
  height: 600px; // Altura fixa
  background-color: rgba(128, 128, 128, 0.7); // Fundo cinza com transparência
  z-index: 1; // Garante que fique acima da imagem de fundo

  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1); // Adiciona animações suaves

  @media (max-width: 968px) { // Estilos para telas menores
    height: 400px; // Ajusta a altura
  }
`;

// Wrapper para o conteúdo do topo
export const WrapTop = styled.div`
  padding: 2rem; // Espaçamento interno
  width: 65rem; // Largura fixa
  height: auto; // Altura automática baseada no conteúdo

  // Estilo para o título principal
  h1 {
    margin-top: 4rem; // Margem superior
    margin-left: 2rem; // Margem à esquerda
    font-size: 3rem; // Tamanho da fonte
    color: ${(props) => props.theme.white}; // Cor branca
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), 
                margin 1s cubic-bezier(0.25, 0.8, 0.25, 1); // Transições suaves para o texto
  }

  // Estilo para texto em negrito
  strong {
    font-family: 'Roboto-Mono'; // Fonte personalizada
    margin-left: 10rem; // Margem à esquerda
    font-size: 5rem; // Tamanho da fonte
    color: ${(props) => props.theme["red-500"]}; // Cor personalizada
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), 
                margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  // Estilo para spans de texto
  span {
    font-family: 'Roboto-Mono'; // Fonte personalizada
    margin-left: 2rem; // Margem à esquerda
    font-size: 5rem; // Tamanho da fonte
    color: ${(props) => props.theme["gray-600"]}; // Cor personalizada
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), 
                margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  // Estilo para parágrafos
  p {
    margin-left: 2rem; // Margem à esquerda
    font-size: 1.5rem; // Tamanho da fonte
    color: ${(props) => props.theme.white}; // Cor branca
    transition: font-size 1s cubic-bezier(0.25, 0.8, 0.25, 1), 
                margin 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  @media (max-width: 968px) { // Estilos para telas menores
    width: 90%; // Ajusta a largura
    padding: 1rem; // Ajusta o padding

    h1 {
      margin-top: 1rem; // Reduz a margem superior
      margin-bottom: 2rem; // Adiciona margem inferior
      margin-left: 0; // Remove a margem esquerda
      font-size: 2rem; // Reduz o tamanho do texto
      text-align: center; // Centraliza o texto
    }

    strong, span {
      font-size: 3rem; // Reduz o tamanho do texto
      text-align: center; // Centraliza o texto
      margin-left: 0; // Remove a margem esquerda
    }

    p {
      font-size: 1rem; // Reduz o tamanho do texto
      text-align: center; // Centraliza o texto
      margin-top: 1rem; // Adiciona margem superior
    }
  }
`;
