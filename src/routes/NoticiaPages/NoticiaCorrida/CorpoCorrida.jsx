import { SectionCorpoNoticia } from "../noticia-geral-styled"
import CarroFormulaE from "../../../assets/carro-formulae.jpg"
import CorridaMarrocos from "../../../assets/corrida-formulae-marrocos.jpg"
import ImagemCorrida from "../../../assets/novos-horizontes.jpg"



const CorpoCorrida=()=>{

    return(
        <SectionCorpoNoticia className="corpo-noticia">
            <p>A Fórmula E anunciou um novo e emocionante calendário para a temporada 2025, expandindo suas fronteiras para novos territórios. Entre as novas adições estão corridas em Casablanca, Marrocos, e Dubai, Emirados Árabes Unidos, marcando a primeira vez que a categoria elétrica correrá nessas regiões.</p>
            <p>A escolha dessas novas localizações faz parte do esforço da Fórmula E para promover a mobilidade sustentável em diferentes continentes. "Queremos levar nossa mensagem de sustentabilidade e inovação para o maior número possível de pessoas", disse o CEO da Fórmula E, Alejandro Agag, ao fazer o anúncio.</p>
            <img className="img-cor1" src={CorridaMarrocos} alt="Corrida de Fórmula E em Marrakesh, Marrocos" />
            <p>Além das novas corridas, as cidades de Nova York, Londres e Roma continuam no calendário, mantendo o equilíbrio entre mercados tradicionais e novos destinos. Com isso, espera-se um aumento no número de espectadores locais e globais, especialmente com a crescente popularidade do automobilismo elétrico.</p>
            <p>Especialistas acreditam que essa expansão ajudará a consolidar a Fórmula E como um dos campeonatos automobilísticos mais influentes e globais, alcançando novos públicos e inspirando inovações no setor de mobilidade elétrica.</p>
            <img className="img-cor2" src={ImagemCorrida} alt="Carros de Fórmula E posicionados para a corrida" />
        </SectionCorpoNoticia>
    )
}

export default CorpoCorrida