import { MainHome } from './home-styled';
import ImageSlider from './ImageSlider';

const Home=()=>{

    return(
        <MainHome>
            <ImageSlider className='slideshow'/>
            <section className="recente">
                <h2>Últimas Notícias</h2>
            </section>
            <section className="info1"></section>
            <section className="info2"></section>
            <section className="info3"></section>
            <section className="info4"></section>
            <section className="info5"></section>
            <section className="info-extra"></section>
        </MainHome>
    )
}

export default Home