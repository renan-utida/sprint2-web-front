import { useContext, useEffect, useRef } from 'react';
import { QuizContext } from '../../context/quiz';

import Quiz from '../../assets/quiz.png';
import raceAudio from '../../audio/corrida.mp3';

import { WelcomeSection } from "./quiz-styled";

const Welcome=()=> {
    const [quizState, dispatch] = useContext(QuizContext);
    const audioRef = useRef(null); // Referência para o áudio

    useEffect(() => {
        if (quizState.gameStage === "Start") {
            audioRef.current.volume = 0.2; // Define o volume para 20%
            audioRef.current.play(); // Reproduz o áudio quando a página é acessada
        }
    }, [quizState.gameStage]);

    const handleImageClick = () => {
        audioRef.current.volume = 0.4; // Define o volume para 40% ao clicar na imagem
        audioRef.current.play(); // Reproduz o áudio quando a imagem é clicada
    };

    return(
        <WelcomeSection id="welcome">
            <h2>Seja Bem-Vindo ao nosso Quiz!</h2>
            <h3>Estamos muito felizes em ter você aqui!</h3>
            <p>Gostaríamos de testar seus conhecimentos sobre a Fórmula E! Boa Sorte!</p>
            <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>
            <img src={Quiz} alt="Inicio do Quiz" onClick={handleImageClick} />
            <audio ref={audioRef} src={raceAudio} />
        </WelcomeSection>
    )
}

export default Welcome