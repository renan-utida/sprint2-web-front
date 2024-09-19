import { InfoWrapper } from './home-styled'; // Renomeei para InfoWrapper para evitar conflitos
import { Link } from 'react-router-dom';

const InfoContent = ({ image, category, link, title, date, description}) => {
    return (
        <InfoWrapper>
            <div className='info-container'>
                <div className='box-img'>
                    <Link to={link}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className='box-info'>
                    <span>{category}</span>
                    <Link to={link}>
                        <h3>{title}</h3>
                    </Link>
                    <p className='data-info'>{date}</p>
                    <p>{description}</p>
                </div>
            </div>
        </InfoWrapper>
    )
}

export default InfoContent