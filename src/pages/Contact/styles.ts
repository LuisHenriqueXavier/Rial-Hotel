import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin-top: -50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
    margin-top: 2rem;
    flex: 1;
    max-width: 600px;


  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-weight: bold;
      color: #555;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }

    button {
      padding: 0.8rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  max-width: 600px;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 13rem;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
