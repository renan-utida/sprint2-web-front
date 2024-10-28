import { DivLugar, SectionInfo } from "./corridas-styled"

import SaoPauloImage from '../../assets/images/sambodromo.png'; 
import MexicoImage from '../../assets/images/mexico-city.png'; 
import JeddahImage from '../../assets/images/jeddah.png'; 

const BoxInfo = () => {

    return(
        <SectionInfo>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 1</h3>
                    <h3>07 DEZ</h3>
                </div>
                <img src={SaoPauloImage} alt="Pista Formula E - Anhembi - São Paulo" />
                <h2>SÃO PAULO</h2>
                <div>
                    <img src="#" alt="Bandeira do Brasil" />
                    <h3>BRASIL</h3>
                </div>
                <h4>SÃO PAULO E-PRIX</h4>
                <div>
                    <button>Mais Informações</button>
                    <div>
                        <img src="#" alt="Icone Temperatura" />
                        <p>32°C</p>
                    </div>
                    <div>
                        <img src="#" alt="Icone Umidade" />
                        <p>60%</p>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 2</h3>
                    <h3>11 JAN</h3>
                </div>
                <img src={MexicoImage} alt="Pista Formula E - Cidade do Mexico" />
                <h2>MÉXICO CITY</h2>
                <div>
                    <img src="#" alt="Bandeira do Mexico" />
                    <h3>MÉXICO</h3>
                </div>
                <h4>HANKOOK MEXICO CITY E-PRIX</h4>
                <div>
                    <button>Mais Informações</button>
                    <div>
                        <img src="#" alt="Icone Temperatura" />
                        <p>14°C</p>
                    </div>
                    <div>
                        <img src="#" alt="Icone Umidade" />
                        <p>52%</p>
                    </div>
                </div>
            </DivLugar>
            <DivLugar>
                <div className="data-info">
                    <h3>ROUND 3</h3>
                    <h3>14 FEV</h3>
                </div>
                <img src={JeddahImage} alt="Pista Formula E - Jeddah" />
                <h2>JEDDAH</h2>
                <div>
                    <img src="#" alt="Bandeira da Arabia Saudita" />
                    <h3>ARÁBIA SAUDITA</h3>
                </div>
                <h4>JEDDAH E-PRIX</h4>
                <div>
                    <button>Mais Informações</button>
                    <div>
                        <img src="#" alt="Icone Temperatura" />
                        <p>28°C</p>
                    </div>
                    <div>
                        <img src="#" alt="Icone Umidade" />
                        <p>40%</p>
                    </div>
                </div>
            </DivLugar>
        </SectionInfo>
    )
}

export default BoxInfo