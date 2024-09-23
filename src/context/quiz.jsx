import { createContext, useReducer } from "react";

const STAGES = ["Start", "Playing", "End"];

//----------------------------------------------------------------//
// QUIZ
// Perguntas e respostas
const questions = [
    {
        question: "Onde ocorreu a primeira corrida de Fórmula E da história? (75 pontos)",
        options: [
            "Pequim (China)", 
            "Londres (Inglaterra)", 
            "Miami (Estados Unidos)", 
            "Paris (França)"
        ],
        answer: "Pequim (China)",
        points: 75,
    },
    {
        question: "Quando ocorreu a primeira corrida do Campeonato de Fórmula E da ABB? (50 pontos)",
        options: ["2008", "2010", "2014", "2017"],
        answer: "2014",
        points: 50,
    },
    {
        question: "Qual desses brasileiros nunca participou de uma corrida de Fórmula E? (40 pontos)",
        options: [
            "Rubens Barrichello",
            "Lucas Di Grassi",
            "Sérgio Sette Câmara",
            "Felipe Massa"
        ],
        answer: "Rubens Barrichello",
        points: 40,
    },
    {
        question: "Quem foi o campeão da primeira edição de Fórmula E? (100 pontos)",
        options: [
            "Nelsinho Piquet (BRA)",
            "Lucas Di Grassi (BRA)",
            "Jean-Éric Vergne (FRA)",
            "António Félix da Costa (POR)"
        ],
        answer: "Nelsinho Piquet (BRA)",
        points: 100,
    },
    {
        question: "O que é a Fórmula E? (50 pontos)",
        options: [
            "Uma categoria de automobilismo que utiliza carros movidos a motores a combustão interna, como na Fórmula 1.",
            "Uma competição de corrida de automóveis que acontece apenas em autódromos tradicionais, sem nenhuma preocupação com sustentabilidade.",
            "Uma categoria de automobilismo totalmente elétrica, onde os carros são movidos por baterias e motores elétricos, promovendo a mobilidade sustentável.",
            "Um evento de corridas que utiliza exclusivamente carros movidos a energia solar e ocorre apenas em circuitos rurais."
        ],
        answer: "Uma categoria de automobilismo totalmente elétrica, onde os carros são movidos por baterias e motores elétricos, promovendo a mobilidade sustentável.",
        points: 50,
    },
    {
        question: "Qual é a principal fonte de energia utilizada pelos carros da Fórmula E? (40 pontos)",
        options: ["Gasolina", "Diesel", "Energia Solar", "Baterias elétricas recarregáveis"],
        answer: "Baterias elétricas recarregáveis",
        points: 40,
    },
    {
        question: "Em quais tipos de circuitos as corridas da Fórmula E geralmente acontecem? (50 pontos)",
        options: [
            "Autódromos permanentes no deserto",
            "Circuitos de rua em grandes cidades",
            "Pistas de corrida oval",
            "Trilhas off-road em áreas rurais"
        ],
        answer: "Circuitos de rua em grandes cidades",
        points: 50,
    },
    {
        question: "Como a Fórmula E contribui para a promoção da mobilidade sustentável? (45 pontos)",
        options: [
            "Utilizando motores a combustão de alto desempenho",
            "Realizando corridas em locais remotos e de difícil acesso",
            "Promovendo e desenvolvendo tecnologias de veículos elétricos e energia limpa",
            "Utilizando combustíveis fósseis alternativos"
        ],
        answer: "Promovendo e desenvolvendo tecnologias de veículos elétricos e energia limpa",
        points: 45,
    },
    {
        question: "Qual é o tempo médio de duração de uma corrida da Fórmula E? (65 pontos)",
        options: ["30 minutos + 2 voltas", "45 minutos + 1 volta", "60 minutos + 1 volta", "75 minutos."],
        answer: "45 minutos + 1 volta",
        points: 65,
    },
    {
        question: "O que foi o 'FanBoost' e como ele afetava as corridas da Fórmula E? (80 pontos)",
        options: [
            "Um sistema de penalização para pilotos que cometiam infrações",
            "Um recurso que permitia que os fãs votassem para dar um impulso extra de potência a seus pilotos favoritos durante a corrida",
            "Uma técnica de pit stop para trocar pneus mais rapidamente",
            "Um dispositivo que aumentava a velocidade máxima dos carros em pistas de alta velocidade"
        ],
        answer: "Um recurso que permitia que os fãs votassem para dar um impulso extra de potência a seus pilotos favoritos durante a corrida",
        points: 80,
    },
    {
        question: "Qual é a equipe que NÃO faz parte do grid da Fórmula E em 2024? (60 pontos)",
        options: ["DS Penske", "Jaguar TCS Racing", "Ferrari Racing", "Mahindra Racing"],
        answer: "Ferrari Racing",
        points: 60,
    },
    {
        question: "Qual é a velocidade máxima que um carro da terceira geração (GEN3) de Fórmula E pode atingir? (70 pontos)",
        options: ["322 km/h", "300 km/h", "350 km/h", "375 km/h"],
        answer: "322 km/h",
        points: 70,
    },
    {
        question: "Qual é a importância da regeneração de energia para os carros da Fórmula E? (55 pontos)",
        options: [
            "Permite que os carros da Fórmula E alcancem velocidades mais altas do que os carros de Fórmula 1.",
            "É fundamental para a sustentabilidade da Fórmula E, reduzindo a dependência de combustíveis fósseis.",
            "A regeneração de energia torna as corridas da Fórmula E mais longas, já que os carros podem percorrer maiores distâncias com uma única carga.",
            "Não tem impacto significativo no desempenho dos carros da Fórmula E."
        ],
        answer: "É fundamental para a sustentabilidade da Fórmula E, reduzindo a dependência de combustíveis fósseis.",
        points: 55,
    },
    {
        question: "Quem são os 2 pilotos que detêm o recorde de mais vitórias na história da Fórmula E (até 2024)? (85 pontos)",
        options: [
            "Lucas Di Grassi e Sébastien Buemi",
            "Jean-Éric Vergne e Lucas Di Grassi",
            "António Félix da Costa e Sébastien Buemi",
            "Jean-Éric Vergne e António Félix da Costa"
        ],
        answer: "Lucas Di Grassi e Sébastien Buemi",
        points: 85,
    },
    {
        question: "Como as baterias dos carros da Fórmula E são recarregadas durante os eventos? (100 pontos)",
        options: [
            "Com troca de baterias durante a corrida",
            "Os carros são conectados a carregadores rápidos durante um intervalo curto entre as duas partes da corrida.",
            "As baterias são carregadas durante a corrida através de painéis solares instalados nos carros.",
            "A energia é recuperada durante a frenagem e armazenada nas baterias, eliminando a necessidade de carregadores externos."
        ],
        answer: "Os carros são conectados a carregadores rápidos durante um intervalo curto entre as duas partes da corrida.",
        points: 100,
    },
    {
        question: "Como funciona o 'Attack Mode' na Fórmula E e qual é seu impacto na corrida? (90 pontos)",
        options: [
            "Um sistema de penalização que aumenta o tempo de corrida dos pilotos",
            "Um modo que permite aos pilotos ganharem uma potência extra por um tempo limitado, aumentando a velocidade do carro.",
            "Uma troca obrigatória de pneus durante a corrida",
            "Um bônus de tempo que os pilotos podem usar a qualquer momento"
        ],
        answer: "Um modo que permite aos pilotos ganharem uma potência extra por um tempo limitado, aumentando a velocidade do carro.",
        points: 90,
    },
    {
        question: "Como a tecnologia da Fórmula E está influenciando o desenvolvimento de veículos elétricos comerciais? (60 pontos)",
        options: [
            "Ao promover o uso de motores a combustão em veículos elétricos",
            "Ao desenvolver tecnologias de baterias, eficiência energética e sistemas de recuperação de energia que podem ser aplicados em carros de passeio",
            "Ao incentivar o uso exclusivo de combustíveis fósseis",
            "Ao focar apenas em carros de corrida, sem aplicação em veículos comerciais"
        ],
        answer: "Ao desenvolver tecnologias de baterias, eficiência energética e sistemas de recuperação de energia que podem ser aplicados em carros de passeio",
        points: 60,
    },
    {
        question: "Qual é a potência máxima que um carro (GEN3) de Fórmula E pode atingir durante a corrida? (75 pontos)",
        options: ["200 kW", "250 kW", "350 kW", "480 kW"],
        answer: "350 kW",
        points: 75,
    },
    {
        question: "O que significa a sigla FIA na Fórmula E? (50 pontos)",
        options: [
            "Federação Internacional de Automobilismo",
            "Ferramenta de Inteligência Artificial",
            "Fãs Interessados em Automobilismo",
            "Fórum de Inteligência Automobilística"
        ],
        answer: "Federação Internacional de Automobilismo",
        points: 50,
    },
    {
        question: "Como a Fórmula E lida com questões ambientais e a sustentabilidade de seus eventos? (55 pontos)",
        options: [
            "Realizando corridas em locais remotos para minimizar o impacto ambiental",
            "Usando energia 100% renovável para recarregar as baterias e compensando a pegada de carbono dos eventos",
            "Permitindo o uso de combustíveis fósseis durante as corridas",
            "Ignorando as questões ambientais para focar apenas na competição"
        ],
        answer: "Usando energia 100% renovável para recarregar as baterias e compensando a pegada de carbono dos eventos",
        points: 55,
    },
    {
        question: "Qual é o papel da FIA (Federação Internacional de Automobilismo) na Fórmula E? (60 pontos)",
        options: [
            "A FIA não tem nenhuma relação com a Fórmula E nem com a Formula 1.",
            "A FIA é responsável pela regulamentação, supervisão e promoção da Fórmula E, garantindo a segurança e a conformidade das equipes e pilotos.",
            "A FIA apenas fornece os pneus para as corridas da Fórmula E.",
            "A FIA organiza apenas as corridas de Fórmula 1, sem envolvimento na Fórmula E."
        ],
        answer: "A FIA é responsável pela regulamentação, supervisão e promoção da Fórmula E, garantindo a segurança e a conformidade das equipes e pilotos.",
        points: 60,
    },
    {
        question: "Como a estratégia de gerenciamento de energia pode decidir o resultado de uma corrida da Fórmula E? (65 pontos)",
        options: [
            "Os pilotos que não se preocupam com o gerenciamento de energia geralmente vencem.",
            "A eficiência na utilização da energia disponível permite que os pilotos mantenham um ritmo competitivo, influenciando diretamente a posição final.",
            "A estratégia de energia não tem impacto nas corridas da Fórmula E.",
            "Os pilotos devem usar a energia rapidamente para garantir uma vantagem no início da corrida."
        ],
        answer: "A eficiência na utilização da energia disponível permite que os pilotos mantenham um ritmo competitivo, influenciando diretamente a posição final.",
        points: 65,
    },
    {
        question: "Qual estado do Brasil vai ser/foi o primeiro a receber uma etapa da Fórmula E? (70 pontos)",
        options: ["São Paulo", "Rio de Janeiro", "Rio Grande do Sul", "Bahia"],
        answer: "São Paulo",
        points: 70,
    },
    {
        question: "Quantas vezes os pilotos podem ativar a potência extra (Attack Mode) durante uma corrida? (75 pontos)",
        options: ["2 vezes", "3 vezes", "4 vezes", "5 vezes"],
        answer: "2 vezes",
        points: 75,
    },
    {
        question: "Quem foi o campeão da Formula E na temporada de 2023? (100 pontos)",
        options: ["Lucas Di Grassi (BRA)", "Nyck de Vries (HOL)", "Jake Dennis (ING)", "Jean-Eric Vergne (FRA)"],
        answer: "Jake Dennis (ING)",
        points: 100,
    }
];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    correctAnswers: 0,
};

const quizReducer = (state, action) => {

    switch (action.type) {
        case "CHANGE_STATE":
            const shuffledQuestions = questions
                .map((question) => ({
                    ...question,
                    options: question.options.sort(() => Math.random() - 0.5),
                }))
                .sort(() => Math.random() - 0.5)
                .slice(0, 15); // Seleciona apenas as primeiras 15 perguntas embaralhadas

            return {
                ...state,
                gameStage: STAGES[1],
                questions: shuffledQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = nextQuestion >= state.questions.length; // Verifica se atingiu a última pergunta

            return{
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            };

        case "NEW_GAME":
            // Reseta o jogo e reordena as perguntas
            const resetState = {
                ...initialState,
                questions: state.questions.sort(() => Math.random() - 0.5),
            };
            return resetState;

        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0; 
            let incrementCorrectAnswers = 0; // campo para contar acertos

            // Adiciona a pontuação se a resposta estiver correta
            if (answer === option) {
                correctAnswer = state.questions[state.currentQuestion].points;
                incrementCorrectAnswers = 1;
            }

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
                correctAnswers: state.correctAnswers + incrementCorrectAnswers,
            };

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return(
        <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
    )
        
};