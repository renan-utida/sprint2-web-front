import { SectionCorpoNoticia } from "../noticia-geral-styled"
import ExtraTecnologia from "./ExtraTecnologia"

import CarroFormulaE from "../../../assets/carro-formulae.jpg"
import ImagemTecnologia from "../../../assets/noticia-tecnologia-formulae.jpg"

import HorizonteInfo1 from "../../../assets/novos-horizontes.jpg"
import EventoInfo2 from "../../../assets/evento-formulae.png"
import EficienciaInfo3 from "../../../assets/eficiencia-formulae.jpg"
import PesquisaInfo4 from "../../../assets/pesquisa-formulae.jpg"

const CorpoTecnologia=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p className="paragr">A Mahindra Racing revelou nesta semana o carro que promete revolucionar a próxima temporada da Fórmula E. O novo modelo, batizado de M7-Evolution, apresenta um design aerodinâmico avançado e um sistema de bateria de última geração, permitindo maior autonomia e uma gestão energética superior durante as corridas.</p>
            <p className="paragr">O M7-Evolution foi projetado com materiais mais leves e sustentáveis, além de uma configuração de motor duplo que promete entregar maior torque nas saídas de curva, sem comprometer o consumo de energia. Durante os testes realizados em pista fechada, o carro superou as expectativas ao bater o recorde de maior tempo de utilização contínua sem recargas, uma inovação crucial para a competitividade na Fórmula E.</p>
            <img className="img-tec1" src={ImagemTecnologia} alt="Carro de Fórmula E de lado - Mahindra" />
            <p className="paragr">"O objetivo era criar um carro que não apenas fosse rápido, mas que também refletisse nossa visão de sustentabilidade", explicou o chefe de engenharia da Mahindra. "Esse modelo combina performance e responsabilidade ambiental, e estamos ansiosos para ver como ele vai se sair na temporada."</p>
            <p className="paragr">A novidade foi recebida com entusiasmo pelos fãs da equipe e da categoria, que aguardam ansiosamente para ver o M7-Evolution em ação nas próximas etapas do campeonato. A Mahindra aposta que essa inovação ajudará a equipe a competir de igual para igual com os líderes da temporada.</p>
            <img className="img-tec2" src={CarroFormulaE} alt="Carro elétrico Fórmula E - Mahindra" />
            <h2>Veja mais!</h2>
            <section className="extra">
                <ExtraTecnologia
                    image={HorizonteInfo1}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
            <section className="extra">
                <ExtraTecnologia
                    image={EventoInfo2}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
            <section className="extra">
                <ExtraTecnologia
                    image={EficienciaInfo3}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório na indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>
            <section className="extra">
                <ExtraTecnologia
                    image={PesquisaInfo4}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
        </SectionCorpoNoticia>
    )
}

export default CorpoTecnologia