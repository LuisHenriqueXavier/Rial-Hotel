import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 50px 2rem;
  align-items: center;
  text-align: center;
  margin-top: 150px;
  margin-bottom: 150px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: ${(props) => props.theme["gray-800"]};
  }
`;

export const SectionContainer = styled.section`
  background-color: ${(props) => props.theme["gray-500"]};
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-800"]};
  margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme["gray-600"]};
  margin-bottom: 1.5rem;
`;
