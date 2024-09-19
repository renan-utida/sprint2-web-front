import { SectionCorpoNoticia } from "../noticia-geral-styled"
import SustentabilidadeFormulaE from "../../../assets/sustentabilidade-formulae.jpg"
import EficienciaFormulaE from '../../../assets/eficiencia-formulae.jpg';



const CorpoSustentabilidade=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p>Na abertura da nova temporada da Fórmula E, as equipes atingiram um marco impressionante: um recorde de 99% de aproveitamento energético durante as corridas. A última geração de carros elétricos, equipados com sistemas de recuperação de energia mais avançados, está redefinindo o que é possível em termos de eficiência no automobilismo.</p>
            <p>Essa melhoria foi alcançada por meio de inovações no sistema de frenagem regenerativa, que agora recupera quase toda a energia que seria perdida durante a desaceleração, além de avanços nas baterias de estado sólido, que oferecem maior densidade energética e maior durabilidade. A eficiência extrema dos carros também está forçando os engenheiros a se concentrarem em outras áreas de otimização, como aerodinâmica e redução de peso.</p>
            <img className="img-sus1" src={SustentabilidadeFormulaE} alt="Carro de Formula E em demonstração" />
            <p>"A Fórmula E está se tornando um verdadeiro campo de provas para as tecnologias que em breve veremos nas ruas", disse o chefe de engenharia da equipe VoltTech. "Estamos em um ponto em que a eficiência do carro é quase perfeita. Agora o desafio é como usar essa energia da maneira mais inteligente possível."</p>
            <p>Com a indústria automotiva observando de perto, essas inovações podem ter um impacto profundo na evolução dos veículos elétricos comerciais, acelerando a transição global para uma mobilidade mais sustentável e eficiente.</p>
            <img className="img-sus2" src={EficienciaFormulaE} alt="Carros de Formula E na pista de corrida em uma competição" />
        </SectionCorpoNoticia>
    )
}

export default CorpoSustentabilidade