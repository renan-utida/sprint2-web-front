import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import IconUsuario from "../../assets/images/icons8-usuario.png";
import IconSenha from "../../assets/images/icons8-trancar.png";

import { OcultoIcon, PasswordIcon, SectionLogin, UserIcon, VisivelIcon } from "./login-styled";

const BoxLogin = () => {

    // Controle da visibilidade da senha
    const [mostrarSenha, setMostrarSenha] = useState(false);

    // Hook - useRef - Pega a referência de um elemento ou componente e guarda
    const usuario = useRef();
    const senha = useRef();

    // Hook - useState - Manipila o estado da variavel
    const [usuarios, setUsuarios] = useState([]);

    // Hook - useNavigate - Ele redireciona para outro componente
    const navigate = useNavigate();

    // Criando a função de validação
    function validate() {
        return usuarios.some(user => 
            (user.usuario === usuario.current.value || user.email === usuario.current.value) &&
            user.senha === senha.current.value
        );
    };

    // Criando a função handleSubmit
    const handleSubmit = (e) => {
        // Previne qualquer alteração no navegador
        e.preventDefault();  
        
        if(validate()){
            // Criando a autenticação
            let token =
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario", usuario.current.value);
                sessionStorage.setItem("senha", token);
                
                navigate("/quiz"); // Redireciona para o quiz
        }else{
            alert("Usuário/Email ou senha inválidos!");
        }
    };

    // Hook - useEffect - Realiza um efeito colateral , no exemplo ele vai
    // até api e tras os dados
    useEffect(() => {
        //Pega a url da api
        fetch("http://localhost:5003/usuarios")

        // Promise
        .then((res) => {
            // Converte os dados em json
            return res.json();
        })

        // Realiza as alterações das variaveis
        .then((res) => {
            setUsuarios(res);
        })
        // Retorna um array vazio
    }, []);

    return(
        <SectionLogin className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="Usuário ou Email"
                        required 
                        id="usuario"
                        ref={usuario}
                    />
                    <UserIcon/>
                </div>
                <div className="input-field">
                    <input 
                        type={mostrarSenha ? "text" : "password"}
                        placeholder="Senha"
                        id="senha"
                        ref={senha}
                    />
                    <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                        {mostrarSenha ? <VisivelIcon /> : <OcultoIcon />} {/* Ícone para mostrar/ocultar senha */}
                    </span>
                    <PasswordIcon/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu sua senha?</a>
                </div>

                <button type="submit">Entrar</button>

                <div className="signup-link">
                    <p>Não possui uma conta?</p>
                    <Link to="/criar-conta">Criar</Link>
                </div>
            </form>
        </SectionLogin>
    )
}

export default BoxLogin