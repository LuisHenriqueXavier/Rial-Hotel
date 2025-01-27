import { NavLink } from "react-router-dom";
import { FooterContainer, FooterContent } from "./styles";
import { House, Bed, Coins, Phone, Buildings } from "phosphor-react";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2025 Rial Hotel. Todos os direitos reservados.</p>
        <p>
          Rua João Mariano Ferreira, 164 - Centro Itanhaém - SP <br />
          CEP 11740-000 <br />
          reservas@rialhotel.com.br <br />
          Tel: 13 3422-2411 / 98134-7787
        </p>
        <nav>
          <NavLink to="/" aria-label="Início">
            <House size={20} weight="bold" alt="Início" /> Início
          </NavLink>
          <NavLink to="/facilities" aria-label="Estrutura">
            <Buildings size={20} weight="bold" alt="Estrutura" /> Estrutura
          </NavLink>
          <NavLink to="/rooms" aria-label="Acomodações">
            <Bed size={20} weight="bold" alt="Acomodações" /> Acomodações
          </NavLink>
          <NavLink to="/price" aria-label="Valores">
            <Coins size={20} weight="bold" alt="Valores" /> Valores
          </NavLink>
          <NavLink to="/contact" aria-label="Contato">
            <Phone size={20} weight="bold" alt="Contato" /> Contato
          </NavLink>
        </nav>
      </FooterContent>
    </FooterContainer>
  );
}
