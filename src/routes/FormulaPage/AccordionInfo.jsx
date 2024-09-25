import { useState } from "react";
import { SectionFormula } from "./formulae-styled";

const AccordionInfo = () => {
    // Gerencia o estado dos painéis abertos como uma lista
    const [activeIndices, setActiveIndices] = useState([]);

    // Função para alternar o estado do painel
    const togglePanel = (index) => {
        if (activeIndices.includes(index)) {
            // Remove o índice do painel da lista se já estiver aberto
            setActiveIndices(activeIndices.filter(i => i !== index));
        } else {
            // Se já há 2 painéis abertos, remove o primeiro
            if (activeIndices.length === 2) {
                setActiveIndices([activeIndices[1], index]); // Mantém o segundo e adiciona o novo
            } else {
                // Adiciona o índice do painel à lista de abertos
                setActiveIndices([...activeIndices, index]);
            }
        }
    };

    // Lista de perguntas e respostas para o accordion
    const perguntasRespostas = [
        {
            pergunta: "O que é a Fórmula E?",
            resposta: (
                <div>
                    <p>Organizada pela FIA (Federação Internacional do Automóvel), a Fórmula E é um evento global de automobilismo com carros totalmente elétricos. Desde sua estreia em 2014,  o campeonato vem ganhando mais público e visibilidade no meio esportivo por oferecer uma alternativa ecológica ao automobilismo tradicional e por incentivar o desenvolvimento de tecnologias de veículos elétricos e energia limpa.</p>
                    <p>As corridas acontecem em circuitos urbanos globais e contam com a participação de montadoras importantíssimas como Jaguar, Porsche e McLaren. Em 2024 são 16 corridas em 11 cidades, com São Paulo recebendo o 4º ePrix (07 de dezembro de 2024).</p>
                </div>
            ),
        },
        {
            pergunta: "Primeira Corrida e História da Fórmula E",
            resposta: (
                <div>
                    <p>As primeiras idealizações do projeto surgiram em 2011, com o objetivo de realizar corridas apenas com veículos elétricos e promover uma grande vitrine para e eletromobilidade.</p>
                    <p>Porém, a primeira corrida da compretição de Fórmula E, foi realizada há poucos anos, em 2014, no Parque Olímpico de Pequim, na China. Esse evento marcou o início de uma nova era no automobilismo, focada na sustentabilidade e na inovação tecnológica.</p>
                    <p>Nelsinho Piquet, um piloto brasileiro, fez história ao se tornar o primeiro campeão da Fórmula E na temporada 2014-2015, e desde então, o campeonato vem ganhando mais público e visibilidade no meio esportivo!</p>
                </div>
            ),
        },
        {
            pergunta: "Principais Características e Diferenciais da Fórmula E",
            resposta: (
                <div>
                    <p>Os carros da Fórmula E são equipados com baterias elétricas recarregáveis que representam a principal fonte de energia para as corridas.</p>
                    <p>As corridas da Fórmula E ocorrem em circuitos de rua em grandes cidades ao redor do mundo, proporcionando uma experiência única para os fãs que podem ver os carros em ação bem de perto.</p>
                    <p>Isso porque os circuitos de rua conversam diretamente com os sistemas de recuperação de energia essenciais para os Gen3, como são chamadas as máquinas da Fórmula E. Longas retas e freadas fortes permitem que a unidade de potência seja retroalimentada, enquanto as curvas mais fechadas exigem que os carros sejam mais robustos que os monopostos da F1, já que o contato entre pilotos é inevitável.</p>
                    <p>Além disso, a Fórmula E contribui significativamente para a promoção da mobilidade sustentável, desenvolvendo tecnologias de baterias, eficiência energética, e sistemas de recuperação de energia que podem ser aplicados em veículos comerciais.</p>
                </div>
            ),
        },
        {
            pergunta: "Inovações Tecnológicas e Impacto Ambiental",
            resposta: (
                <div>
                    <p>A Fórmula E é o único campeonato de monopostos 100% elétrico a contar com a chancela da Federação Internacional do Automobilismo em todo o mundo, além de ser o primeiro esporte mundial a ser certificado com uma pegada líquida de carbono zero, tornando-se um exemplo em termos de responsabilidade ambiental no esporte.</p>
                    <p>A regeneração de energia é um aspecto crucial para a sustentabilidade da Fórmula E, permitindo que os carros recuperem energia durante a frenagem e armazenem nas baterias. Isso não apenas reduz a dependência de carregadores externos durante a corrida, mas também contribui para a eficiência dos veículos elétricos.</p>
                </div>
            ),
        },
        {
            pergunta: "FanBoost e Attack Mode",
            resposta: (
                <div>
                    <p>Dois dos elementos mais interativos e únicos da Fórmula E são o "FanBoost" e o "Attack Mode".</p>
                    <p>Implementado na temporada inaugural da categoria em 2014 e removido a partir da temporade 2022/2023, o FanBoost era um recurso que permitia aos fãs votarem para dar um impulso extra de potência a seus pilotos favoritos durante a corrida, na qual os 3 pilotos mais votados, recebiam 5 segundos extra de potência máxima (170 e 200 kW) em seus carros durante a corrida, o que adicionava uma dimensão de engajamento dos espectadores.</p>
                    <p>Posto em prática a partir da temporada 2018/2019, o Attack Mode é um modo que permite aos pilotos ganharem uma potência extra por um tempo limitado durante a corrida (Com o modo ativado, o carro passa de uma potência de 200 kW para 225 kW), aumentando a velocidade de seus carros e criando oportunidades estratégicas de ultrapassagem.</p>
                </div>
            ),
        },
        {
            pergunta: "Contribuições da Fórmula E para o Futuro dos Veículos Elétricos",
            resposta: (
                <div>
                    <p>A Fórmula E é uma importante plataforma de testes para tecnologias de veículos elétricos que acabam sendo aplicadas em carros comerciais. As inovações desenvolvidas na Fórmula E, como melhorias nas baterias, eficiência energética, e sistemas de recuperação de energia, permitem que as equipes desenvolvam suas próprias soluções para melhorar o desempenho e a eficiência dos carros. Isso estimula a pesquisa e o desenvolvimento de tecnologias avançadas, que podem ser aplicadas posteriormente em veículos elétricos para o uso cotidiano.</p>
                </div>
            ),
        },
        {
            pergunta: "Gen3 Evo 2024/2025",
            resposta: (
                <div>
                    <p>O Gen3 Evo é uma versão atualizada do antigo modelo e que irá para a pista a partir da temporada 2024-25, a 11ª desde a criação da Fórmula E. Um dos grandes destaques é o alto poder de aceleração, que vai de 0 a 96 km/h em apenas 1s82 — 30% mais rápido que os carros atuais da Fórmula 1.</p>
                    <p>As melhorias de performance também significam um aumento de 2% em comparação com o atual Gen3. O novo desenho foi feito para ser mais forte, mais robusto e com mais aerodinâmica, aproximando também as batalhas roda a roda da categoria.</p>
                </div>
            ),
        },
        {
            pergunta: "Participação Brasileira na Fórmula E",
            resposta: (
                <div>
                    <p>O Brasil tem uma presença significativa na Fórmula E, com pilotos como Bruno Senna, Felipe Nasr, Sérgio Sette Câmara, Lucas Di Grassi, Nelsinho Piquet e Felipe Massa já competindo na categoria. Dentre eles, apenas Nelson Piquet Jr, em 2014/2015 (inaugural) e Lucas Di Grassi na temporada 2016/2017, foram os brasileiros campeões da Fórmula E até o momento.</p>
                    <p>A cidade de São Paulo receberá pela segunda vez uma etapa da Fórmula E no dia 07 de Dezembro deste ano. A primeira vez em que foi recebido o E-Prix em terras brasileiras foi em março de 2023, em São Paulo também, ambos os eventos no Sambódromo do Anhembi. Evidenciando o interesse crescente do país pela competição e pela mobilidade elétrica.</p>
                </div>
            ),
        },
    ];

    return (
        <SectionFormula>
            {perguntasRespostas.map((item, index) => (
                <div key={index} className="box-accodion">
                    <button
                        className={`pergunta ${activeIndices.includes(index) ? "active" : ""}`}
                        onClick={() => togglePanel(index)}
                    >
                        {item.pergunta}
                        <svg
                            className={`arrow ${activeIndices.includes(index) ? "open" : ""}`}
                            viewBox="0 0 24 24"
                        >
                            <path d="M2.793 15.957a1 1 0 0 0 1.414 0L12 8.164l7.793 7.793a1 1 0 1 0 1.414-1.414L12 5.336l-9.207 9.207a1 1 0 0 0 0 1.414z"></path>
                        </svg>
                    </button>
                    <div
                        className="panel"
                        style={{
                            display: activeIndices.includes(index) ? "block" : "none",
                        }}
                    >
                        {item.resposta}
                    </div>
                </div>
            ))}
        </SectionFormula>
    );
};

export default AccordionInfo
