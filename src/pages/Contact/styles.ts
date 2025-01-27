import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`;

export const FormContainer = styled.div`
margin-top: 70px;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    label {
      font-weight: bold;
      color: #555;
      display: flex;
      align-items: center;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
    }

    textarea {
      grid-column: span 2;
    }

    button {
      grid-column: span 2;
      padding: 0.8rem;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }

  .social-media {
    margin-top: 1.5rem;
    align-self: center

    h2 {
      font-size: 1.2rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .icons {
      display: flex;
      gap: 1rem;

      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid transparent;
        border-radius: 50%;
        padding: 0.5rem;
        transition: all 0.3s ease;

        &:hover {
          border: 2px solid #ddd;
        }
      }
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 100px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
