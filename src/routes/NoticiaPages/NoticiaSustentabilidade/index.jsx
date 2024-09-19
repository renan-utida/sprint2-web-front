import { MainNoticia } from "../noticia-geral-styled"

import TituloSustentabilidade from "./TituloSustentabilidade"
import CorpoSustentabilidade from "./CorpoSustentabilidade"
import ExtraSustentabilidade from "./ExtraSustentabilidade"

import PesquisaInfo1 from "../../../assets/pesquisa-formulae.jpg"
import CarroInfo2 from "../../../assets/carro-formulae.jpg"
import HorizonteInfo3 from "../../../assets/novos-horizontes.jpg"
import EventoInfo4 from "../../../assets/evento-formulae.png"

const NoticiaSustentabilidade=()=>{

    return(
        <MainNoticia>
            <TituloSustentabilidade/>
            <CorpoSustentabilidade/>
            <section className="veja-mais">
                <h2>Veja mais!</h2>
            </section>
            <section className="extra1">
                <ExtraSustentabilidade
                    image={PesquisaInfo1}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
            <section className="extra2">
                <ExtraSustentabilidade
                    image={CarroInfo2}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra3">
                <ExtraSustentabilidade
                    image={HorizonteInfo3}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
            <section className="extra4">
                <ExtraSustentabilidade
                    image={EventoInfo4}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
        </MainNoticia>
    )
}

export default NoticiaSustentabilidade