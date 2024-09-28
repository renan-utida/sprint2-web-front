import { SectionCorpoNoticia } from "../noticia-geral-styled"
import EventoFormulaE from "../../../assets/images/evento-formulae-india.jpg"
import EventoIndia from '../../../assets/images/evento-formulae.png';

import ExtraEventos from "./ExtraEventos"

import EficienciaInfo1 from "../../../assets/images/eficiencia-formulae.jpg"
import PesquisaInfo2 from "../../../assets/images/pesquisa-formulae.jpg"
import CarroInfo3 from "../../../assets/images/carro-formulae.jpg"
import HorizonteInfo4 from "../../../assets/images/novos-horizontes.jpg"


const CorpoEventos=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p className="paragr">A Mahindra Racing promoveu um evento especial para seus fãs em Mumbai, Índia, neste fim de semana, atraindo milhares de entusiastas da Fórmula E. A celebração foi marcada por uma série de atividades interativas, que incluíram simuladores de corrida, apresentações dos pilotos e um espaço para autógrafos, aproximando ainda mais os fãs do mundo da mobilidade elétrica no automobilismo.</p>
            <p className="paragr">O evento contou com a presença dos principais pilotos da equipe e a estrela emergente francesa Camille Dupont, que compartilharam suas experiências na temporada e seus desafios na pista. Além disso, os engenheiros da Mahindra Racing deram uma palestra sobre as inovações tecnológicas que a equipe está trazendo para o campeonato.</p>
            <img className="img-eve1" src={EventoFormulaE} alt="Evento Formula E na India - Imagem gerada por IA" />
            <p className="paragr">"É incrível ver como a Fórmula E está crescendo na Índia e no mundo", comentou um espectador durante o evento. "Ter esse apoio dos fãs nos dá energia para continuar lutando por mais vitórias na pista." O evento também destacou o impacto ambiental positivo da Fórmula E, com demonstrações sobre o uso de tecnologias limpas e renováveis.</p>
            <p className="paragr">Para a Mahindra, o evento foi uma oportunidade de reforçar sua presença no cenário esportivo e tecnológico da Índia, além de solidificar sua conexão com o público local. Com o sucesso do evento, a Mahindra Racing já planeja expandir suas ações de engajamento com os fãs em outros estados do país.</p>
            <img className="img-eve2" src={EventoIndia} alt="Evento Formula E na India - Imagem gerada por IA" />
            <h2>Veja mais!</h2>
            <section className="extra">
                <ExtraEventos
                    image={EficienciaInfo1}
                    category="Sustentabilidade"
                    title="Recorde de Eficiência: Equipes da Fórmula E Atingem 99% de Aproveitamento Energético em Nova Temporada"
                    date="Há 2 semanas"
                    description="A última geração de carros elétricos estabelece novos padrões de eficiência, transformando a Fórmula E em um laboratório na indústria automotiva."
                    link='/noticia-sustentabilidade'
                />
            </section>
            <section className="extra">
                <ExtraEventos
                    image={PesquisaInfo2}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
            <section className="extra">
                <ExtraEventos
                    image={CarroInfo3}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra">
                <ExtraEventos
                    image={HorizonteInfo4}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
        </SectionCorpoNoticia>
    )
}

export default CorpoEventos