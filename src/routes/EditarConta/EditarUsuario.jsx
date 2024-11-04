
import { useEffect, useState } from "react";
import { DivBotoesModal, DivEditarUsuario, DivModal, DivModal1, EditarIcon, FecharIcon, Overlay, SectionEditarUsuario, OcultoIcon, VisivelIcon, DivEditarAvatar, DivBotoesEditModal, SelecionarAvatarNovo, DivEditarImageModal } from "./editar-conta-styled";

import UsuarioImg from "./../../assets/images/usuario-login.png"
import UsuarioImg1 from "./../../assets/images/usuario-login1.png"
import UsuarioImg2 from "./../../assets/images/usuario-login2.png"
import UsuarioImg3 from "./../../assets/images/usuario-login3.png"
import UsuarioImg4 from "./../../assets/images/usuario-login4.png"
import UsuarioImg5 from "./../../assets/images/usuario-login5.png"
import UsuarioImg6 from "./../../assets/images/usuario-login6.png"
import UsuarioImg7 from "./../../assets/images/usuario-login7.png"
import UsuarioImg8 from "./../../assets/images/usuario-login8.png"
import UsuarioImg9 from "./../../assets/images/usuario-login9.png"

const EditarUsuario = () => {
    const [usuarioDados, setUsuarioDados] = useState(null);
    const [modalConfirmacao, setModalConfirmacao] = useState(false);
    const [modalEdicao, setModalEdicao] = useState(false);
    const [campoParaEditar, setCampoParaEditar] = useState("");
    const [dadoAtual, setDadoAtual] = useState(""); // Novo estado para o dado atual
    const [novoDado, setNovoDado] = useState("");
    const [confirmarNovoDado, setConfirmarNovoDado] = useState(""); // Novo estado para confirmação de senha
    const [mostrarSenhaAtual, setMostrarSenhaAtual] = useState(false); // Controle da visibilidade da senha
    const [mostrarNovaSenha, setMostrarNovaSenha] = useState(false);
    const [mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] = useState(false);
    const [emailValido, setEmailValido] = useState(true);
    const [nomeValido, setNomeValido] = useState(true);
    const [sobrenomeValido, setSobrenomeValido] = useState(true);
    const [senhaValida, setSenhaValida] = useState(false);
    const [senhaConfirmada, setSenhaConfirmada] = useState(true);
    const [modalEditAvatar, setModalEditAvatar] = useState(false); // Novo estado para o modal de avatar

    // Desativa o scroll enquanto o modal estiver aberto
    useEffect(() => {
        if (modalConfirmacao || modalEdicao || modalEditAvatar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    
        // Limpeza para restaurar o overflow quando o componente desmonta
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [modalConfirmacao, modalEdicao, modalEditAvatar]);
    
    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem("usuario");
        const usuarioSalvo = JSON.parse(sessionStorage.getItem("usuarioDados"));
        
        // Carrega dados do sessionStorage caso estejam disponíveis
        if (usuarioSalvo) {
            setUsuarioDados(usuarioSalvo);
        } else if (usuarioLogado) {
            const tipo = usuarioLogado.includes("@") ? "email" : "usuario";
            fetch(`http://localhost:5003/usuarios?${tipo}=${usuarioLogado}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setUsuarioDados(data[0]);
                        // Armazena os dados do usuário no sessionStorage
                        sessionStorage.setItem("usuarioDados", JSON.stringify(data[0]));
                    }
                })
                .catch((error) => console.error("Erro ao buscar dados do usuário:", error));
        }
    }, []);

    const abrirModalConfirmacao = (campo) => {
        setCampoParaEditar(campo);
        setModalConfirmacao(true);
    };

    const fecharModal = () => {
        setModalConfirmacao(false);
        setModalEdicao(false);
        setModalEditAvatar(false);
    };

    const abrirModalEditAvatar = () => {
        setModalConfirmacao(false);
        setModalEditAvatar(true);
    };

    const abrirModalEdicao = () => {
        setDadoAtual(""); // Limpa o campo do dado atual
        setNovoDado(""); // Limpa o campo do novo dado
        setConfirmarNovoDado(""); // Limpa o campo de confirmação
        setModalConfirmacao(false);
        setModalEdicao(true);
    };

    const capitalizeWords = (str) => {
        return str.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const handleNovoDadoChange = (e) => {
        const value = e.target.value;
        setNovoDado(value);

        // Validação da senha com os critérios especificados
        const isSenhaValida = value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value);
        setSenhaValida(isSenhaValida);

        if (campoParaEditar === "email") {
            setEmailValido(value.includes("@"));
        } else if (campoParaEditar === "nome") {
            const isValid = /^[A-Za-zÀ-ÿ\s]+$/.test(value); // Verifica se contém apenas letras e espaços
            setNomeValido(isValid);
            if (isValid) {
                setNovoDado(capitalizeWords(value));
            }
        } else if (campoParaEditar === "sobrenome") {
            const isValid = /^[A-Za-zÀ-ÿ\s]+$/.test(value); // Verifica se contém apenas letras e espaços
            setSobrenomeValido(isValid);
            if (isValid) {
                setNovoDado(capitalizeWords(value));
            }
        }
    };

    const handleConfirmarNovoDadoChange = (e) => {
        const value = e.target.value;
        setConfirmarNovoDado(value);

        // Verificação se a confirmação da senha é igual à nova senha
        setSenhaConfirmada(value === novoDado);
    };

    // Estado para armazenar a imagem selecionada
    const [selectedImage, setSelectedImage] = useState(UsuarioImg);

    // Função para atualizar a imagem selecionada ao clicar em uma imagem de sugestão
    const handleImageSelect = (imgSrc) => {
        setSelectedImage(imgSrc);
    };

    // Função para salvar a imagem selecionada como avatar
    const handleSaveAvatar = () => {
        if (!selectedImage) return;

        // Atualizar o avatar no backend
        fetch(`http://localhost:5003/usuarios/${usuarioDados.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ avatar: selectedImage }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao atualizar o avatar");
            }
            return response.json();
        })
        .then(updatedData => {
            // Atualiza o estado local e sessionStorage com o novo avatar
            setUsuarioDados(prev => ({ ...prev, avatar: selectedImage }));
            sessionStorage.setItem("usuarioDados", JSON.stringify(updatedData));
            
            alert("Avatar atualizado com sucesso!");
            fecharModal(); // Fecha o modal após salvar
        })
        .catch(error => console.error("Erro ao salvar o avatar:", error));
    };

    const handleEditar = () => {

        if (campoParaEditar === "email" && !emailValido) {
            alert("O email deve conter o caractere '@'. Tente novamente!");
            return;
        }

        if (campoParaEditar === "nome" && !nomeValido) {
            alert("O nome deve conter apenas letras. Tente novamente!");
            return;
        }

        if (campoParaEditar === "sobrenome" && !sobrenomeValido) {
            alert("O sobrenome deve conter apenas letras. Tente novamente!");
            return;
        }

        if (campoParaEditar === "senha" && (!senhaValida || !senhaConfirmada)) {
            alert("A senha deve atender aos requisitos ou a confirmação da senha não coincide. Tente novamente!");
            return;
        }

        if (dadoAtual === usuarioDados[campoParaEditar]) {
            
            if (campoParaEditar === "senha" && novoDado !== confirmarNovoDado) {
                alert("As senhas não correspondem. Tente novamente.");
                return;
            }
            
            // Se o dado atual estiver correto, continue com a atualização
            fetch(`http://localhost:5003/usuarios/${usuarioDados.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ [campoParaEditar]: novoDado }),
            })
                .then(response => response.json())
                .then(updatedData => {
                    setUsuarioDados(updatedData); // Atualiza os dados localmente

                    // Armazenar nome diretamente
                    sessionStorage.setItem("nome", updatedData.nome);

                    // Gerar um token para email e usuário
                    let tokenEmail = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
                    let tokenUsuario = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

                    // Armazenar os tokens no sessionStorage
                    sessionStorage.setItem("email", tokenEmail); // "Criptografando" o email
                    sessionStorage.setItem("usuario", tokenUsuario); // "Criptografando" o usuário
                    
                    sessionStorage.setItem("usuarioDados", JSON.stringify(updatedData));
                    alert(`${campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1)} alterado com sucesso!`);
                    fecharModal();
                })
                .catch((error) => console.error("Erro ao atualizar os dados:", error));
        } else {
            alert("O dado atual está incorreto. Tente novamente.");
        }
    };

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { nome, sobrenome, usuario, email, senha, avatar } = usuarioDados;

    return (
        <>
            <SectionEditarUsuario>
                
                <DivEditarAvatar>
                    <div className="editar-dados">
                        <h2>Avatar:</h2>
                        <div className="img-avatar">
                            <img src={usuarioDados.avatar || UsuarioImg} alt="Icone Avatar" />
                        </div>
                    </div>
                    <a onClick={() => abrirModalConfirmacao("avatar")}> Editar Avatar</a> <a/>
                </DivEditarAvatar>

                <DivEditarUsuario>
                    <div className="editar-dados">
                        <h2>Nome:</h2>
                        <p>{nome}</p>
                    </div>
                    <EditarIcon onClick={() => abrirModalConfirmacao("nome")} />
                </DivEditarUsuario>

                <DivEditarUsuario>
                    <div className="editar-dados">
                        <h2>Sobrenome:</h2>
                        <p>{sobrenome}</p>
                    </div>
                    <EditarIcon onClick={() => abrirModalConfirmacao("sobrenome")} />
                </DivEditarUsuario>

                <DivEditarUsuario>
                    <div className="editar-dados">
                        <h2>Usuário:</h2>
                        <p>{usuario}</p>
                    </div>
                    <EditarIcon onClick={() => abrirModalConfirmacao("usuario")} />
                </DivEditarUsuario>

                <DivEditarUsuario>
                    <div className="editar-dados">
                        <h2>Email:</h2>
                        <p>{email}</p>
                    </div>
                    <EditarIcon onClick={() => abrirModalConfirmacao("email")} />
                </DivEditarUsuario>

                <DivEditarUsuario>
                    <div className="editar-dados">
                        <h2>Senha:</h2>
                        <p>{"*".repeat(senha.length)}</p>
                    </div>
                    <EditarIcon onClick={() => abrirModalConfirmacao("senha")}/>
                </DivEditarUsuario>
                
            </SectionEditarUsuario>
            {(modalConfirmacao || modalEdicao || modalEditAvatar) && <Overlay />}
            {modalConfirmacao && (
                <DivModal>
                    <FecharIcon onClick={fecharModal} />
                    <h3>Gostaria de editar o {campoParaEditar}?</h3>
                    <DivBotoesModal>
                        {campoParaEditar === "avatar" ? (
                            <button className="modal-btn-sim" onClick={abrirModalEditAvatar}>Sim, obrigado!</button>
                        ) : (
                            <button className="modal-btn-sim" onClick={abrirModalEdicao}>Sim, obrigado!</button>
                        )}
                        <button className="modal-btn-nao" onClick={fecharModal}>Não, obrigado!</button>
                    </DivBotoesModal>
                </DivModal>
            )}
        
            {modalEdicao && (
                <DivModal1>
                    <FecharIcon onClick={fecharModal} />
                    <h3>Editar {campoParaEditar}</h3>
                    <label>{campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1).toLowerCase()} atual:</label>
                    <div style={{position: "relative"}}>
                        <input 
                            type={campoParaEditar === "senha" && !mostrarSenhaAtual ? "password" : "text"}
                            placeholder={`Digite ${campoParaEditar} atual`} 
                            value={dadoAtual} 
                            onChange={(e) => setDadoAtual(e.target.value)} 
                        />
                        {campoParaEditar === "senha" && (
                            mostrarSenhaAtual ? (
                                <VisivelIcon onClick={() => setMostrarSenhaAtual(false)} />
                            ) : (
                                <OcultoIcon onClick={() => setMostrarSenhaAtual(true)} />
                            )
                        )}
                    </div>
                    <label>Novo {campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1).toLowerCase()}:</label>
                    <div style={{position: "relative"}}>
                        <input 
                            type={campoParaEditar === "senha" && !mostrarNovaSenha ? "password" : "text"}
                            placeholder={`Novo ${campoParaEditar}`} 
                            value={novoDado} 
                            onChange={handleNovoDadoChange}  
                        />
                        {/* Regras*/}
                        {campoParaEditar === "nome" && !nomeValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "5px", display: "block" }}>
                                O nome deve conter apenas letras.
                            </span>
                        )}
                        {campoParaEditar === "sobrenome" && !sobrenomeValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "5px", display: "block" }}>
                                O sobrenome deve conter apenas letras.
                            </span>
                        )}
                        {campoParaEditar === "email" && !emailValido && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "5px", display: "block" }}>
                                O email deve conter "@"
                            </span>
                        )}
                        {campoParaEditar === "senha" && !senhaValida && (
                            <span style={{ color: "red", fontSize: "0.9rem", marginTop: "5px", display: "block" }}>
                                A senha deve ter pelo menos 8 caracteres e deve conter uma letra maiúscula e um número.
                            </span>
                        )}

                        {campoParaEditar === "senha" && (
                            mostrarNovaSenha ? (
                                <VisivelIcon onClick={() => setMostrarNovaSenha(false)} />
                            ) : (
                                <OcultoIcon onClick={() => setMostrarNovaSenha(true)} />
                            )
                        )}
                    </div>

                    {campoParaEditar === "senha" && (
                        <>
                            <label>Confirmar nova senha:</label>
                            <div style={{ position: "relative" }}>
                                <input 
                                    type={mostrarConfirmacaoSenha ? "text" : "password"}
                                    placeholder="Confirme a nova senha"
                                    value={confirmarNovoDado}
                                    onChange={handleConfirmarNovoDadoChange}
                                />
                                {/* Feedback de confirmação de senha */}
                                {!senhaConfirmada && (
                                    <span style={{ color: "red", fontSize: "0.9rem", marginTop: "5px", display: "block" }}>
                                        As senhas não coincidem.
                                    </span>
                                )}
                                {mostrarConfirmacaoSenha ? (
                                    <VisivelIcon onClick={() => setMostrarConfirmacaoSenha(false)} />
                                ) : (
                                    <OcultoIcon onClick={() => setMostrarConfirmacaoSenha(true)} />
                                )}
                            </div>
                        </>
                    )}
                    <button onClick={handleEditar}>Editar</button>
                </DivModal1>
            )}

            {modalEditAvatar && <Overlay onClick={fecharModal}/>}
            {modalEditAvatar && (
                <DivEditarImageModal>
                    <FecharIcon onClick={fecharModal} />
                    <h3>Selecionar Avatar</h3>
                    <SelecionarAvatarNovo>
                        <div className="avatar">
                            <img src={selectedImage} alt="Avatar Perfil" />
                        </div>
                        <div className="sugestao-avatar">
                            <h4>Sugestões de Avatares</h4>
                            <div className="sugestao-img">
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg)}>
                                    <img src={UsuarioImg} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg1)}>
                                    <img src={UsuarioImg1} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg2)}>
                                    <img src={UsuarioImg2} alt="Icone - Avatar" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg3)}>
                                    <img src={UsuarioImg3} alt="Icone - Avatar carro formula E desenho" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg4)}>
                                    <img src={UsuarioImg4} alt="Icone - Avatar carro formula E desenho dark" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg5)}>
                                    <img src={UsuarioImg5} alt="Icone - Avatar formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg6)}>
                                    <img src={UsuarioImg6} alt="Icone - Avatar carro formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg7)}>
                                    <img src={UsuarioImg7} alt="Icone - Avatar carro formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg8)}>
                                    <img src={UsuarioImg8} alt="Icone - Avatar capacete formula E" />
                                </a>
                                <a href="#" onClick={() => handleImageSelect(UsuarioImg9)}>
                                     <img src={UsuarioImg9} alt="Icone - Avatar bandeira chegada formula E" />
                                </a>
                            </div>
                        </div>
                    </SelecionarAvatarNovo>
                    <DivBotoesEditModal>
                        <button className="save-modal-btn" onClick={handleSaveAvatar}>Salvar</button>
                        <button className="close-modal-btn" onClick={fecharModal}>Fechar</button>
                    </DivBotoesEditModal>
                </DivEditarImageModal>
            )}
        </>
    );
};

export default EditarUsuario;