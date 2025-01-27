import { HeaderContainer } from "./styles";
import rialLogo from '../../assets/rialLogo.jpg';
import { NavLink } from "react-router-dom";
import { House, Bed, Coins, Phone, Buildings } from "phosphor-react"; // Ícones SVG do menu

export function Header() {
  return (
    <HeaderContainer>
      <img src={rialLogo} alt="Rial Hotel Logo" />
      
      <nav>
        <NavLink to="/" aria-label="Início">
          <House size={20} weight="bold" alt="Início" /> Home
        </NavLink>
        <NavLink to="/facilities" aria-label="Estrutura">
          <Buildings size={20} weight="bold" alt="Estrutura" /> Estrutura
        </NavLink>
        <NavLink to="/rooms" aria-label="Acomodações">
          <Bed size={20} weight="bold" alt="Acomodações" /> Acomodações
        </NavLink>
        <NavLink to="/price" aria-label="Valores">
          <Coins size={20} weight="bold" alt="Valores" /> Preços
        </NavLink>
        <NavLink to="/contact" aria-label="Contato">
          <Phone size={20} weight="bold" alt="Contato" /> Contato
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
