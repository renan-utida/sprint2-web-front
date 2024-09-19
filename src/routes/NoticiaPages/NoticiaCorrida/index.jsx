import { MainNoticia } from "../noticia-geral-styled"

import TituloCorrida from "./TituloCorrida"
import CorpoCorrida from "./CorpoCorrida"
import ExtraCorrida from "./ExtraCorrida"

import EventoInfo1 from "../../../assets/evento-formulae.png"
import EficienciaInfo2 from "../../../assets/eficiencia-formulae.jpg"
import PesquisaInfo3 from "../../../assets/pesquisa-formulae.jpg"
import CarroInfo4 from "../../../assets/carro-formulae.jpg"

const NoticiaCorrida=()=>{

    return(
        <MainNoticia>
            <TituloCorrida/>
            <CorpoCorrida/>
            <section className="veja-mais">
                <h2>Veja mais!</h2>
            </section>
            <section className="extra1">
                <ExtraCorrida
                    image={EventoInfo1}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                />
            </section>
            <section className="extra2">
                <ExtraCorrida
                    image={EficienciaInfo2}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório para a indústria automotiva."
                />
            </section>
            <section className="extra3">
                <ExtraCorrida
                    image={PesquisaInfo3}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                />
            <section className="extra4">
                <ExtraCorrida
                    image={CarroInfo4}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            </section>
        </MainNoticia>
    )
}

export default NoticiaCorrida