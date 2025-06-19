# Prova

Testes de UI com Cypress + Testes de API com Postman

## Como usar

Esta seção fornece instruções abrangentes para configurar e executar as suites de teste.

### Pré-requisitos

- Node.js (versão recomendada: 16.x ou superior)
- npm (gerenciador de pacotes do Node.js)
- Cypress
- Cypress Mochawesome Report
- Newman
- Newman Reporter htmlextra

### Instalação

1. Clone o repositório:

   ```bash
   git clone git clone https://github.com/FelipeRibeiro12/S206.git
   cd Lab
   cd prova
   ```
   
2. Instale as dependências:

   ```bash
   npm install
   npm install newman
   npm install newman-reporter-htmlextra
   ```

### Rodando a Aplicação

#### Suite de testes UI (Cypress) e gerar relatório

-> Testes realizados em: https://www.saucedemo.com

    ```bash
    npx cypress run --reporter mochawesome
    ```
-> O relatório será gerado na pasta `cypress/reports/mochawesome-report`.
-> Para visualizar o relatório, abra o arquivo `.html` em seu navegador.

#### Suite de testes UI (Cypress) e gerar relatório

-> Testes realizados em: https://reqres.in

```bash
cd postman
newman run prova.postman_collection -r htmlextra
```
-> O relatório será gerado na pasta `postman/newman`.
-> Para visualizar o relatório, abra o arquivo `.html` em seu navegador.

### Dicas

-> Certifique-se de seguir o passo a passo.