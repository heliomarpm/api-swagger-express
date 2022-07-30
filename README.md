# Demonstrativo usando o Swagger com ExpressJs

**Tutorial:** https://dailyspaghetticode.com/creating-an-api-with-nodejs-and-expressjs/

### Instalando globalmente o pacote
`npm i -g express-generator`

* Se o intuito é criar uma API talvez a pasta **_public_** não faça sentido e convém remover para manter a estrutura limpa.

### Gerando a estrutura da API

`express --no-view`

### Instalando os pacotes para Swagger

`npm i swagger-jsdoc swagger-ui-express`

- O pacote _swagger-jsdoc_ torna possível adicionar JSDoc inline em nossos arquivos de código. É inteligente manter nossa documentação de API perto de nossas definições de ponto final. Isso facilita a manutenção da nossa documentação.

* O _swagger-ui-express_ torna possível o serviço da documentação de API da [Swagger UI](https://swagger.io/tools/swagger-ui/) gerada automaticamente com base em nosso JSDoc inline.