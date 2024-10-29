
import iconBrasil from "../../assets/images/iconBrasil.png"
import iconDistancia from "../../assets/images/iconDistancia.png"
import iconPin from "../../assets/images/iconPin.png"
import iconTemperatura from "../../assets/images/iconTemperatura.png"
import iconUmidade from "../../assets/images/iconUmidade.png"
import iconVelocidade from "../../assets/images/iconVelocidade.png"
import iconPiloto from "../../assets/images/iconPiloto.png"
import iconPiloto2 from "../../assets/images/iconPiloto2.png"
import iconCarro from "../../assets/images/iconCarro.png"

import { DivInfo, Icone, Runners, DivTelemetria } from "./maisInfo-styled"

const BoxMaisInfo = () => {
    return (
        <main>
            <section>
                <DivTelemetria>
                    <div className="localizacao">
                        <img className='img-brasil' src={iconBrasil} alt="Brasil" />
                        <div className="info">
                            <div className="local-data">
                                <h1>BRASIL</h1>
                                <p>São Paulo</p>
                            </div>
                            <p>07 Dez</p>
                        </div>
                    </div>
                    <div className="info-pista">
                        <div className="local telemetria-info">
                            <Icone src={iconPin} alt="icone-local" />
                            <p>Sambódromo do Anhembi</p>
                        </div>
                        <div className="temperatura telemetria-info">
                            <Icone src={iconTemperatura} alt="temperatura" />
                            <p>32ºC</p>
                        </div>
                        <div className="umidade telemetria-info">
                            <Icone src={iconUmidade} alt="umidade" />
                            <p>45%</p>
                        </div>
                    </div>

                </DivTelemetria>
            </section>
            <h1 className="titulo-telemetria">TELEMETRIA DOS VEÍCULOS</h1>
            <Runners>
                <DivInfo>
                    <div className="card-piloto">
                        <img src={iconPiloto} alt="piloto" />
                        <div className="conteudo-card-piloto">
                            <div className="nome-piloto">
                                <h2>LUCAS</h2>
                                <p>Di Grassi</p>
                            </div>
                            <div className="velocidade">
                                <Icone src={iconVelocidade} alt="velocidade" />
                                <p>140 km/h</p>
                            </div>
                            <div className="distancia">
                                <Icone src={iconDistancia} alt="distância" />
                                <p>3.5m</p>
                            </div>
                            <img src={iconCarro} alt="carro" />
                        </div>
                    </div>
                </DivInfo>
                <DivInfo>
                    <div className="card-piloto">
                        <img src={iconPiloto2} alt="piloto" />
                        <div className="conteudo-card-piloto">
                            <div className="nome-piloto">
                                <h2>SERGIO</h2>
                                <p>Sette Camara</p>
                            </div>
                            <div className="velocidade">
                                <Icone src={iconVelocidade} alt="velocidade" />
                                <p>172 km/h</p>
                            </div>
                            <div className="distancia">
                                <Icone src={iconDistancia} alt="distância" />
                                <p>3m</p>
                            </div>
                            <img src={iconCarro} alt="carro" />
                        </div>
                    </div>
                </DivInfo>
            </Runners>
        </main>
    )
}

export default BoxMaisInfo