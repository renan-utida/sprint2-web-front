// import { useEffect, useState } from 'react';
import iconBrasil from "../../assets/images/iconBrasil.png";
import iconDistancia from "../../assets/images/iconDistancia.png";
import iconPin from "../../assets/images/iconPin.png";
import iconTemperatura from "../../assets/images/iconTemperatura.png";
import iconUmidade from "../../assets/images/iconUmidade.png";
import iconVelocidade from "../../assets/images/iconVelocidade.png";
import { DivInfo, Icone, Runners, DivTelemetria } from "./maisInfo-styled";

const pilotosData = {
    "pilotos": [
        {
            "nome": "Lucas",
            "sobrenome": "di Grassi",
            "foto": "src/assets/images/iconPiloto.png",
            "fotoCarro": "src/assets/images/iconCarro8.png"
        },
        {
            "nome": "Sergio",
            "sobrenome": "Sette Camara",
            "foto": "src/assets/images/iconPiloto2.png",
            "fotoCarro": "src/assets/images/iconCarro2.png"
        },
        {
            "nome": "Pascal",
            "sobrenome": "Wehrlein",
            "foto": "src/assets/images/iconPiloto3.png",
            "fotoCarro": "src/assets/images/iconCarro3.png"
        },
        {
            "nome": "Mitch",
            "sobrenome": "Evans",
            "foto": "src/assets/images/iconPiloto4.png",
            "fotoCarro": "src/assets/images/iconCarro4.png"
        },

        {
            "nome": "Nick",
            "sobrenome": "Cassidy",
            "foto": "src/assets/images/iconPiloto5.png",
            "fotoCarro": "src/assets/images/iconCarro5.png"
        },
        {
            "nome": "Oliver",
            "sobrenome": "Rowland",
            "foto": "src/assets/images/iconPiloto6.png",
            "fotoCarro": "src/assets/images/iconCarro6.png"
        },
        {
            "nome": "Jean-Eric",
            "sobrenome": "Vergne",
            "foto": "src/assets/images/iconPiloto7.png",
            "fotoCarro": "src/assets/images/iconCarro7.png"
        },
        {
            "nome": "Antonio",
            "sobrenome": "Da Costa",
            "foto": "src/assets/images/iconPiloto8.png",
            "fotoCarro": "src/assets/images/iconCarro8.png"
        },
        {
            "nome": "Jake",
            "sobrenome": "Dennis",
            "foto": "src/assets/images/iconPiloto9.png",
            "fotoCarro": "src/assets/images/iconCarro9.png"
        },
        {
            "nome": "Max",
            "sobrenome": "Gunther",
            "foto": "src/assets/images/iconPiloto10.png",
            "fotoCarro": "src/assets/images/iconCarro10.png"
        },
        {
            "nome": "Robin",
            "sobrenome": "Frijns",
            "foto": "src/assets/images/iconPiloto11.png",
            "fotoCarro": "src/assets/images/iconCarro11.png"
        },
        {
            "nome": "Stoffel",
            "sobrenome": "Vandoorne",
            "foto": "src/assets/images/iconPiloto12.png",
            "fotoCarro": "src/assets/images/iconCarro12.png"
        },
    ]
};

const BoxMaisInfo = () => {
    // const [dadosIoT, setDadosIoT] = useState({
    //     temperature: null,
    //     humidity: null,
    //     speed: null,
    //     distance: null,
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const responses = await Promise.all([
    //                 fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/temperature'),
    //                 fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/humidity'),
    //                 fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/speed'),
    //                 fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/distance'),
    //             ]);

    //             const data = await Promise.all(responses.map(response => response.json()));

    //             setDadosIoT({
    //                 temperature: data[0].value,
    //                 humidity: data[1].value,
    //                 speed: data[2].value,
    //                 distance: data[3].value,
    //             });
    //         } catch (error) {
    //             console.error("Erro ao buscar dados do ESP32:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

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
                            {/* <p>{dadosIoT.temperature !== null ? `${dadosIoT.temperature}ºC` : 'Carregando...'}</p> */}

                            <p>{Math.round(Math.random() * 32)} ºC</p>
                        </div>
                        <div className="umidade telemetria-info">
                            <Icone src={iconUmidade} alt="umidade" />
                            {/* <p>{dadosIoT.humidity !== null ? `${dadosIoT.humidity}%` : 'Carregando...'}</p> */}

                            <p>{Math.round(Math.random() * 100)} %</p>
                        </div>
                    </div>
                </DivTelemetria>
            </section>
            <h1 className="titulo-telemetria">TELEMETRIA DOS VEÍCULOS</h1>
            <Runners>
                {pilotosData.pilotos.map((piloto, index) => (
                    <DivInfo key={index}>
                        <div className="card-piloto">
                            <img className="img-piloto" src={piloto.foto} alt={`piloto ${piloto.nome} ${piloto.sobrenome}`} />
                            <div className="conteudo-card-piloto">
                                <div className="nome-piloto">
                                    <h2>{piloto.nome}</h2>
                                    <p>{piloto.sobrenome}</p>
                                </div>
                                <div className="velocidade">
                                    <Icone src={iconVelocidade} alt="velocidade" />
                                    {/* <p>{dadosIoT.speed !== null ? `${dadosIoT.speed} km/h` : 'Carregando...'}</p> */}
                                    <p>{Math.round(Math.random() * 376)} km/h</p>
                                </div>
                                <div className="distancia">
                                    <Icone src={iconDistancia} alt="distância" />
                                    {/* <p>{dadosIoT.distance !== null ? `${dadosIoT.distance} m` : 'Carregando...'}</p> */}

                                    <p>{Math.round(Math.random() * 6)} m</p>
                                </div>
                                <img className="img-carro" src={piloto.fotoCarro} alt={`carro de ${piloto.nome}`} />
                            </div>
                        </div>
                    </DivInfo>
                ))}
            </Runners>
        </main>
    );
};

export default BoxMaisInfo;
