import { SectionCorpoNoticia } from "../noticia-geral-styled"
import EventoFormulaE from "../../../assets/evento-formulae-india.jpg"
import EventoIndia from '../../../assets/evento-formulae.png';



const CorpoEventos=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p>A Mahindra Racing promoveu um evento especial para seus fãs em Mumbai, Índia, neste fim de semana, atraindo milhares de entusiastas da Fórmula E. A celebração foi marcada por uma série de atividades interativas, que incluíram simuladores de corrida, apresentações dos pilotos e um espaço para autógrafos, aproximando ainda mais os fãs do mundo da mobilidade elétrica no automobilismo.</p>
            <p>O evento contou com a presença dos principais pilotos da equipe e a estrela emergente francesa Camille Dupont, que compartilharam suas experiências na temporada e seus desafios na pista. Além disso, os engenheiros da Mahindra Racing deram uma palestra sobre as inovações tecnológicas que a equipe está trazendo para o campeonato.</p>
            <img className="img-eve1" src={EventoFormulaE} alt="Evento Formula E na India - Imagem gerada por IA" />
            <p>"É incrível ver como a Fórmula E está crescendo na Índia e no mundo", comentou um espectador durante o evento. "Ter esse apoio dos fãs nos dá energia para continuar lutando por mais vitórias na pista." O evento também destacou o impacto ambiental positivo da Fórmula E, com demonstrações sobre o uso de tecnologias limpas e renováveis.</p>
            <p>Para a Mahindra, o evento foi uma oportunidade de reforçar sua presença no cenário esportivo e tecnológico da Índia, além de solidificar sua conexão com o público local. Com o sucesso do evento, a Mahindra Racing já planeja expandir suas ações de engajamento com os fãs em outros estados do país.</p>
            <img className="img-eve2" src={EventoIndia} alt="Evento Formula E na India - Imagem gerada por IA" />
        </SectionCorpoNoticia>
    )
}

export default CorpoEventos