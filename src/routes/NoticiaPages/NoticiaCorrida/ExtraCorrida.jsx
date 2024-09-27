import { Link } from "react-router-dom"
import { ExtraNoticia } from "../noticia-geral-styled"

const ExtraCorrida=({ image, category, link, title, date, description})=>{

    return(
        <ExtraNoticia>
            <div className='info-extra-container'>
                <Link to={link} className="img-link">
                    <img src={image} alt={title} />
                </Link>
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

export default ExtraCorrida