import { EmailIcon, OcultoIcon, PasswordIcon, SectionNovoUsuario, UserIcon, VisivelIcon } from "./cadastro-conta-styled"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const NovoUsuario =()=>{

    //Hook- useParams- serve para receber da rota ou gerar o codigo
    let {id} = useParams();

    //Hook - useState - Manipula o estado da variavel
    const [usuarios,setUsuarios]= useState({
        id,
        usuario: '',
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    });

    // Estados para confirmação de senha
    const [confirmarSenha, setConfirmarSenha] = useState("");  // Estado para confirmação da senha

    // Estados de validação
    const [nomeValido, setNomeValido] = useState(true);
    const [sobrenomeValido, setSobrenomeValido] = useState(true);
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(false);
    const [senhaConfirmada, setSenhaConfirmada] = useState(true);

    // Controle da visibilidade da senha
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);


    // Função para atualizar os campos do usuário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarios((prevUsuarios) => ({ ...prevUsuarios, [name]: value }));
    };

    // Função para validar o nome
    const handleNomeChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setNomeValido(/^[A-Za-zÀ-ÿ\s]+$/.test(value)); // Apenas letras e espaços
    };

    // Função para validar o sobrenome
    const handleSobrenomeChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setSobrenomeValido(/^[A-Za-zÀ-ÿ\s]+$/.test(value)); // Apenas letras e espaços
    };

    // Função para validar o email
    const handleEmailChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        setEmailValido(value.includes("@")); // Verifica se contém "@"
    };

    // Função para validar a senha
    const handleSenhaChange = (e) => {
        const value = e.target.value;
        handleChange(e);
        // Exibir erro apenas se o usuário começou a digitar algo
        if (value.length > 0) {
            setSenhaValida(value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value));
        } else {
            setSenhaValida(true); // Para que a mensagem de erro não apareça com o campo vazio
        }
    };

    // Função para validar a confirmação da senha
    const handleConfirmarSenhaChange = (e) => {
        const value = e.target.value;
        setConfirmarSenha(value);
        if (value.length > 0) {
            setSenhaConfirmada(value === usuarios.senha);
        }
    };

    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();

    //criando a variavel metodo para criar e alterar
    let metodo = "post";
    if(id){
        metodo = 'put';
    }

    //criando a função handleSubmit
    const handleSubmit=(e)=>{
        //previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();

        // Verificação de senha
        if (usuarios.senha !== confirmarSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

        // Verifica se todos os campos estão preenchidos corretamente
        if (nomeValido && sobrenomeValido && emailValido && senhaValida && senhaConfirmada) {

            // Envia os dados ao backend
            fetch(`http://localhost:5003/usuarios/${id ? id :''}`,{
                method:metodo,
                headers: {
                    'Content-type':'application/json',
                },
                //prepara para receber os dados em json
                body:JSON.stringify(usuarios),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro ao criar a conta.');
                }
                return response.json();
            })
            .then((data) => {
                // Salva apenas o nome do usuário no sessionStorage e navega para a página desejada
                sessionStorage.setItem("usuario", usuarios.usuario);
                
                alert("Conta criada com sucesso!");

                // Redireciona para a página de cadastrar produto
                navigate("/quiz");
            })
            .catch((error) => {
                console.error(error);
                alert('Erro ao criar a conta. Tente novamente.');
            });
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    };
    
    //Hook- useEffect - realiza o efeito colateral ele carrega os usuarios cadastrados
    useEffect(()=>{
        if(id){
            fetch(`http://localhost:5003/usuarios/${id}`)
                .then((resp)=>{
                    return resp.json();
                })
                .then((data)=>{
                    setUsuarios(data);
                });
        }
    },[id]);  

    return(
        <SectionNovoUsuario>
            <form onSubmit={handleSubmit}>
                <h1>Criar uma Conta</h1>
                <div className="input-field">
                    <input 
                        type="text" 
                        name="nome"
                        value={usuarios.nome}
                        onChange={handleNomeChange}
                        placeholder="Nome"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                    />
                    {/* Regras*/}
                    {!nomeValido && (
                        <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                            O nome deve conter apenas letras.
                        </span>
                    )}
                </div>
                <div className="input-field">
                    <input 
                        type="text" 
                        name="sobrenome"
                        value={usuarios.sobrenome}
                        placeholder="Sobrenome"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleSobrenomeChange}
                    />
                    {!sobrenomeValido && (
                        <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                            O sobrenome deve conter apenas letras.
                        </span>
                    )}
                </div>
                <div className="input-field">
                    <input 
                        type="text" 
                        name="usuario"
                        value={usuarios.usuario}
                        placeholder="Usuário"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleChange}
                    />
                    <UserIcon/>
                </div>
                <div className="input-field">
                    <input 
                        type="email" 
                        name="email"
                        value={usuarios.email}
                        placeholder="Email"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleEmailChange}
                    />
                    <EmailIcon />
                    {!emailValido && (
                        <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                            O email deve conter "@"
                        </span>
                    )}
                </div>
                <div className="input-field">
                    <input 
                        type={mostrarSenha ? "text" : "password"}
                        name="senha"
                        value={usuarios.senha}
                        placeholder="Senha"
                        required
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleSenhaChange}
                    />
                    <span onClick={() => setMostrarSenha(!mostrarSenha)} >
                        {mostrarSenha ? <VisivelIcon /> : <OcultoIcon />} {/* Ícone para mostrar/ocultar senha */}
                    </span>
                    <PasswordIcon/>
                    {senhaValida === false && (
                        <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                            Mínimo 8 caracteres, 1 letra maiúscula e 1 número.
                        </span>
                    )}
                </div>
                <div className="input-field">
                    <input 
                        type={mostrarConfirmarSenha ? "text" : "password"}
                        name="confirmarSenha"
                        value={confirmarSenha}
                        placeholder="Confirme sua Senha"
                        required
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleConfirmarSenhaChange}
                    />
                    <span onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                        {mostrarConfirmarSenha ? <VisivelIcon /> : <OcultoIcon />} {/* Ícone para mostrar/ocultar confirmação da senha */}
                    </span>
                    <PasswordIcon/>
                    {senhaConfirmada === false && (
                        <span style={{ color: "red", fontSize: "0.9rem", marginTop: "1px", display: "block" }}>
                            As senhas não coincidem.
                        </span>
                    )}
                </div>
                <button type="submit">Criar</button>
            </form>
        </SectionNovoUsuario>
    )
}

export default NovoUsuario