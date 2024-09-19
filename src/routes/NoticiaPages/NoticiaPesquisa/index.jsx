import { MainNoticia } from "../noticia-geral-styled"

import TituloPesquisa from "./TituloPesquisa"
import CorpoPesquisa from "./CorpoPesquisa"
import ExtraPesquisa from "./ExtraPesquisa"

import CarroInfo1 from "../../../assets/carro-formulae.jpg"
import HorizonteInfo2 from "../../../assets/novos-horizontes.jpg"
import EventoInfo3 from "../../../assets/evento-formulae.png"
import EficienciaInfo4 from "../../../assets/eficiencia-formulae.jpg"

const NoticiaPesquisa=()=>{

    return(
        <MainNoticia>
            <TituloPesquisa/>
            <CorpoPesquisa/>
            <section className="veja-mais">
                <h2>Veja mais!</h2>
            </section>
            <section className="extra1">
                <ExtraPesquisa
                    image={CarroInfo1}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra2">
                <ExtraPesquisa
                    image={HorizonteInfo2}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
            <section className="extra3">
                <ExtraPesquisa
                    image={EventoInfo3}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
            <section className="extra4">
                <ExtraPesquisa
                    image={EficienciaInfo4}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>
        </MainNoticia>
    )
}

export default NoticiaPesquisa