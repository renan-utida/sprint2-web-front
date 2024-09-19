import { MainNoticia } from "./noticiatecnologia-styled"

import TituloTecnologia from "./TituloTecnologia"
import CorpoTecnologia from "./CorpoTecnologia"
import ExtraContent from "./ExtraContent"

import HorizonteInfo from "../../assets/novos-horizontes.jpg"
import EventoInfo from "../../assets/evento-formulae.png"
import EficienciaInfo from "../../assets/eficiencia-formulae.jpg"
import PesquisaInfo from "../../assets/pesquisa-formulae.jpg"

const NoticiaTecnologia=()=>{

    return(
        <MainNoticia>
            <TituloTecnologia/>
            <CorpoTecnologia/>
            <section className="veja-mais">
                <h2>Veja mais!</h2>
            </section>
            <section className="extra1">
                <ExtraContent
                    image={HorizonteInfo}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    />
            </section>
            <section className="extra2">
                <ExtraContent
                    image={EventoInfo}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                />
            </section>
            <section className="extra3">
                <ExtraContent
                    image={EficienciaInfo}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva."
                />
            </section>
            <section className="extra4">
                <ExtraContent
                    image={PesquisaInfo}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                />
            </section>
        </MainNoticia>
    )
}

export default NoticiaTecnologia