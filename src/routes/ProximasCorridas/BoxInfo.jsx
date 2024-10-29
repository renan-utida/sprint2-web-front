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
        </SectionInfo>
    )
}

export default BoxInfo