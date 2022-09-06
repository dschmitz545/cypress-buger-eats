# Treinando um pouco com Cypress

Treinando um pouco de testes cypress

## Instalação

- No terminal

```bash
npm install cypress --save-dev
```

- Adicionar no package.json

```json
.
.
.
"scripts": {
    "test": "npx cypress open",
    "start": "npx cypress run -b chrome"
  },
```

## Rodando

```bash
npm test
```