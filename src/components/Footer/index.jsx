import { FooterRodape } from "./footer-styled";

import ABBFormulaE from "../../assets/images/logo-abb-semfundo.png"

import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer=()=>{

    return(
        <FooterRodape>
            <nav>
                <div className="footer-logo">
                    <Link to='/'>
                        <img src={ABBFormulaE} alt="Logo Abb Formula E sem fundo" />
                    </Link>
                    <div className="footer-followus">
                        <h2>Follow us</h2>
                        <ul>
                            <li><FaWhatsapp className="icon-media"/></li>
                            <li><FaFacebook className="icon-media"/></li>
                            <li><FaInstagram className="icon-media"/></li>
                            <li><FaYoutube className="icon-media"/></li>
                            <li><FaTiktok className="icon-media"/></li>
                        </ul>
                    </div>
                </div>
                <div className='links-rapidos'>
                    <h2>Links Rápidos</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/formulae">Formula E</Link></li>
                        <li><Link to="/proximas-corridas">Próximas Corridas</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </div>
                <div className="footer-contactus">
                    <h2>Contact us</h2>
                    <ul>
                        <li>
                            <FaPhoneAlt className="icon-contact"/>
                            <p>(11) 91234-5678</p>
                        </li>
                        <li>
                            <MdEmail className="icon-contact" />
                            <p>service@formulae.com</p>
                        </li>
                        <li>
                            <FaLocationDot className="icon-map" />
                            <p className="local">Av. Paulista, 1234 - 3º andar - Bela Vista, São Paulo - SP, 00000-000</p>
                        </li>
                        <li></li>
                    </ul>
                </div>
                <div className="footer-termos">
                    <h2>Termos</h2>
                    <ul>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Acessibilidade</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Suporte</a></li>
                    </ul>
                </div>
            </nav>
            <div className="footer-direitos">
                <p>@2024-Todos os direitos reservados</p>
            </div>
        </FooterRodape>
    )
}

export default Footer