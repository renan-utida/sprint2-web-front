import { MainNoticia } from "../noticia-geral-styled"

import TituloEventos from "./TituloEventos"
import CorpoEventos from "./CorpoEventos"
import ExtraEventos from "./ExtraEventos"

import EficienciaInfo1 from "../../../assets/eficiencia-formulae.jpg"
import PesquisaInfo2 from "../../../assets/pesquisa-formulae.jpg"
import CarroInfo3 from "../../../assets/carro-formulae.jpg"
import HorizonteInfo4 from "../../../assets/novos-horizontes.jpg"

const NoticiaEventos=()=>{

    return(
        <MainNoticia>
            <TituloEventos/>
            <CorpoEventos/>
            <section className="veja-mais">
                <h2>Veja mais!</h2>
            </section>
            <section className="extra1">
                <ExtraEventos
                    image={EficienciaInfo1}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva."
                />
            </section>
            <section className="extra2">
                <ExtraEventos
                    image={PesquisaInfo2}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                />
            </section>
            <section className="extra3">
                <ExtraEventos
                    image={CarroInfo3}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra4">
                <ExtraEventos
                    image={HorizonteInfo4}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
        </MainNoticia>
    )
}

export default NoticiaEventos