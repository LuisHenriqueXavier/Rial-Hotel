import { NavLink } from "react-router-dom";
import { FooterContainer, FooterContent } from "./styles";
import { House, Bed, Coins, Phone, Buildings } from "phosphor-react";
import { WhatsappLogo, FacebookLogo, InstagramLogo } from "phosphor-react"; // Importando os ícones de redes sociais

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <small>
          Rua João Mariano Ferreira, 164 - Centro Itanhaém - SP <br />
          CEP 11740-000 <br />
          reservas@rialhotel.com.br <br />
          Tel: 13 3422-2411 / 98134-7787
        </small>
        <nav>
          <NavLink to="/" aria-label="Início">
            <House size={20} weight="bold" alt="Início" /> 
          </NavLink>
          <NavLink to="/facilities" aria-label="Estrutura">
            <Buildings size={20} weight="bold" alt="Estrutura" /> 
          </NavLink>
          <NavLink to="/rooms" aria-label="Acomodações">
            <Bed size={20} weight="bold" alt="Acomodações" /> 
          </NavLink>
          <NavLink to="/price" aria-label="Preços">
            <Coins size={20} weight="bold" alt="Preços" /> 
          </NavLink>
          <NavLink to="/contact" aria-label="Contato">
            <Phone size={20} weight="bold" alt="Contato" /> 
          </NavLink>
        </nav>

        {/* Redes sociais */}
        <div className="social-media">
          <div className="icons">
            <a
              href="https://wa.me/5513981347787"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsappLogo size={32} color="#25D366" weight="bold" alt="WhatsApp" />
            </a>
            <a
              href="https://www.facebook.com/rialhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookLogo size={32} color="#1877F2" weight="bold" alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com/rialhotel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramLogo size={32} color="#E4405F" weight="bold" alt="Instagram" />
            </a>
          </div>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}
