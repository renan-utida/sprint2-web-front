import { SectionCorpoNoticia } from "../noticia-geral-styled"
import MahindraLidera from "../../../assets/mahindra-lidera.jpg"
import MahindraEquipe from '../../../assets/pesquisa-formulae.jpg';

const CorpoPesquisa=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p>Em um movimento pioneiro, a Mahindra Racing anunciou uma nova pesquisa global com o objetivo de tornar a Fórmula E mais acessível e interativa para os fãs ao redor do mundo. A pesquisa, conduzida em parceria com universidades e especialistas em engajamento de público, visa identificar as principais barreiras que impedem uma maior adesão do público ao esporte e propor soluções inovadoras.</p>
            <p>Entre as propostas em análise estão a criação de plataformas digitais mais acessíveis, melhorias nas transmissões ao vivo e o desenvolvimento de experiências imersivas em realidade aumentada para os fãs que acompanham as corridas de forma remota. Além disso, a Mahindra está estudando maneiras de tornar os ingressos mais acessíveis, principalmente em países emergentes, onde o público tem crescido significativamente.</p>
            <img className="img-pes1" src={MahindraLidera} alt="Carro de Formula E em demonstração" />
            <p>"Queremos que a Fórmula E seja um esporte para todos, e isso significa entender as necessidades e expectativas do público global", explicou Natasha Mahindra, diretora de comunicação da Mahindra Racing. "Nosso objetivo é criar uma experiência inclusiva, emocionante e, acima de tudo, acessível."</p>
            <p>A pesquisa também está analisando o impacto ambiental dos grandes eventos de Fórmula E, propondo formas de reduzir a pegada de carbono dos circuitos e dos deslocamentos dos fãs. A iniciativa foi bem recebida pela comunidade da Fórmula E, que vê no movimento da Mahindra uma oportunidade de aproximar o esporte do público de maneira mais sustentável e inovadora.</p>
            <img className="img-pes2" src={MahindraEquipe} alt="Foto do Carro da Formula E e 3 pessoas atrás" />
        </SectionCorpoNoticia>
    )
}

export default CorpoPesquisa