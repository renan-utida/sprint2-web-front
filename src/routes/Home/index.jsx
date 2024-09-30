import { MainHome } from './home-styled';

import ImageSlider from './ImageSlider';
import InfoContent from './InfoContent';

import CarroInfo1 from '../../assets/images/carro-formulae.jpg';
import HorizonteInfo2 from '../../assets/images/novos-horizontes.jpg';
import EventoInfo3 from '../../assets/images/evento-formulae.png';
import EficienciaInfo4 from '../../assets/images/eficiencia-formulae.jpg';
import PesquisaInfo5 from '../../assets/images/pesquisa-formulae.jpg';

const Home=()=>{

    return(
        <MainHome>
            <ImageSlider className='slideshow'/>

            <section className="recente">
                <h2>Últimas Notícias</h2>
            </section>

            <section className="info1">
                <InfoContent
                    image={CarroInfo1}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                />
            </section>
            
            <section className="info2">
                <InfoContent
                    image={HorizonteInfo2}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link='/noticia-corrida'
                />
            </section>

            <section className="info3">
                <InfoContent
                    image={EventoInfo3}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link='/noticia-eventos'
                />
            </section>

            <section className="info4">
                <InfoContent
                    image={EficienciaInfo4}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>

            <section className="info5">
                <InfoContent
                    image={PesquisaInfo5}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
            
            <section className="info-extra-l"></section>
            <section className="info-extra-r"></section>
        </MainHome>
    )
}

export default Home