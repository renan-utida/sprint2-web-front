import { SectionCorpoNoticia } from "../noticia-geral-styled"
import MahindraLidera from "../../../assets/mahindra-lidera.jpg"
import MahindraEquipe from '../../../assets/pesquisa-formulae.jpg';

import ExtraPesquisa from "./ExtraPesquisa"

import CarroInfo1 from "../../../assets/carro-formulae.jpg"
import HorizonteInfo2 from "../../../assets/novos-horizontes.jpg"
import EventoInfo3 from "../../../assets/evento-formulae.png"
import EficienciaInfo4 from "../../../assets/eficiencia-formulae.jpg"

const CorpoPesquisa=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p className="paragr">Em um movimento pioneiro, a Mahindra Racing anunciou uma nova pesquisa global com o objetivo de tornar a Fórmula E mais acessível e interativa para os fãs ao redor do mundo. A pesquisa, conduzida em parceria com universidades e especialistas em engajamento de público, visa identificar as principais barreiras que impedem uma maior adesão do público ao esporte e propor soluções inovadoras.</p>
            <p className="paragr">Entre as propostas em análise estão a criação de plataformas digitais mais acessíveis, melhorias nas transmissões ao vivo e o desenvolvimento de experiências imersivas em realidade aumentada para os fãs que acompanham as corridas de forma remota. Além disso, a Mahindra está estudando maneiras de tornar os ingressos mais acessíveis, principalmente em países emergentes, onde o público tem crescido significativamente.</p>
            <img className="img-pes1" src={MahindraLidera} alt="Carro de Formula E em demonstração" />
            <p className="paragr">"Queremos que a Fórmula E seja um esporte para todos, e isso significa entender as necessidades e expectativas do público global", explicou Natasha Mahindra, diretora de comunicação da Mahindra Racing. "Nosso objetivo é criar uma experiência inclusiva, emocionante e, acima de tudo, acessível."</p>
            <p className="paragr">A pesquisa também está analisando o impacto ambiental dos grandes eventos de Fórmula E, propondo formas de reduzir a pegada de carbono dos circuitos e dos deslocamentos dos fãs. A iniciativa foi bem recebida pela comunidade da Fórmula E, que vê no movimento da Mahindra uma oportunidade de aproximar o esporte do público de maneira mais sustentável e inovadora.</p>
            <img className="img-pes2" src={MahindraEquipe} alt="Foto do Carro da Formula E e 3 pessoas atrás" />
            <h2>Veja mais!</h2>
            <section className="extra">
                <ExtraPesquisa
                    image={CarroInfo1}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra">
                <ExtraPesquisa
                    image={HorizonteInfo2}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
            <section className="extra">
                <ExtraPesquisa
                    image={EventoInfo3}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
            <section className="extra">
                <ExtraPesquisa
                    image={EficienciaInfo4}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório na indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>
        </SectionCorpoNoticia>
    )
}

export default CorpoPesquisa