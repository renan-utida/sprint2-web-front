import { DivLugar, SectionInfo } from "./corridas-styled";
import { Link } from "react-router-dom";

import corridasData from './corridasData';

import TemperaturaCorridas from '../../assets/images/temperatura-corridas.png';
import UmidadeCorridas from '../../assets/images/umidade-corridas.png';


const BoxInfo = () => {
  return (
    <SectionInfo>
      {corridasData.map((corrida, index) => (
        <DivLugar key={index}>
          <div className="data-info">
            <h3>{corrida.round}</h3>
            <h3>{corrida.date}</h3>
          </div>
          <img className="img-lugar" src={corrida.trackImage} alt={`Pista Formula E - ${corrida.location}`} />
          <h2>{corrida.location}</h2>
          <div className="info-pais">
            <img src={corrida.countryFlag} alt={`Bandeira de ${corrida.country}`} />
            <h3>{corrida.country}</h3>
          </div>
          <h4>{corrida.raceName}</h4>
          <div className="informacao-lugar">
            <Link to='/mais-informacoes'>Mais Informações</Link>
            <div className="weather-info">
              <div className="temperatura-info">
                <img src={TemperaturaCorridas} alt="Icone Temperatura" />
                <p>{corrida.temperature}</p>
              </div>
              <div className="umidade-info">
                <img src={UmidadeCorridas} alt="Icone Umidade" />
                <p className="style-umidade">{corrida.humidity}</p>
              </div>
            </div>
          </div>
        </DivLugar>
      ))}
    </SectionInfo>
  );
};

export default BoxInfo;