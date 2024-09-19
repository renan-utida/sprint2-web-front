import { SectionCorpoTec } from "./noticiatecnologia-styled"
import CarroFormulaE from "../../assets/carro-formulae.jpg"
import ImagemTecnologia from "../../assets/noticia-tecnologia-formulae.jpg"


const CorpoTecnologia=()=>{

    return(
        <SectionCorpoTec className="corpo-tecnologia">
            <p>A Mahindra Racing revelou nesta semana o carro que promete revolucionar a próxima temporada da Fórmula E. O novo modelo, batizado de M7-Evolution, apresenta um design aerodinâmico avançado e um sistema de bateria de última geração, permitindo maior autonomia e uma gestão energética superior durante as corridas.</p>
            <p>O M7-Evolution foi projetado com materiais mais leves e sustentáveis, além de uma configuração de motor duplo que promete entregar maior torque nas saídas de curva, sem comprometer o consumo de energia. Durante os testes realizados em pista fechada, o carro superou as expectativas ao bater o recorde de maior tempo de utilização contínua sem recargas, uma inovação crucial para a competitividade na Fórmula E.</p>
            <img className="img-tec1" src={ImagemTecnologia} alt="Carro de Fórmula E de lado - Mahindra" />
            <p>"O objetivo era criar um carro que não apenas fosse rápido, mas que também refletisse nossa visão de sustentabilidade", explicou o chefe de engenharia da Mahindra. "Esse modelo combina performance e responsabilidade ambiental, e estamos ansiosos para ver como ele vai se sair na temporada."</p>
            <p>A novidade foi recebida com entusiasmo pelos fãs da equipe e da categoria, que aguardam ansiosamente para ver o M7-Evolution em ação nas próximas etapas do campeonato. A Mahindra aposta que essa inovação ajudará a equipe a competir de igual para igual com os líderes da temporada.</p>
            <img className="img-tec2" src={CarroFormulaE} alt="Carro elétrico Fórmula E - Mahindra" />
        </SectionCorpoTec>
    )
}

export default CorpoTecnologia