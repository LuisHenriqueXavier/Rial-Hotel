import { RoomContainer, Room } from "./styles";
import RoomA from '../../assets/RoomA/RoomA.jpg'
import rooma1 from '../../assets/RoomA/rooma1.jpg'
import rooma2 from '../../assets/RoomA/rooma2.jpg'
import rooma3 from '../../assets/RoomA/rooma3.jpg'
import rooma4 from '../../assets/RoomA/rooma4.jpg'
import rooma5 from '../../assets/RoomA/rooma5.jpg'
import rooma6 from '../../assets/RoomA/rooma6.jpg'
import rooma7 from '../../assets/RoomA/rooma7.jpg'


export function Rooms() {
    return (
        <RoomContainer>
            <h1>
                Acomodações
            </h1>
            <h3>
                Suítes com ar condicionado</h3>
            <Room>
                <img src={RoomA} alt="" />
                <img src={rooma1} alt="" />
                <img src={rooma2} alt="" />
                <img src={rooma3} alt="" />
                <img src={rooma4} alt="" />
                <img src={rooma5} alt="" />
                <img src={rooma6} alt="" />
                <img src={rooma7} alt="" />
            </Room>

            <h3>
                Suítes com Ventilador de teto</h3>
            <Room>
                <img src={RoomA} alt="" />
                <img src={rooma1} alt="" />
                <img src={rooma2} alt="" />
                <img src={rooma3} alt="" />
                <img src={rooma4} alt="" />
                <img src={rooma5} alt="" />
                <img src={rooma6} alt="" />
            </Room>
        </RoomContainer>
    )
}