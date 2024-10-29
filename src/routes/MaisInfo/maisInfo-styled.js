import styled from "styled-components";

export const MainMaisInfo = styled.section`
  min-height: 100vh;
  margin-top: 75px;

  .titulo-telemetria {
    text-align: center;
    font-size: 3rem;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .titulo-telemetria {
      font-size: 2rem;
    }
  }
`;

export const DivTelemetria = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 50px;
  margin-left: 100px;

  .localizacao {
    display: flex;
    align-items: center;
  }

  .info-pista {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }

  .telemetria-info {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Icone = styled.img`
  width: 32px;
  height: 32px;
`;

export const Runners = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 650px);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DivInfo = styled.div`
  margin-top: 50px;
  margin-left: 20px;

  .local-data {
    display: flex;
    gap: 75px;
  }

  .local {
    display: flex;
    gap: 10px;
  }

  .temperatura {
    display: flex;
    gap: 10px;
  }

  .umidade {
    display: flex;
    gap: 10px;
  }

  .velocidade {
    display: flex;
    gap: 10px;
  }

  .distancia {
    display: flex;
    gap: 10px;
  }

  .card-piloto {
    display: flex;
    margin-top: 50px;
    gap: 20px;
    background-color: #4646ff;
    color: white;
    border-radius: 50px;
    width: 100%;
    min-height: 300px;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .conteudo-card-piloto {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nome-piloto {
    font-size: 2rem;
  }

  .pilotos {
    display: flex;
  }

  .img-carro {
    width: 100px;
    height: 30px;
  }

  @media (max-width: 768px) {
    .nome-piloto {
      font-size: 1.5rem;
    }
    .img-carro {
      width: 80px;
      height: 25px;
    }
  }`
