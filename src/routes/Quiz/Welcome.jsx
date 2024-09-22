import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'

import Quiz from '../../assets/quiz.png'

import { WelcomeSection } from "./quiz-styled"

const Welcome=()=> {
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <WelcomeSection id="welcome">
            <h2>Seja Bem-Vindo ao nosso Quiz!</h2>
            <h3>Estamos muito felizes em ter você aqui!</h3>
            <p>Gostaríamos de testar seus conhecimentos sobre a Fórmula E! Boa Sorte!</p>
            <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>
                Iniciar
            </button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </WelcomeSection>
    )
}

export default Welcome