import { HeaderContainer } from "./styles";
import rialLogo from '../../assets/rialLogo.jpg'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={rialLogo} alt=""/>
            <nav>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/facilities">
                    Estrutura
                </NavLink>
                <NavLink to="/rooms">
                    Acomodações
                </NavLink>
                <NavLink to="/price">
                    Preços
                </NavLink>
                <NavLink to="/contact">
                    Contato
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}