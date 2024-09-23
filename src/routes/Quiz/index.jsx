import { useContext, useEffect } from "react";
import { QuizContext } from "../../context/quiz";

import Welcome from "./Welcome";
import Question from "./Question";
import GameOver from "./GameOver";

import { MainQuiz } from "./quiz-styled";

const Quiz=()=>{
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
    }, [quizState.gameStage]); // Agora observa o estágio do jogo

    return (
        <MainQuiz className="quiz">
            <h1>Formula E Quiz</h1>
            {quizState.gameStage === "Start" && <Welcome/>}    {/*Acessando o Welcome*/}
            {quizState.gameStage === "Playing" && <Question/>}    {/*Acessando o Question*/}
            {quizState.gameStage === "End" && <GameOver/>}  {/*Acessando o Fim do Jogo*/}
        </MainQuiz>
    )

}

export default Quiz;




