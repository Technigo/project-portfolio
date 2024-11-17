// src/components/topSection/topSection.jsx

import styled from 'styled-components';
import rectangle18black from '/public/images/rectangle-18black.jpg';
import rectangle16miscelaneous from '/public/images/rectangle-16miscelaneous.jpg';
import rectangle17red from '/public/images/rectangle-17red.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Styled Components
const TopSectionContainer = styled.div`
  background-color: var(--primary-bg-color);
  color: white;
  text-align: center;
  padding: 40px 20px;
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0;
  gap: 16px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: black;
  border-radius: 12px;
  padding: 20px;
  margin: 0 auto;
`;

const StyledCarousel = styled(Carousel)`
  .carousel-root {
    border-radius: 12px;
    overflow: hidden;
  }

  .carousel .slide img {
    height: 400px; /* Tamaño ajustado de las imágenes */
    object-fit: cover;
  }
`;

const AdditionalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  color: white;
`;

const TopSection = () => {
    // Array de imágenes para el carousel
    const carouselImages = [
        rectangle18black,
        rectangle16miscelaneous,
        rectangle17red,

    ];

    return (
        <TopSectionContainer>
            {/* Texto de introducción */}
            <IntroText>
                <h3>Hi there! I&apos;m</h3>
                <h1>MARÍA FERNÁNDEZ HUERTA</h1>
                <h3>Front-end developer with an ICT & cibersecurity legal background</h3>
            </IntroText>

            {/* Carousel de imágenes */}
            <CarouselContainer>
                <StyledCarousel
                    showArrows={true}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    centerMode={true}
                    centerSlidePercentage={33.33} // Muestra 3 imágenes a la vez
                    emulateTouch={true}
                    interval={3000} // Intervalo de 3 segundos entre imágenes
                >
                    {carouselImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Imagen Carousel ${index + 1} `} />
                        </div>
                    ))}
                </StyledCarousel>
            </CarouselContainer>

            {/* Texto adicional */}
            <AdditionalText>
                <h2>BIO</h2>
                <p>Although my predominant background is on legal, as a labour, commercial and ICT lawyer also have a background in Cybersecurity and data protection. A few years ago, I founded out my passion for tech and that I would mix my two experiences. After a Master program in ICT law _emergent technologies law_ started my studies on Software enginering, fulfilled with the bootcamp con front end development.</p>
            </AdditionalText>
        </TopSectionContainer >
    );
};

export default TopSection;