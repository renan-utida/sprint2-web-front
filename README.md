# 🏎️ Fórmula E - Portal de Notícias e Informações

## Página Web - Sprint 3 (Innovation Masters)

Esse projeto foi desenvolvido para a disciplina de **Web Development** e **Front End Design** no segundo semestre de 2024 no curso de **Engenharia de Software** com orientação do professor **Wellington Cidade Silva Tenorio** e **Luis Carlos de Souza Silva** e consiste em uma página de esportes com uma navegação intuitiva e uma interface atraente relacionado a Formula E.

Um site completo sobre a Fórmula E desenvolvido com React, apresentando notícias, informações sobre corridas, quiz interativo e sistema de autenticação de usuários.

## Link do Site

https://sprint2-web-front.vercel.app/

## 🚀 Demonstração

O site está rodando em `localhost:5173` e apresenta:
- **Homepage** com carousel de notícias automático
- **Sistema de navegação** responsivo com menu hamburger
- **Páginas informativas** sobre a Fórmula E
- **Quiz interativo** exclusivo para usuários logados
- **Sistema completo** de autenticação e perfil de usuário

## ✨ Funcionalidades Principais

### 🏠 Página Inicial
- **Carousel automático** de notícias com navegação manual via indicadores
- **Cards de notícias** organizados por categoria (Tecnologia, Corrida, Eventos, Sustentabilidade)
- **Links clicáveis** que direcionam para páginas específicas de cada notícia
- **Rodapé completo** com informações de contato e links rápidos

### 🍔 Navegação
- **Menu hamburger responsivo** com navegação organizada
- **Submenus expansíveis** (ex: seção Notícias com subcategorias)
- **Navegação intuitiva** entre todas as seções do site

### 🏁 Fórmula E
- **Vídeo promocional** da Fórmula E
- **Acordeão interativo** com informações detalhadas
- **Limite de 2 seções abertas** simultaneamente (a terceira fecha automaticamente a primeira)

### 🏎️ Próximas Corridas
- **Cards informativos** de cada corrida com:
  - Número da rodada
  - Data do evento
  - Imagem do circuito
  - Cidade e país
  - Local específico
  - Informações climáticas (temperatura e umidade)
  - Botão "Mais Informações"
- **Página detalhada** sobre pilotos e informações da próxima corrida no Brasil

### 🔐 Sistema de Autenticação
- **Login** para usuários existentes
- **Cadastro completo** com:
  - Seleção de avatar personalizado
  - Validação de email (obrigatório @)
  - Validação de senha (mínimo 8 caracteres, 1 maiúscula, 1 minúscula, números)
  - Confirmação de senha

### 👤 Perfil do Usuário
- **Visualização** de todas as informações da conta
- **Edição completa** de dados do perfil
- **Sistema de pop-ups** para edição individual de cada campo
- **Validação** de alterações em tempo real
- **Opção de logout**

### 🧠 Quiz Interativo
- **Acesso exclusivo** para usuários logados
- **15 perguntas aleatórias** de um banco de 25 questões
- **Pontuação diferenciada** por nível de dificuldade
- **Alternativas embaralhadas** aleatoriamente
- **Resultado detalhado** com pontuação total e número de acertos
- **Possibilidade de refazer** quantas vezes desejar

