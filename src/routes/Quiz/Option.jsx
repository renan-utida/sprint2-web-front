import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import { DivOption } from "./quiz-styled"

const Option=({option, selectOption, answer}) =>{
    const [quizState, dispatch] = useContext(QuizContext);

    // Verifica se a opção foi selecionada e se ela está incorreta
    const isSelected = quizState.answerSelected === option;
    const isCorrect = isSelected && option === answer;
    const isWrong = isSelected && option !== answer;

    return(
        <DivOption 
            className={`option ${ isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}`}
            onClick={() => !quizState.answerSelected && selectOption()}
        >
            <p>{option}</p>
        </DivOption>
    )
}

export default Option