import { useState } from "react";

import IconUsuario from "../../assets/icons8-usuario.png";
import IconSenha from "../../assets/icons8-trancar.png";

import { SectionLogin } from "./login-styled";

const BoxLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();  // Evita comportamentos indesejados ao clicar no botão
        
        alert("Enviando os dados:" + username + " - " + password)
    }

    return(
        <SectionLogin className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        required 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <img src={IconUsuario} alt="Icone Usuario" />
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                    <img src={IconSenha} alt="Icone Senha" />
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não possui uma conta?</p>
                    <a href="#">Registrar</a>
                    
                </div>
            </form>

        </SectionLogin>
    )
}

export default BoxLogin