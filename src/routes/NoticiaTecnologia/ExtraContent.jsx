import { Link } from "react-router-dom"
import { ExtraInfo } from "./noticiatecnologia-styled"

const ExtraContent=({ image, category, link, title, date, description})=>{

    return(
        <ExtraInfo>
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
        </ExtraInfo>
    )  
}

export default ExtraContent