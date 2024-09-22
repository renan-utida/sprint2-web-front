import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import { DivOption } from "./quiz-styled"

const Option=({option, selectOption, answer}) =>{
    const [quizState, dispatch] = useContext(QuizContext);

    return(
        <DivOption 
            className={`option ${
                quizState.answerSelected && option === answer ? "correct" : ""
            } ${quizState.answerSelected && option !== answer ? "wrong" : ""}`} 
            onClick={() => selectOption()}
        >
            <p>{option}</p>
        </DivOption>
    )
}

export default Option