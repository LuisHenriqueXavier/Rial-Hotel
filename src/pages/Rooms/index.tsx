import { useState } from "react";
import { RoomContainer, Room } from "./styles";
import RoomA from "../../assets/RoomA/RoomA.jpg";
import rooma1 from "../../assets/RoomA/rooma1.jpg";
import rooma2 from "../../assets/RoomA/rooma2.jpg";
import rooma3 from "../../assets/RoomA/rooma3.jpg";
import rooma4 from "../../assets/RoomA/rooma4.jpg";
import rooma5 from "../../assets/RoomA/rooma5.jpg";
import rooma6 from "../../assets/RoomA/rooma6.jpg";
import rooma7 from "../../assets/RoomA/rooma7.jpg";
import RoomB from "../../assets/RoomB/RoomB.jpg";
import roomb1 from "../../assets/RoomB/roomb1.jpg";
import roomb2 from "../../assets/RoomB/roomb2.jpg";
import roomb3 from "../../assets/RoomB/roomb3.jpg";
import roomb4 from "../../assets/RoomB/roomb4.jpg";
import roomb5 from "../../assets/RoomB/roomb5.jpg";
import roomb6 from "../../assets/RoomB/roomb6.jpg";
import roomb7 from "../../assets/RoomB/roomb7.jpg";
import roomb8 from "../../assets/RoomB/roomb8.jpg";
import roomb9 from "../../assets/RoomB/roomb9.jpg";

export function Rooms() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageFullscreen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageFullscreen = () => {
    setSelectedImage(null);
  };

  return (
    <RoomContainer>
      <h1>Acomodações</h1>
      <h3>Suítes com ar condicionado</h3>
      <Room>
        {[RoomA, rooma1, rooma2, rooma3, rooma4, rooma5, rooma6, rooma7].map(
          (image, index) => (
            <img
              key={index}
              src={image}
              alt={`Room ${index + 1}`}
              onClick={() => openImageFullscreen(image)}
            />
          )
        )}
      </Room>

      <h3>Suítes com Ventilador de teto</h3>
      <Room>
        {[
          RoomB,
          roomb1,
          roomb2,
          roomb3,
          roomb4,
          roomb5,
          roomb6,
          roomb7,
          roomb8,
          roomb9,
        ].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Room B ${index + 1}`}
            onClick={() => openImageFullscreen(image)}
          />
        ))}
      </Room>

      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeImageFullscreen}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
    </RoomContainer>
  );
}
