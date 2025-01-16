import styled from 'styled-components';

export const RoomContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    align-self: flex-start;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
      text-align: center; /* Centraliza o título no mobile */
      width: 100%;
    }
  }

  h3 {
    padding: 10px;
    text-decoration: underline;
    text-align: center;
    grid-column: span 2;

    @media (max-width: 768px) {
      font-size: 1.2rem; /* Ajusta o tamanho do texto no mobile */
    }
  }
`;

export const Room = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px); /* Duas colunas de 400px */
  justify-content: center;
  width: 100%;
  padding: 2rem;
  background-color: aliceblue;
  gap: 1rem;

  img {
    width: 400px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover; /* Garante que a imagem se encaixe no espaço */
    
    cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      }

    @media (max-width: 768px) {
      width: 100%; /* Faz a imagem ocupar toda a largura disponível */
      max-height: 200px; /* Ajusta a altura proporcionalmente */
    }
  }

  /* Ajustes para telas menores */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Passa para uma coluna no mobile */
    gap: 1.5rem; /* Aumenta o espaçamento no mobile */
  }
`;