## 🛠️ Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/)** - Build tool e desenvolvimento
- **[React](https://reactjs.org/)** - Biblioteca JavaScript para UI
- **[JSX](https://reactjs.org/docs/introducing-jsx.html)** - Sintaxe de extensão JavaScript
- **[Styled-Components](https://styled-components.com/)** - CSS-in-JS para estilização
- **[JSON Server](https://github.com/typicode/json-server)** - Mock API REST
- **[React Router DOM](https://reactrouter.com/)** - Navegação e roteamento
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/sprint2-web-front.git
cd sprint2-web-front
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o projeto**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Para usar o JSON Server (se aplicável)
```bash
npm run server
# ou
npx json-server --watch db.json --port 3001
```

## 🌟 Destaques do Projeto

- **Interface moderna e responsiva** com design atrativo
- **Experiência do usuário otimizada** com navegação intuitiva
- **Sistema de autenticação robusto** com validações completas
- **Conteúdo dinâmico** com carousel automático e quiz aleatório
- **Arquitetura bem estruturada** com componentes reutilizáveis
- **Integração completa** entre front-end e mock API

## 📱 Responsividade

O site foi desenvolvido com foco em responsividade, funcionando perfeitamente em:
- 🖥️ Desktops
- 💻 Laptops
- 📱 Tablets
- 📱 Smartphones

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Desenvolvedores:

Renan Dias Utida <br>
Murilo Justi Rodrigues <br>
Leonardo Scarpitta <br>
Fabrício Carlos Duarte

---

**Desenvolvido para os fãs da Fórmula E**

*© 2024 - Todos os direitos reservados*

## 📷 ScreenShots 

### Página Principal 

Carousel de notícias fictícias relacionadas à Fórmula E.

![image](https://github.com/user-attachments/assets/07b21d65-83fc-41a4-9d83-b9519493d479)

Últimas notícias organizadas em exibição

![image](https://github.com/user-attachments/assets/000b587a-0394-4804-945d-8447d584a35f)

Rodapé/Footer

![image](https://github.com/user-attachments/assets/8fae82a0-c657-45f1-99df-ac197eb4fe3a)

---

### Página de Fórmula E

Vídeo mostrando um pouco sobre a Fórmula E

![image](https://github.com/user-attachments/assets/a052e467-cf9f-4f65-a30c-08b96f7af96e)

Informações sobre a Fórmula E em Accordion 

![image](https://github.com/user-attachments/assets/9f347d84-5195-49c6-993e-f6184d5beec2)

---

### Página de Próximas Corridas

Cards Organizados com infos sobre as próximas corridas de Fórmula E

![image](https://github.com/user-attachments/assets/a012b72d-c1f9-4a48-8a3f-3f09ce755275)

---

### Exibição do Menu Hamburger

Menu Hamburger interativo com toda a navegação do nosso site

---

### Páginas de Login e Criar Conta

Página de Login para usuários que já possuem conta criada

![image](https://github.com/user-attachments/assets/43a764ec-bd36-4407-8530-eac5ec344aca)

Página de Criar conta, onde o usuário pode escolher o avatar e deve colocar o nome, sobrenome, email, nome de usuário e senha

![image](https://github.com/user-attachments/assets/be9b649a-7c35-448b-a447-9edeee61a142)

---

### Página do Quiz

Disponível apenas para usuários cadastrados, lobby inicial do quiz

![image](https://github.com/user-attachments/assets/127b8531-95b5-4eeb-a03f-a2225b288efc)

Quiz em andamento, onde temos 4 opções de resposta

![image](https://github.com/user-attachments/assets/acf70f43-56af-4856-91b1-2060f837d16f)

Final do Quiz, exibindo a quantidade de acertos e a pontuação final

![image](https://github.com/user-attachments/assets/2281131b-c9e3-4886-b91d-bf67d2a82bf9)

---

### Páginas de Perfil e Editar Conta

![image](https://github.com/user-attachments/assets/f7089165-b124-4497-9d10-a8ff78d1cc92)

![image](https://github.com/user-attachments/assets/c50c395e-1ad3-46a7-8537-1042189b0e92)

![image](https://github.com/user-attachments/assets/2f833e00-896e-4278-b81b-e22ad959733f)

![image](https://github.com/user-attachments/assets/421fd6ae-75f5-480b-afde-9a623f9143e7)

![image](https://github.com/user-attachments/assets/195166b8-1385-4d5c-ab24-632841d083f4)

## Link do github

https://github.com/Innovation-Masters/sprint2-web-front

