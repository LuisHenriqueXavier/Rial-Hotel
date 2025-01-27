import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer, Overlay, WrapTop } from "./styles";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Overlay>
            <WrapTop>
            <Header />
            <h1>
                Bem-vindos ao
            </h1>
            <strong>
                Rial 
            </strong>
            <span>Hotel</span><br/>
            
            <p>
                Faça já sua reserva, e desfrute de um belo dia de praia, <br/>
                com todo o conforto que você merece!
            </p>
            <Outlet />
            <Footer/>
            </WrapTop>
            </Overlay>
            
        </LayoutContainer>
    )
}