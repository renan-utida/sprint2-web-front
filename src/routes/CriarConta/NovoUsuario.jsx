import { EmailIcon, SectionNovoUsuario } from "./cadastro-conta-styled"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import IconUsuario from "../../assets/images/icons8-usuario.png";
import IconSenha from "../../assets/images/icons8-trancar.png";

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

    const [confirmarSenha, setConfirmarSenha] = useState(''); // Estado para confirmação da senha

    //Hook- useNavigate- Redireciona para outro componente
    const navigate = useNavigate();

    //criando a função handleChange
    // spred(...) -pega o valor novo e junta com os valores ja cadastrados dentro de um array ou objeto
    //evento target - captura o que foi digitado em um campo input
    const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
    };

    //criando a função handleConfirmarSenhaChange
    const handleConfirmarSenhaChange = (e) => {
        setConfirmarSenha(e.target.value);
    };

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
            // Salva os dados do usuário no localStorage para manter o estado de autenticação
            sessionStorage.setItem('usuario', JSON.stringify(data));
            
            // Redireciona para a página de cadastrar produto
            navigate("/quiz");
          })
          .catch((error) => {
            console.error(error);
            alert('Erro ao criar a conta. Tente novamente.');
          });
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
                        placeholder="Nome"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <input 
                        type="text" 
                        name="sobrenome"
                        value={usuarios.sobrenome}
                        placeholder="Sobrenome"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleChange}
                    />
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
                    <img src={IconUsuario} alt="Icone Usuario" />
                </div>
                <div className="input-field">
                    <input 
                        type="email" 
                        name="email"
                        value={usuarios.email}
                        placeholder="Email"
                        required 
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleChange}
                    />
                    <EmailIcon />
                </div>
                <div className="input-field">
                    <input 
                        type="password" 
                        name="senha"
                        value={usuarios.senha}
                        placeholder="Senha"
                        required
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleChange}
                    />
                    <img src={IconSenha} alt="Icone Senha" />
                </div>
                <div className="input-field">
                    <input 
                        type="password"
                        name="confirmarSenha"
                        value={confirmarSenha}
                        placeholder="Confirme sua Senha"
                        required
                        /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                        onChange={handleConfirmarSenhaChange}
                    />
                    <img src={IconSenha} alt="Icone Senha" />
                </div>
                <button type="submit">Criar</button>
            </form>
        </SectionNovoUsuario>
    )
}

export default NovoUsuario