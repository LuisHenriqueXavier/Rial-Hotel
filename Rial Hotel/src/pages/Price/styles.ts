import styled from "styled-components";

export const PriceContainer = styled.main`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        display: flex;
        align-self: self-start;
        margin-bottom:2rem;
    }

    h2{
        display: flex;
        align-self: self-start;
        margin-left: 2rem;
        margin-bottom: 2rem;
    }

    span{
        margin-bottom: 1rem;
        font-size: 1.75rem;
        color: ${(props) => props.theme["gray-300"]};
    }


`;

export const WrapRoom = styled.div`
    width: 100%;
    padding: 5rem;
    display: flex;
    justify-content: space-between; /* Posiciona entre os lados (esquerda e direita) */
    align-items: center; /* Alinha no eixo vertical (cima e baixo) */
`;

export const Room = styled.div`
    width: 300px;
    height: 100px;
    background-color: aliceblue;
    display: flex;
    
`;


