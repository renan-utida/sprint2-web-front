import { Link } from "react-router-dom"
import { ExtraNoticia } from "../noticia-geral-styled"

const ExtraTecnologia=({ image, category, link, title, date, description})=>{

    return(
        <ExtraNoticia>
            <div className='info-extra-container'>
                <div className='box-extra-img'>
                    <Link to={link}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className='box-extra-info'>
                    <span>{category}</span>
                    <Link to={link}>
                        <h3>{title}</h3>
                    </Link>
                    <p className='data-extra-info'>{date}</p>
                    <p>{description}</p>
                </div>
            </div>
        </ExtraNoticia>
    )  
}

export default ExtraTecnologia