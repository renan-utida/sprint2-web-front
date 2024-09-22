import { MainError } from "./error-styled"
import { Link } from "react-router-dom"

const Error=()=>{

    return(
        <MainError>
            <Link to="/">Logo</Link>
            <h1>404! Página não foi encontrada!</h1>
        </MainError>
    )
}

export default Error