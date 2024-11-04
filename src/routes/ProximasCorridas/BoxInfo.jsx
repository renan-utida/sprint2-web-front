import { DivLugar, SectionInfo } from "./corridas-styled";
import { Link } from "react-router-dom";
// import { useEffect, useState } from 'react';

import corridasData from './corridasData';

import TemperaturaCorridas from '../../assets/images/temperatura-corridas.png';
import UmidadeCorridas from '../../assets/images/umidade-corridas.png';


const BoxInfo = () => {

	// // Estado para armazenar os dados de temperatura e umidade
	// const [dadosClima, setDadosClima] = useState({
	// 	temperature: null,
	// 	humidity: null,
	// });

	// // useEffect para buscar os dados do ESP32
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const [tempResponse, humResponse] = await Promise.all([
	// 				fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/temperature'),
	// 				fetch('http://172.201.112.163:1026/v2/entities/urn:ngsi-ld:Iot:003/attrs/humidity'),
	// 			]);

	// 			const tempData = await tempResponse.json();
	// 			const humData = await humResponse.json();

	// 			setDadosClima({
	// 				temperature: tempData.value,
	// 				humidity: humData.value,
	// 			});
	// 		} catch (error) {
	// 			console.error("Erro ao buscar dados do ESP32:", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);


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
								{/* <p>{dadosClima.temperature !== null ? `${dadosClima.temperature}ºC` : '...'}</p> */}
								<p>{Math.round(Math.floor(Math.random() * 32) + 28)} ºC</p>
							</div>
							<div className="umidade-info">
								<img src={UmidadeCorridas} alt="Icone Umidade" />
								{/* <p className="style-umidade">{dadosClima.humidity !== null ? `${dadosClima.humidity}%` : '...'}</p> */}
								<p>{Math.round(Math.random() * 100)} %</p>
							</div>
						</div>
					</div>
				</DivLugar>
			))}
		</SectionInfo>
	)
}

export default BoxInfo;