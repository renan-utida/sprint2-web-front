import { DivLugar, SectionInfo } from "./corridas-styled"
import { Link } from "react-router-dom";

import SaoPauloImage from '../../assets/images/sambodromo.png'; 
import MexicoImage from '../../assets/images/mexico-city.png'; 
import JeddahImage from '../../assets/images/jeddah.png'; 

import BandeiraBrasil from '../../assets/images/bandeira-brasil.png';
import BandeiraMexico from '../../assets/images/bandeira-mexico.png';
import BandeiraArabia from '../../assets/images/bandeira-arabia-saudita.png';

import TemperaturaCorridas from '../../assets/images/temperatura-corridas.png';
import UmidadeCorridas from '../../assets/images/umidade-corridas.png';


  


const BoxInfo = () => {

    return(
        <SectionInfo>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 1</h3>
                    <h3>07 DEZ</h3>
                </div>
                <img className="img-lugar" src={SaoPauloImage} alt="Pista Formula E - Anhembi - São Paulo" />
                <h2>SÃO PAULO</h2>
                <div className="info-pais">
                    <img src={BandeiraBrasil} alt="Bandeira do Brasil" />
                    <h3>BRASIL</h3>
                </div>
                <h4>SÃO PAULO E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>32°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">60%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 2</h3>
                    <h3>11 JAN</h3>
                </div>
                <img className="img-lugar" src={MexicoImage} alt="Pista Formula E - Cidade do Mexico" />
                <h2>MÉXICO CITY</h2>
                <div className="info-pais">
                    <img src={BandeiraMexico} alt="Bandeira do Mexico" />
                    <h3>MÉXICO</h3>
                </div>
                <h4>HANKOOK MEXICO CITY E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>14°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">52%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 3</h3>
                    <h3>14 FEV</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Jeddah" />
                <h2>JEDDAH</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Arabia Saudita" />
                    <h3>ARÁBIA SAUDITA</h3>
                </div>
                <h4>JEDDAH E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>28°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">40%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 4</h3>
                    <h3>15 FEV</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Jeddah" />
                <h2>JEDDAH</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Arabia Saudita" />
                    <h3>ARÁBIA SAUDITA</h3>
                </div>
                <h4>JEDDAH E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>28°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">40%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 5</h3>
                    <h3>12 ABR</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - MIAMI" />
                <h2>MIAMI</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira dos Estados Unidos" />
                    <h3>ESTADOS UNIDOS</h3>
                </div>
                <h4>MIAMI E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>23°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">70%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 6</h3>
                    <h3>03 MAI</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - MONACO" />
                <h2>MONACO</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Monaco" />
                    <h3>MONACO</h3>
                </div>
                <h4>MONACO E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>20°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">56%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 7</h3>
                    <h3>04 MAI</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Monaco" />
                <h2>MONACO</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira de Monaco" />
                    <h3>MONACO</h3>
                </div>
                <h4>MONACO E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>20°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">56%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 8</h3>
                    <h3>17 MAI</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Tokyo" />
                <h2>TOKYO</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Japão" />
                    <h3>JAPÃO</h3>
                </div>
                <h4>TOKYO E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>10°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">78%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 9</h3>
                    <h3>18 MAI</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Tokyo" />
                <h2>TOKYO</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira do Japão" />
                    <h3>JAPÃO</h3>
                </div>
                <h4>TOKYO E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>10°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">78%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 10</h3>
                    <h3>31 MAI</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Shanghai" />
                <h2>SHANGHAI</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da China" />
                    <h3>CHINA</h3>
                </div>
                <h4>HANKOOK SHANGHAI E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>14°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">36%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 11</h3>
                    <h3>01 JUN</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Shanghai" />
                <h2>SHANGHAI</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da China" />
                    <h3>CHINA</h3>
                </div>
                <h4>HANKOOK SHANGHAI E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>28°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">40%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 12</h3>
                    <h3>21 JUN</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Jakarta" />
                <h2>JAKARTA</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Indonesia" />
                    <h3>INDONESIA</h3>
                </div>
                <h4>JAKARTA E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>18°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">75%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 13</h3>
                    <h3>12 JUL</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Berlim" />
                <h2>BERLIM</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Alemanha" />
                    <h3>ALEMANHA</h3>
                </div>
                <h4>HANKOOK BERLIM E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>8°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">47%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 14</h3>
                    <h3>13 JUL</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Berlim" />
                <h2>BERLIM</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira da Alemanha" />
                    <h3>ALEMANHA</h3>
                </div>
                <h4>HANKOOK BERLIM E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>8°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">47%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 15</h3>
                    <h3>26 JUL</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Londres" />
                <h2>LONDRES</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira do Reino Unido" />
                    <h3>INGLATERRA</h3>
                </div>
                <h4>LONDRES E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>13°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">48%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 16</h3>
                    <h3>27 JUL</h3>
                </div>
                <img className="img-lugar" src={JeddahImage} alt="Pista Formula E - Londres" />
                <h2>LONDRES</h2>
                <div className="info-pais">
                    <img src={BandeiraArabia} alt="Bandeira do Reino Unido" />
                    <h3>INGLATERRA</h3>
                </div>
                <h4>LONDRES E-PRIX</h4>
                <div className="informacao-lugar">
                    <Link to='/mais-informacoes'>Mais Informações</Link>
                    <div className="weather-info">
                        <div className="temperatura-info">
                            <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                            <p>13°C</p>
                        </div>
                        <div className="umidade-info">
                            <img src={UmidadeCorridas} alt="Icone Umidade" />
                            <p className="style-umidade">48%</p>
                        </div>
                    </div>
                </div>
            </DivLugar>
        </SectionInfo>
    )
}

export default BoxInfo