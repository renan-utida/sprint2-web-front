import { useEffect, useState } from "react";
import { DivEditarUsuario, EditarIcon, SectionEditarUsuario } from "./editar-conta-styled";

const EditarUsuario = () => {
    const [usuarioDados, setUsuarioDados] = useState(null);

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

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { nome, sobrenome, usuario, email, senha } = usuarioDados;

    return (
        <SectionEditarUsuario>
            <DivEditarUsuario>
                <div className="editar-dados">
                    <h2>Nome:</h2>
                    <p>{nome}</p>
                </div>
                <EditarIcon />
            </DivEditarUsuario>

            <DivEditarUsuario>
                <div className="editar-dados">
                    <h2>Sobrenome:</h2>
                    <p>{sobrenome}</p>
                </div>
                <EditarIcon />
            </DivEditarUsuario>

            <DivEditarUsuario>
                <div className="editar-dados">
                    <h2>Usuário:</h2>
                    <p>{usuario}</p>
                </div>
                <EditarIcon />
            </DivEditarUsuario>

            <DivEditarUsuario>
                <div className="editar-dados">
                    <h2>Email:</h2>
                    <p>{email}</p>
                </div>
                <EditarIcon />
            </DivEditarUsuario>

            <DivEditarUsuario>
                <div className="editar-dados">
                    <h2>Senha:</h2>
                    <p>{"*".repeat(senha.length)}</p>
                </div>
                <EditarIcon />
            </DivEditarUsuario>
        </SectionEditarUsuario>
    );
};

export default EditarUsuario;