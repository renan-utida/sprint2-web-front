import { SectionCorpoNoticia } from "../noticia-geral-styled"
import SustentabilidadeFormulaE from "../../../assets/images/sustentabilidade-formulae.jpg"
import EficienciaFormulaE from '../../../assets/images/eficiencia-formulae.jpg';

import ExtraSustentabilidade from "./ExtraSustentabilidade"

import PesquisaInfo1 from "../../../assets/images/pesquisa-formulae.jpg"
import CarroInfo2 from "../../../assets/images/carro-formulae.jpg"
import HorizonteInfo3 from "../../../assets/images/novos-horizontes.jpg"
import EventoInfo4 from "../../../assets/images/evento-formulae.png"



const CorpoSustentabilidade=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p className="paragr">Na abertura da nova temporada da Fórmula E, as equipes atingiram um marco impressionante: um recorde de 99% de aproveitamento energético durante as corridas. A última geração de carros elétricos, equipados com sistemas de recuperação de energia mais avançados, está redefinindo o que é possível em termos de eficiência no automobilismo.</p>
            <p className="paragr">Essa melhoria foi alcançada por meio de inovações no sistema de frenagem regenerativa, que agora recupera quase toda a energia que seria perdida durante a desaceleração, além de avanços nas baterias de estado sólido, que oferecem maior densidade energética e maior durabilidade. A eficiência extrema dos carros também está forçando os engenheiros a se concentrarem em outras áreas de otimização, como aerodinâmica e redução de peso.</p>
            <img className="img-sus1" src={SustentabilidadeFormulaE} alt="Carro de Formula E em demonstração" />
            <p className="paragr">"A Fórmula E está se tornando um verdadeiro campo de provas para as tecnologias que em breve veremos nas ruas", disse o chefe de engenharia da equipe VoltTech. "Estamos em um ponto em que a eficiência do carro é quase perfeita. Agora o desafio é como usar essa energia da maneira mais inteligente possível."</p>
            <p className="paragr">Com a indústria automotiva observando de perto, essas inovações podem ter um impacto profundo na evolução dos veículos elétricos comerciais, acelerando a transição global para uma mobilidade mais sustentável e eficiente.</p>
            <img className="img-sus2" src={EficienciaFormulaE} alt="Carros de Formula E na pista de corrida em uma competição" />
            <h2>Veja mais!</h2>
            <section className="extra">
                <ExtraSustentabilidade
                    image={PesquisaInfo1}
                    category="Pesquisa"
                    title="Fórmula E: Mahindra lidera pesquisa para tornar corridas mais acessíveis aos fãs"
                    date="Há 3 semanas"
                    description="Iniciativa da Mahindra Racing busca aproximar o público e tornar a Fórmula E mais inclusiva e interativa."
                    link='/noticia-pesquisa'
                />
            </section>
            <section className="extra">
                <ExtraSustentabilidade
                    image={CarroInfo2}
                    category="Tecnologia"
                    title="Novo carro da Mahindra impressiona com design aerodinâmico e autonomia recorde"
                    date="Há 2 dias"
                    description="Mahindra revela modelo inovador para a temporada, com foco em eficiência energética e performance."
                    link='/noticia-tecnologia'
                    />
            </section>
            <section className="extra">
                <ExtraSustentabilidade
                    image={HorizonteInfo3}
                    category="Corrida"
                    title="A Fórmula E Expande Horizontes: Novas Cidades Confirmadas para o Calendário 2025"
                    date="Há 5 dias"
                    description="Liga elétrica anuncia adições emocionantes ao calendário, incluindo corridas na África e no Oriente Médio."
                    link="/noticia-corrida"
                    />
            </section>
            <section className="extra">
                <ExtraSustentabilidade
                    image={EventoInfo4}
                    category="Eventos"
                    title="Fãs da Fórmula E celebram Mahindra Racing em evento exclusivo na Índia"
                    date="Há 1 semana"
                    description="Evento em Mumbai reúne milhares de fãs e mostra crescimento do esporte no país."
                    link="/noticia-eventos"
                />
            </section>
        </SectionCorpoNoticia>
    )
}

export default CorpoSustentabilidade