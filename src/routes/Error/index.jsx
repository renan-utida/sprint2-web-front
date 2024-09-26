import { MainError } from "./error-styled"
import { Link } from "react-router-dom"

import LogoError from "../../assets/logo-abb-semfundo.png"

const Error=()=>{

    return(
        <MainError>
            <div>
                <Link to="/">
                    <img src={LogoError} alt="" />
                </Link>
                <h1>404! Página não foi encontrada!</h1>
            </div>
        </MainError>
    )
}

export default Error