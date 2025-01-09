import styled from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 70rem;
    display: flex;
    align-items: top;
    justify-content: space-between;

    img{
        margin-top: -40px;
    }

    nav {
    margin-left: 10rem;
    width: 40rem;
    display: flex;
    align-items: top;
    gap: 1rem;
    font-size: 1.5rem;

    a{
        height: 3rem;
        margin: 10px;

        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom: 3px solid transparent;
        padding: 1rem;
        
    border-radius: 8px;
    }

    a:hover{
        border-bottom: 3px solid ${props => props.theme["green-500"]};
    }

    a.active {
        color: ${(props) => props.theme["green-500"]};
    }


}
`;




