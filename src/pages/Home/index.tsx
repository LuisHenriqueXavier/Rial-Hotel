import { NavLink } from "react-router-dom";
import { HomeContainer, SectionContainer, SectionTitle, SectionDescription } from "./styles";

import img1 from '../../assets/facilities/1.jpg'; // Imagem da estrutura
import img2 from '../../assets/RoomA/RoomA.jpg'; // Imagem das acomodações
import img3 from '../../assets/Facilities/rial-logo.jpg';
import img4 from '../../assets/facilities/4.jpg'; // Imagem de contato

export function Home() {
  return (
    <HomeContainer>
      <SectionContainer>
        <img src={img1} alt="Estrutura" style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
        <SectionTitle>Estrutura</SectionTitle>
        <SectionDescription>
          Conheça a nossa infraestrutura, equipada com tudo o que você precisa para uma estadia confortável.
        </SectionDescription>
        <NavLink to="/facilities">Saiba mais</NavLink>
      </SectionContainer>
      
      <SectionContainer>
        <img src={img2} alt="Acomodações" style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
        <SectionTitle>Acomodações</SectionTitle>
        <SectionDescription>
          Nossas acomodações oferecem conforto e comodidade, com opções para todos os gostos e orçamentos.
        </SectionDescription>
        <NavLink to="/rooms">Confira as opções</NavLink>
      </SectionContainer>
      
      <SectionContainer>
        <img src={img3} alt="Preços" style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
        <SectionTitle>Preços</SectionTitle>
        <SectionDescription>
          Oferecemos preços acessíveis e competitivos, com pacotes especiais para todos os tipos de hóspedes.
        </SectionDescription>
        <NavLink to="/price">Veja os valores</NavLink>
      </SectionContainer>
      
      <SectionContainer>
        <img src={img4} alt="Contato" style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }} />
        <SectionTitle>Contato</SectionTitle>
        <SectionDescription>
          Entre em contato conosco para mais informações ou para fazer uma reserva. Estamos à disposição!
        </SectionDescription>
        <NavLink to="/contact">Fale conosco</NavLink>
      </SectionContainer>
    </HomeContainer>
  );
}
