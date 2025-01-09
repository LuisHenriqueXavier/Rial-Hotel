import { PriceContainer, Room, WrapRoom } from "./styles";


export function Price() {
    return (
        <PriceContainer>
            <h1>Preços</h1>

            <h2>Tabela de Alta Temporada</h2>
            <span>
            Vigência de 16/12/2024 até 31/03/2025 (Exceto Reveillon)
            *Os valores das diárias poderão ser alterados sem aviso prévio
            </span>

            <WrapRoom>
                <Room>
                    suites com ar-condicionado
                </Room>
                <Room>
                    suíte com ventilador
                </Room>
            </WrapRoom>
        </PriceContainer>
    )
}