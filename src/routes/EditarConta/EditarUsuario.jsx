import { useEffect, useState } from "react";
import { DivBotoesModal, DivEditarUsuario, DivModal, DivModal1, EditarIcon, FecharIcon, Overlay, SectionEditarUsuario, OcultoIcon, VisivelIcon } from "./editar-conta-styled";

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

    useEffect(() => {
        const usuarioLogado = sessionStorage.getItem("usuario");
    
        if (usuarioLogado) {
            fetch(`http://localhost:5003/usuarios?usuario=${usuarioLogado}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setUsuarioDados(data[0]);
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
    };

    const abrirModalEdicao = () => {
        setDadoAtual(""); // Limpa o campo do dado atual
        setNovoDado(""); // Limpa o campo do novo dado
        setConfirmarNovoDado(""); // Limpa o campo de confirmação
        setModalConfirmacao(false);
        setModalEdicao(true);
    };

    const handleEditar = () => {
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
                    alert(`${campoParaEditar.charAt(0).toUpperCase() + campoParaEditar.slice(1)} alterado com sucesso!`);
                    fecharModal();
                })
                .catch((error) => console.error("Erro ao atualizar os dados:", error));
        } else {
            alert("O dado atual está incorreto. Tente novamente.");
        }
    };

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { nome, sobrenome, usuario, email, senha } = usuarioDados;

    return (
        <>
            <SectionEditarUsuario>

                {(modalConfirmacao || modalEdicao) && <Overlay />}
                
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

            {modalConfirmacao && (
                <DivModal>
                    <FecharIcon onClick={fecharModal} />
                    <h3>Gostaria de editar o {campoParaEditar}?</h3>
                    <DivBotoesModal>
                        <button className="modal-btn-sim" onClick={abrirModalEdicao}>Sim, obrigado!</button>
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
                            type={mostrarSenhaAtual ? "text" : "password"}
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
                            type={mostrarNovaSenha ? "text" : "password"}
                            placeholder={`Novo ${campoParaEditar}`} 
                            value={novoDado} 
                            onChange={(e) => setNovoDado(e.target.value)} 
                        />
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
                                    onChange={(e) => setConfirmarNovoDado(e.target.value)}
                                />
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
        </>
    );
};

export default EditarUsuario;