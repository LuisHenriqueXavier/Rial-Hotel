import styled from 'styled-components';


export const RoomContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        display: flex;
        align-self: self-start;
        margin-bottom:5rem;
    }

`;

export const Rooms = styled.div`
    width: auto;
    height: auto;
    justify-content: space-between;

    padding: 5rem;
    background-color: aliceblue;
    display: flex;

    img{
        width: 400px;
        border-radius: 10px;
        object-fit: contain;
    }
`;