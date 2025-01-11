import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: auto;
    display: flex;
    align-items: top;
    justify-content: space-between;
    gap: 3rem;


    img{
        margin-top: -40px;
        border-radius: 10px;
    }

    nav {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.25rem;

    a{
        height: auto;
        text-decoration: none;
        color: ${(props) => props.theme.white};

        display: flex;
        justify-content: center;
        align-items: center;

        border-bottom: 3px solid transparent;
        padding: 1rem;   
        border-radius: 10px;
    }

    a:hover{
        border-bottom: 3px solid ${props => props.theme["red-700"]};
    }

    a.active {
        color: ${(props) => props.theme["red-700"]};
        border-bottom: 3px solid ${props => props.theme["red-500"]};
        
    }


}
`;




