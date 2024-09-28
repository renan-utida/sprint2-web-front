import { SectionCorpoNoticia } from "../noticia-geral-styled"
import CorridaMarrocos from "../../../assets/images/corrida-formulae-marrocos.jpg"
import ImagemCorrida from "../../../assets/images/novos-horizontes.jpg"

import ExtraCorrida from "./ExtraCorrida"

import EventoInfo1 from "../../../assets/images/evento-formulae.png"
import EficienciaInfo2 from "../../../assets/images/eficiencia-formulae.jpg"
import PesquisaInfo3 from "../../../assets/images/pesquisa-formulae.jpg"
import CarroInfo4 from "../../../assets/images/carro-formulae.jpg"


const CorpoCorrida=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p className="paragr">A Fórmula E anunciou um novo e emocionante calendário para a temporada 2025, expandindo suas fronteiras para novos territórios. Entre as novas adições estão corridas em Casablanca, Marrocos, e Dubai, Emirados Árabes Unidos, marcando a primeira vez que a categoria elétrica correrá nessas regiões.</p>
            <p className="paragr">A escolha dessas novas localizações faz parte do esforço da Fórmula E para promover a mobilidade sustentável em diferentes continentes. "Queremos levar nossa mensagem de sustentabilidade e inovação para o maior número possível de pessoas", disse o CEO da Fórmula E, Alejandro Agag, ao fazer o anúncio.</p>
            <img className="img-cor1" src={CorridaMarrocos} alt="Corrida de Fórmula E em Marrakesh, Marrocos" />
            <p className="paragr">Além das novas corridas, as cidades de Nova York, Londres e Roma continuam no calendário, mantendo o equilíbrio entre mercados tradicionais e novos destinos. Com isso, espera-se um aumento no número de espectadores locais e globais, especialmente com a crescente popularidade do automobilismo elétrico.</p>
            <p className="paragr">Especialistas acreditam que essa expansão ajudará a consolidar a Fórmula E como um dos campeonatos automobilísticos mais influentes e globais, alcançando novos públicos e inspirando inovações no setor de mobilidade elétrica.</p>
            <img className="img-cor2" src={ImagemCorrida} alt="Carros de Fórmula E posicionados para a corrida" />
            <h2>Veja mais!</h2>
            <section className="extra">
                <ExtraCorrida
                    image={EventoInfo1}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
            <section className="extra">
                <ExtraCorrida
                    image={EficienciaInfo2}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório na indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>
            <section className="extra">
                <ExtraCorrida
                    image={PesquisaInfo3}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
            <section className="extra">
                <ExtraCorrida
                    image={CarroInfo4}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
        </SectionCorpoNoticia>
    )
}

export default CorpoCorrida