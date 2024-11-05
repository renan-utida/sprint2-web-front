import { useEffect, useState } from "react";
import { DivAvatarUser, DivNomeSobrenome, DivUserInfo1, DivUserInfo2, OcultoIcon, SectionPerfil, VisivelIcon } from "./perfil-styled"

import UsuarioImg from "./../../assets/images/usuario-login.png"

const InformacoesUsuario = () => {

    const [usuarioDados, setUsuarioDados] = useState(null);
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    useEffect(() => {
        const usuarioSalvo = JSON.parse(sessionStorage.getItem("usuarioDados"));
        if (usuarioSalvo) {
            setUsuarioDados(usuarioSalvo);
        }
    }, []);

    const toggleSenhaVisivel = () => {
        setSenhaVisivel(prevVisivel => !prevVisivel);
    };

    if (!usuarioDados) return <p>Carregando dados...</p>;

    const { avatar, nome, sobrenome, email, usuario, senha } = usuarioDados;

    return(
        <SectionPerfil>
            <h2>Informações de Perfil</h2>
            <DivUserInfo1>
                <DivAvatarUser> 
                    <img src={avatar} alt="Icone - Avatar" />
                    <h4>{usuario}</h4>
                </DivAvatarUser>
                <DivNomeSobrenome>
                    <h3>Nome:</h3>
                    <p>{nome}</p>
                    <h3>Sobrenome:</h3>
                    <p>{sobrenome}</p>
                </DivNomeSobrenome>
            </DivUserInfo1>
            <DivUserInfo2>
                <h3>Email:</h3>
                <p>{email}</p>
                <h3>Senha:</h3>
                <div className="password-perfil">
                    <p>{senhaVisivel ? senha : "*".repeat(senha.length)}</p>
                    {senhaVisivel ? (
                        <VisivelIcon onClick={toggleSenhaVisivel} />
                    ) : (
                        <OcultoIcon onClick={toggleSenhaVisivel} />
                    )}
                </div>
            </DivUserInfo2>
        </SectionPerfil>
    )
}

export default InformacoesUsuario