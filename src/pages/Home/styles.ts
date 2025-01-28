import styled from "styled-components";

// Container principal da página "Home"
export const HomeContainer = styled.main`
  display: flex; /* Usa flexbox para alinhar os elementos dentro do container */
  justify-content: center; /* Centraliza os elementos horizontalmente */
  padding: 50px 2rem; /* Espaçamento interno */
  margin-top: 7rem; /* Margem superior */
  margin-bottom: 150px; /* Margem inferior */

  @media (max-width: 968px) {
    padding: 20px 1rem; /* Ajusta o padding para telas menores */
    margin-top: 50px; /* Ajusta a margem superior para telas menores */
    margin-bottom: 50px; /* Ajusta a margem inferior para telas menores */
  }
`;

// Container do conteúdo principal
export const ContentContainer = styled.div`
  display: flex; /* Usa flexbox para alinhar os elementos dentro do container */
  flex-direction: row; /* Layout padrão: conteúdo principal e sidebar lado a lado */
  align-items: flex-start; /* Alinha os itens no topo */
  gap: 2rem; /* Espaçamento entre os elementos */
  max-width: 1200px; /* Largura máxima do conteúdo */
  width: 100%; /* Largura total */

  .sections {
    flex: 1; /* O conteúdo principal ocupa o espaço disponível */
    display: flex; /* Flexbox para organizar as seções */
    flex-direction: column; /* Organiza as seções em coluna */
    gap: 3rem; /* Espaçamento entre as seções */
  }

  @media (max-width: 968px) {
    margin-top: 3rem; /* Ajusta a margem superior */
    flex-direction: column; /* Empilha o conteúdo nas telas menores */
    gap: 1.5rem; /* Reduz o espaçamento entre os elementos */
  }
`;

// Sidebar (barra lateral com iframe)
export const Sidebar = styled.aside`
  height: 100%; /* Sidebar com altura de 100% da tela */
  width: 350px; /* Largura fixa de 300px para telas grandes */
  background-color: ${(props) => props.theme["gray-300"]}; /* Cor de fundo da sidebar */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 1rem; /* Espaçamento interno */
  display: flex; /* Flexbox para organizar os elementos dentro da sidebar */
  flex-direction: column; /* Organiza os elementos verticalmente */
  align-items: center; /* Centraliza os elementos horizontalmente */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombras sutis para efeito 3D */
  overflow: hidden; /* Remove a barra de rolagem da sidebar */

  .iframe-container {
    display: flex; /* Flexbox para organizar o iframe */
    flex-direction: column; /* Organiza o iframe em coluna */
    gap: 1rem; /* Espaçamento entre o iframe e outros elementos */
    overflow: hidden; /* Remove a barra de rolagem interna do iframe */
    margin-bottom: 0; /* Remover qualquer margem inferior adicional */
  }

  iframe {
    width: 300px; /* Largura fixa do iframe */
    height: 410px; /* Altura do iframe */
    border: none; /* Remove a borda do iframe */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombras sutis para o iframe */
  }

  @media (max-width: 968px) {
    width: 100%; /* A sidebar ocupa toda a largura da tela em dispositivos menores */
    order: 2; /* Move a sidebar para baixo */
    height: 1150px; /* A altura da sidebar é ajustada automaticamente */
    aspect-ratio: 1; /* A sidebar mantém um formato quadrado */
    
  }
`;

// Estilo para o botão do link
export const ButtonLink = styled.a`
  background-color: ${(props) => props.theme["blue-500"]}; /* Cor de fundo do botão */
  color: ${(props) => props.theme.white}; /* Cor do texto */
  padding: 0.75rem 1.5rem; /* Espaçamento interno do botão */
  border-radius: 8px; /* Bordas arredondadas do botão */
  font-weight: bold; /* Texto em negrito */
  text-align: center; /* Alinha o texto ao centro */
  display: inline-block; /* Exibe o link como bloco inline */
  text-decoration: none; /* Remove o sublinhado */
  transition: background-color 0.3s ease-in-out; /* Transição suave de cor ao passar o mouse */
  margin-top: 30px; /* Distância de 10px entre o iframe e o botão */
  margin-bottom: 10px; /* Pequeno ajuste para manter o botão mais perto da parte inferior */

  &:hover {
    background-color: ${(props) => props.theme["gray-500"]}; /* Cor do fundo ao passar o mouse */
  }
`;

// Container de cada seção
export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme["gray-300"]}; /* Cor de fundo das seções */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 2rem; /* Espaçamento interno */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombras sutis para efeito 3D */
  text-align: center; /* Alinha o texto no centro */
  transition: box-shadow 0.3s ease-in-out; /* Transição suave de sombra ao passar o mouse */

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Sombras mais intensas ao passar o mouse */
  }

  img {
    width: 100%; /* A imagem ocupa toda a largura */
    height: auto; /* A altura é ajustada automaticamente */
    max-height: 250px; /* Altura máxima da imagem */
    object-fit: cover; /* Cobre toda a área do contêiner */
    border-radius: 8px; /* Bordas arredondadas */
    margin-bottom: 1rem; /* Espaçamento abaixo da imagem */
  }

  @media (max-width: 968px) {
    padding: 1rem; /* Ajusta o padding em telas menores */
    img {
      max-height: 150px; /* Ajusta a altura máxima da imagem */
    }
  }
`;

// Estilo para o título das seções
export const SectionTitle = styled.h2`
  font-size: 1.8rem; /* Tamanho da fonte do título */
  font-weight: bold; /* Texto em negrito */
  color: ${(props) => props.theme["gray-800"]}; /* Cor do título */
  margin-bottom: 1rem; /* Espaçamento abaixo do título */

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Ajusta o tamanho da fonte para telas menores */
  }
`;

// Estilo para a descrição das seções
export const SectionDescription = styled.p`
  font-size: 1.1rem; /* Tamanho da fonte da descrição */
  color: ${(props) => props.theme["gray-600"]}; /* Cor da descrição */
  margin-bottom: 1.5rem; /* Espaçamento abaixo da descrição */

  @media (max-width: 968px) {
    font-size: 0.875rem; /* Ajusta o tamanho da fonte para telas menores */
    margin-bottom: 1rem; /* Reduz o espaçamento abaixo da descrição */
  }
`;
