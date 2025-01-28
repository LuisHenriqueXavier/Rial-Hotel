import { HeaderContainer } from "./styles"; // Importa os estilos para o cabeçalho
import rialLogo from '../../assets/rialLogo.jpg'; // Importa o logo do hotel
import { NavLink } from "react-router-dom"; // Importa o componente NavLink para navegação
import { House, Bed, Coins, Phone, Buildings } from "phosphor-react"; // Ícones SVG do Phosphor

export function Header() {
  return (
    <HeaderContainer>
      {/* Logo do hotel */}
      <img src={rialLogo} alt="Rial Hotel Logo" />
      
      <nav>
        {/* Links de navegação com ícones */}
        <NavLink to="/" aria-label="Início">
          <House size={20} weight="bold" alt="Início" /> {/* Ícone de casa */}
          Home {/* Texto do link */}
        </NavLink>
        <NavLink to="/facilities" aria-label="Estrutura">
          <Buildings size={20} weight="bold" alt="Estrutura" /> {/* Ícone de prédios */}
          Estrutura
        </NavLink>
        <NavLink to="/rooms" aria-label="Acomodações">
          <Bed size={20} weight="bold" alt="Acomodações" /> {/* Ícone de cama */}
          Acomodações
        </NavLink>
        <NavLink to="/price" aria-label="Valores">
          <Coins size={20} weight="bold" alt="Valores" /> {/* Ícone de moedas */}
          Preços
        </NavLink>
        <NavLink to="/contact" aria-label="Contato">
          <Phone size={20} weight="bold" alt="Contato" /> {/* Ícone de telefone */}
          Contato
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
