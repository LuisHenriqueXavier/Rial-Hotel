import styled from "styled-components";

export const PriceContainer = styled.main`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        display: flex;
        align-self: self-start;
        margin-bottom:5rem;
    }

    h2{
        display: flex;
        align-self: self-start;
        margin-left: 2rem;
        margin-bottom: 5rem;
        color: ${(props) => props.theme["gray-900"]};
    }
`;



export const Room = styled.div`
    width: 60rem;
    height: auto;
    justify-content: space-between;

    border-radius: 10px;

    padding: 5rem;
    margin: 20px;
    background-color: aliceblue;
    display: flex;

    h3{
        font-size: 1rem;
        padding-left: 2rem;
        border-left: 2px solid ${(props) => props.theme["gray-900"]};
        color: ${(props) => props.theme["gray-900"]};
    }

    img{
        width: 400px;
        border-radius: 10px;
        object-fit: contain;
    }
    
`;


