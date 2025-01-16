import { useState } from "react";
import { FacilitiesContainer, FullscreenImage } from "./styles";
import img1 from "../../assets/Facilities/1.jpg";
import img2 from "../../assets/Facilities/2.jpg";
import img3 from "../../assets/Facilities/3.jpg";
import img4 from "../../assets/Facilities/4.jpg";
import img5 from "../../assets/Facilities/5.jpg";
import img6 from "../../assets/Facilities/6.jpg";
import img7 from "../../assets/Facilities/7.jpg";
import img8 from "../../assets/Facilities/8.jpg";
import img9 from "../../assets/Facilities/9.jpg";


export function Facilities() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImageFullscreen = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImageFullscreen = () => {
    setSelectedImage(null);
  };
    return (
        <FacilitiesContainer>
            <h1>Instalações</h1>
        {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map(
          (image, index) => (
            <img
              key={index}
              src={image}
              alt={`Room ${index + 1}`}
              onClick={() => openImageFullscreen(image)}
            />
          )
        )}
        
      {selectedImage && (
        <FullscreenImage
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
        </FullscreenImage>
      )}
        </FacilitiesContainer>
    )
}