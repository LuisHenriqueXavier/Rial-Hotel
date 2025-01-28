import { NavLink } from "react-router-dom";
import { 
  HomeContainer, 
  ContentContainer, 
  Sidebar, 
  SectionContainer, 
  SectionTitle, 
  SectionDescription, 
  ButtonLink // Adicionando o botão Link para o iframe
} from "./styles";

import img1 from '../../assets/facilities/1.jpg'; // Imagem da estrutura
import img2 from '../../assets/RoomA/RoomA.jpg'; // Imagem das acomodações
import img3 from '../../assets/Facilities/7.jpg'; // Imagem dos preços
import img4 from '../../assets/facilities/4.jpg'; // Imagem de contato

export function Home() {
  return (
    <HomeContainer>
      {/* Container principal da página */}
      <ContentContainer>
        
        {/* Sidebar com cinco iframes */}
        <Sidebar>
          {/* Primeiro iframe */}
          <div className="iframe-container">
            <ButtonLink
              href="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/praiasroteiro.html"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Protege contra vulnerabilidades de segurança
            >
              Ir para o Roteiro de Praias
            </ButtonLink>
            <iframe
              src="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/praiasroteiro.html" // Link para o conteúdo do primeiro iframe
              title="Roteiro de Praias"
              scrolling="no" // Desativa a barra de rolagem interna do iframe
              frameBorder="0" // Remove a borda do iframe
            ></iframe>
          </div>

          {/* Segundo iframe */}
          <div className="iframe-container">
            <ButtonLink
              href="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/historico1.html"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Protege contra vulnerabilidades de segurança
            >
              Ir para o Histórico
            </ButtonLink>
            <iframe
              src="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/historico1.html" // Link para o conteúdo do segundo iframe
              title="Histórico"
              scrolling="no" // Desativa a barra de rolagem interna do iframe
              frameBorder="0" // Remove a borda do iframe
            ></iframe>
          </div>

          {/* Terceiro iframe */}
          <div className="iframe-container">
            <ButtonLink
              href="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/espacoCulturalroteiro.html"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Protege contra vulnerabilidades de segurança
            >
              Ir para o Espaço Cultural
            </ButtonLink>
            <iframe
              src="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/espacoCulturalroteiro.html" // Link para o conteúdo do terceiro iframe
              title="Espaço Cultural"
              scrolling="no" // Desativa a barra de rolagem interna do iframe
              frameBorder="0" // Remove a borda do iframe
            ></iframe>
          </div>

          {/* Quarto iframe */}
          <div className="iframe-container">
            <ButtonLink
              href="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/aventuraroteiro.html"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Protege contra vulnerabilidades de segurança
            >
              Ir para o Roteiro de Aventura
            </ButtonLink>
            <iframe
              src="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/aventuraroteiro.html" // Link para o conteúdo do quarto iframe
              title="Roteiro de Aventura"
              scrolling="no" // Desativa a barra de rolagem interna do iframe
              frameBorder="0" // Remove a borda do iframe
            ></iframe>
          </div>

          {/* Quinto iframe */}
          <div className="iframe-container">
            <ButtonLink
              href="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/ecoturismoroteiro.html"
              target="_blank" // Abre o link em uma nova aba
              rel="noopener noreferrer" // Protege contra vulnerabilidades de segurança
            >
              Ir para o Roteiro de Ecoturismo
            </ButtonLink>
            <iframe
              src="https://www2.itanhaem.sp.gov.br/turismo/pontos_atrativos/ecoturismoroteiro.html" // Link para o conteúdo do quinto iframe
              title="Roteiro de Ecoturismo"
              scrolling="no" // Desativa a barra de rolagem interna do iframe
              frameBorder="0" // Remove a borda do iframe
            ></iframe>
          </div>
        </Sidebar>

        {/* Seções principais do conteúdo */}
        <div className="sections">
          
          {/* Seção de estrutura */}
          <SectionContainer>
            <img src={img1} alt="Estrutura" /> {/* Imagem da estrutura */}
            <SectionTitle>Estrutura</SectionTitle>
            <SectionDescription>
              Conheça a nossa infraestrutura, equipada com tudo o que você precisa para uma estadia confortável.
            </SectionDescription>
            {/* Link para mais detalhes sobre a estrutura */}
            <NavLink to="/facilities">Saiba mais</NavLink>
          </SectionContainer>

          {/* Seção de acomodações */}
          <SectionContainer>
            <img src={img2} alt="Acomodações" /> {/* Imagem das acomodações */}
            <SectionTitle>Acomodações</SectionTitle>
            <SectionDescription>
              Nossas acomodações oferecem conforto e comodidade, com opções para todos os gostos e orçamentos.
            </SectionDescription>
            {/* Link para visualizar as acomodações */}
            <NavLink to="/rooms">Confira as opções</NavLink>
          </SectionContainer>

          {/* Seção de preços */}
          <SectionContainer>
            <img src={img3} alt="Preços" /> {/* Imagem dos preços */}
            <SectionTitle>Preços</SectionTitle>
            <SectionDescription>
              Oferecemos preços acessíveis e competitivos, com pacotes especiais para todos os tipos de hóspedes.
            </SectionDescription>
            {/* Link para visualizar os preços */}
            <NavLink to="/price">Veja os valores</NavLink>
          </SectionContainer>

          {/* Seção de contato */}
          <SectionContainer>
            <img src={img4} alt="Contato" /> {/* Imagem de contato */}
            <SectionTitle>Contato</SectionTitle>
            <SectionDescription>
              Entre em contato conosco para mais informações ou para fazer uma reserva. Estamos à disposição!
            </SectionDescription>
            {/* Link para a página de contato */}
            <NavLink to="/contact">Fale conosco</NavLink>
          </SectionContainer>

        </div>
      </ContentContainer>
    </HomeContainer>
  );
}
