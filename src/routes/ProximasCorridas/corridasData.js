import SaoPauloImage from '../../assets/images/sambodromo.png'; 
import MexicoImage from '../../assets/images/mexico-city.png'; 
import JeddahImage from '../../assets/images/jeddah.png';
import MiamiImage from '../../assets/images/miami.png';
import MonacoImage from '../../assets/images/monaco.png';
import TokyoImage from '../../assets/images/tokyo.png';
import ShanghaiImage from '../../assets/images/shanghai.png';
import JakartaImage from '../../assets/images/jakarta.png';
import BerlimImage from '../../assets/images/berlim.png';
import LondresImage from '../../assets/images/londres.png';

import BandeiraBrasil from '../../assets/images/bandeira-brasil.png';
import BandeiraMexico from '../../assets/images/bandeira-mexico.png';
import BandeiraArabia from '../../assets/images/bandeira-arabia-saudita.png';
import BandeiraEstadosUnidos from '../../assets/images/bandeira-estados-unidos.png';
import BandeiraMonaco from '../../assets/images/bandeira-monaco.png';
import BandeiraJapao from '../../assets/images/bandeira-japao.png';
import BandeiraChina from '../../assets/images/bandeira-china.png';
import BandeiraIndonesia from '../../assets/images/bandeira-indonesia.png';
import BandeiraAlemanha from '../../assets/images/bandeira-alemanha.png';
import BandeiraReinoUnido from '../../assets/images/bandeira-reino-unido.png';

const corridasData = [
  {
    round: "ROUND 1",
    date: "07 DEZ",
    location: "SÃO PAULO",
    country: "BRASIL",
    raceName: "SÃO PAULO E-PRIX",
    // temperature: "32°C",
    // humidity: "60%",
    countryFlag: BandeiraBrasil,
    trackImage: SaoPauloImage
  },
  {
    round: "ROUND 2",
    date: "11 JAN",
    location: "MÉXICO CITY",
    country: "MÉXICO",
    raceName: "HANKOOK MEXICO CITY E-PRIX",
    // temperature: "14°C",
    // humidity: "52%",
    countryFlag: BandeiraMexico,
    trackImage: MexicoImage
  },
  {
    round: "ROUND 3",
    date: "14 FEV",
    location: "JEDDAH",
    country: "ARÁBIA SAUDITA",
    raceName: "JEDDAH E-PRIX",
    // temperature: "28°C",
    // humidity: "40%",
    countryFlag: BandeiraArabia,
    trackImage: JeddahImage
  },
  {
    round: "ROUND 4",
    date: "15 FEV",
    location: "JEDDAH",
    country: "ARÁBIA SAUDITA",
    raceName: "JEDDAH E-PRIX",
    // temperature: "28°C",
    // humidity: "40%",
    countryFlag: BandeiraArabia,
    trackImage: JeddahImage
  },
  {
    round: "ROUND 5",
    date: "12 ABR",
    location: "MIAMI",
    country: "ESTADOS UNIDOS",
    raceName: "MIAMI E-PRIX",
    // temperature: "23°C",
    // humidity: "70%",
    countryFlag: BandeiraEstadosUnidos,
    trackImage: MiamiImage
  },
  {
    round: "ROUND 6",
    date: "03 MAI",
    location: "MONACO",
    country: "MONACO",
    raceName: "MONACO E-PRIX",
    // temperature: "20°C",
    // humidity: "56%",
    countryFlag: BandeiraMonaco,
    trackImage: MonacoImage
  },
  {
    round: "ROUND 7",
    date: "04 MAI",
    location: "MONACO",
    country: "MONACO",
    raceName: "MONACO E-PRIX",
    // temperature: "20°C",
    // humidity: "56%",
    countryFlag: BandeiraMonaco,
    trackImage: MonacoImage
  },
  {
    round: "ROUND 8",
    date: "17 MAI",
    location: "TOKYO",
    country: "JAPÃO",
    raceName: "TOKYO E-PRIX",
    // temperature: "10°C",
    // humidity: "78%",
    countryFlag: BandeiraJapao,
    trackImage: TokyoImage
  },
  {
    round: "ROUND 9",
    date: "18 MAI",
    location: "TOKYO",
    country: "JAPÃO",
    raceName: "TOKYO E-PRIX",
    // temperature: "10°C",
    // humidity: "78%",
    countryFlag: BandeiraJapao,
    trackImage: TokyoImage
  },
  {
    round: "ROUND 10",
    date: "31 MAI",
    location: "SHANGHAI",
    country: "CHINA",
    raceName: "HANKOOK SHANGHAI E-PRIX",
    // temperature: "14°C",
    // humidity: "36%",
    countryFlag: BandeiraChina,
    trackImage: ShanghaiImage
  },
  {
    round: "ROUND 11",
    date: "01 JUN",
    location: "SHANGHAI",
    country: "CHINA",
    raceName: "HANKOOK SHANGHAI E-PRIX",
    // temperature: "14°C",
    // humidity: "36%",
    countryFlag: BandeiraChina,
    trackImage: ShanghaiImage
  },
  {
    round: "ROUND 12",
    date: "21 JUN",
    location: "JAKARTA",
    country: "INDONESIA",
    raceName: "JAKARTA E-PRIX",
    // temperature: "18°C",
    // humidity: "75%",
    countryFlag: BandeiraIndonesia,
    trackImage: JakartaImage
  },
  {
    round: "ROUND 13",
    date: "12 JUL",
    location: "BERLIM",
    country: "ALEMANHA",
    raceName: "HANKOOK BERLIM E-PRIX",
    // temperature: "8°C",
    // humidity: "47%",
    countryFlag: BandeiraAlemanha,
    trackImage: BerlimImage
  },
  {
    round: "ROUND 14",
    date: "13 JUL",
    location: "BERLIM",
    country: "ALEMANHA",
    raceName: "HANKOOK BERLIM E-PRIX",
    // temperature: "8°C",
    // humidity: "47%",
    countryFlag: BandeiraAlemanha,
    trackImage: BerlimImage
  },
  {
    round: "ROUND 15",
    date: "26 JUL",
    location: "LONDRES",
    country: "INGLATERRA",
    raceName: "LONDRES E-PRIX",
    // temperature: "13°C",
    // humidity: "48%",
    countryFlag: BandeiraReinoUnido,
    trackImage: LondresImage
  },
  {
    round: "ROUND 16",
    date: "27 JUL",
    location: "LONDRES",
    country: "INGLATERRA",
    raceName: "LONDRES E-PRIX",
    // temperature: "13°C",
    // humidity: "48%",
    countryFlag: BandeiraReinoUnido,
    trackImage: LondresImage
  },
];

export default corridasData;