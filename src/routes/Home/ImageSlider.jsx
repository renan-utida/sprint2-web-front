import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  SlideshowContainer, 
  Slide, 
  PrevButton, 
  NextButton, 
  DotsContainer, 
  Dot, 
} from './home-styled';
// Import das imagens do SlideshowContainer
import CarroNoticia1 from '../../assets/carro-formulae.jpg';
import HorizonteNoticia2 from '../../assets/novos-horizontes.jpg';
import EventoNoticia3 from '../../assets/evento-formulae.png';
import EficienciaNoticia4 from '../../assets/eficiencia-formulae.jpg';
import PesquisaNoticia5 from '../../assets/pesquisa-formulae.jpg';

const ImageSlider=()=>{

    const [slideIndex, setSlideIndex] = useState(1);
    const totalSlides = 5; // Você pode alterar para mais ou menos slides conforme necessário
    let slideInterval;
  
    // Função para iniciar o autoplay
    const startAutoSlide = () => {
      slideInterval = setInterval(() => {
        nextSlide();
      }, 7000); // Troca a imagem a cada 7 segundos
    };
  
    // Função para o próximo slide
    const nextSlide = () => {
      setSlideIndex(slideIndex === totalSlides ? 1 : slideIndex + 1);
    };
  
    // Função para o slide anterior
    const prevSlide = () => {
      setSlideIndex(slideIndex === 1 ? totalSlides : slideIndex - 1);
    };
  
    // Função para ir diretamente para um slide específico
    const currentSlide = (n) => {
      setSlideIndex(n);
    };
  
    useEffect(() => {
      startAutoSlide(); // Inicia o autoplay
      return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
    }, [slideIndex]);
  
    // Lista de imagens e títulos (Você pode substituir pelas imagens reais)
    const slides = [
      {
        image: CarroNoticia1,
        title: 'Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde',
        subtitle: 'Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance.',
        link: '/noticia-tecnologia',
      },
      {
        image: HorizonteNoticia2,
        title: 'A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025',
        subtitle: 'Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio.',
        link: '/noticia-corrida',
      },
      {
        image: EventoNoticia3,
        title: 'Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia',
        subtitle: 'Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país.',
        link: '/noticia-eventos',
      },
      {
        image: EficienciaNoticia4,
        title: 'Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada',
        subtitle: 'A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva.',
        link: '/noticia-sustentabilidade',
      },
      {
        image: PesquisaNoticia5,
        title: 'Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs',
        subtitle: 'Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa.',
        link: '/noticia-pesquisa',
      }
    ];

    return(
        <SlideshowContainer className='slideshow'>
            {slides.map((slide, index) => ( // Para cada slide da lista "slides", renderiza um componente de Slide com os dados da imagem, título e subtítulo.
                <Slide key={index} style={{ display: slideIndex === index + 1 ? 'block' : 'none' }}>
                    <Link to={slide.link}>
                        {/* Renderiza a imagem do slide em um link */}
                        <img src={slide.image} alt={`Slide ${index + 1}`} />
                        {/* Aplica um gradiente sobre a imagem para dar contraste */}
                        <div className='gradient-overlay'></div>
                        {/* Exibe o título do slide */}
                        <h1>{slide.title}</h1>
                        {/* Exibe o subtítulo do slide */}
                        <p>{slide.subtitle}</p>
                        {/* Mostra a numeração do slide, exemplo: "1 / 5" */}
                        <div className='numeracao-slide'>{`${index + 1} / ${totalSlides}`}</div>
                    </Link>
                </Slide>
            ))}

            <PrevButton onClick={prevSlide}>&#10094;</PrevButton>
            <NextButton onClick={nextSlide}>&#10095;</NextButton>

            <DotsContainer>

                {slides.map((_, index) => ( // Para cada slide da lista "slides", renderiza um componente Dot (os pontos de navegação). O primeiro argumento (slide) é ignorado com o uso de "_" porque não é necessário neste caso.
                    <Dot
                        key={index} 
                        /* Ao clicar em um dot, muda para o slide correspondente */
                        onClick={() => currentSlide(index + 1)} 
                        /* Ativa o estilo especial para o dot do slide atual */
                        $active={slideIndex === index + 1}
                    />
                ))}
            </DotsContainer>
        </SlideshowContainer>
    )
}

export default ImageSlider