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
        margin-bottom: 5rem;
    }

    p{
        margin-bottom: 1rem;
        font-size: 1.75rem;
        color: ${(props) => props.theme["gray-900"]};
    }
`;



export const Room = styled.div`
    width: auto;
    height: auto;

    padding: 1rem;
    margin: 20px;
    background-color: aliceblue;
    display: flex;

    h1{
        font-size: 1rem;
        color: ${(props) => props.theme["gray-900"]};
    }

    img{
        width: 300px;
        object-fit: contain;
    }
    
`;


