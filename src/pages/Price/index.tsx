import { PriceContainer, Room } from "./styles";
import RoomA from '../../assets/RoomA.jpg'
import RoomB from '../../assets/RoomB.jpg'

export function Price() {
    return (
        <PriceContainer>
            <h1>Preços</h1>

            <h2>Tabela de Alta Temporada</h2>
            <h2>
            Vigência de 16/12/2024 até 31/03/2025 (Exceto Reveillon)<br/>
            *Os valores das diárias poderão ser alterados sem aviso prévio
            </h2>
            <h2>
            O que está incluso na diária: café da manhã, estacionamento fechado, <br/>
            internet wi/fi, uso das piscinas (adulto e infantil) e do espaço de jogos.
            </h2>

                <Room>
                    <img src={RoomA} />
                    <h3>
                        
SUÍTE COM AR CONDICIONADO <br/><br/>
Tv aberta, telefone, frigobar e ar condicionado<br/>

Diárias com início as 12:30 e término às 12:00<br/><br/>

01 Pessoa  -  R$ 215,00<br/>
02 Pessoas - R$ 330,00<br/>
03 Pessoas - R$ 410,00<br/>
04 Pessoas - R$ 490,00<br/><br/>

*Tabela Alta Temporada Verão
                    </h3>
                </Room>
                <Room>
                    <img src={RoomB} />
                    <h3>
                        
SUÍTE COM VENTILADOR <br/><br/>
Tv aberta, telefone, frigobar e ventilador<br/>

Diárias com início as 12:30 e término às 12:00<br/><br/>

01 Pessoa  -  R$ 175,00<br/>
02 Pessoas - R$ 275,00<br/>
03 Pessoas - R$ 340,00<br/>
04 Pessoas - R$ 410,00<br/><br/>

*Tabela Alta Temporada Verão
                    </h3>
                </Room>
        </PriceContainer>
    )
}