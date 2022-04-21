
# Simulados

## Sobre Simulados
- API para solução de simulados para o [@tonaaulasp](https://www.instagram.com/tonaaulasp/)
- É parte do Projeto Integrador II da Univesp

<br>

## Tecnologias

### Necessário ter instalado
- [NodeJS](https://nodejs.org/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/)

### Opcional
- [VSCode](https://code.visualstudio.com/) utilizando [GitHub Copilot](https://copilot.github.com/)
- [MongoDB Compass](https://www.mongodb.com/pt-br/products/compass) - Pode ser instalado com o MongoDB

### Pacotes do projeto
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://nodemon.io/)
- [Cors](https://www.npmjs.com/package/cors)
- [DotEnv](https://www.npmjs.com/package/dotenv)


<br>

## Instalação e uso

```bash
# Abra um terminal e copie este repositório com o comando
git clone https://github.com/BrunaABraguin/simulados-api.git
# ou use a opção de download.

#Navegue até a pasta onde foi salvo o repositório
cd pastadorepositorio

# Instale as dependências
npm install

# Rode a aplicação
npm run dev

# Acesse http://localhost:3000 no seu navegador.
```

<br>

## Métodos

| Método | Descrição |
|---|---|
| `POST` em http://localhost:3000/api/v1/question | Cria uma questão para ser utilizado no simulado. |
| `POST` em http://localhost:3000/api/v1/test | Cria um simulado. |


<br>

## Exemplos de requisição (application\json)

<br>

### Questões [/question]

- question: { type: String, required: true}
- answer: { type: String, required: true}
- options: { type: String, required: true}
 - comment: { type: String, required: false}
 - category: { type: String, required: true}
 - subcategory: { type: String, required: true}

<br>
 
```bash
{
    "question": "No contexto dos objetivos e principais conceitos da área de engenharia de software, marque a alternativa que apresenta uma questão básica apresentada na videoaula sobre introdução à engenharia de software:",
    "answer": "Principais desafios enfrentados pela engenharia de software.",
    "options":
    [
        "Diferenças que os celulares (smartphones) trouxeram para a engenharia de software.",
        "Lista completa de todas as atividades da engenharia de software.",
        "Diferença entre engenharia de software e engenharia de produção.",
        "Atributos do software eficiente."
    ],
    "comments": "Os principais desafios enfrentados pela engenharia de software são 'lidar com a crescente diversidade, com as demandas por menores prazos de entrega e desenvolver software confiável.'",
    "category": "Engenharia de Software",
    "subcategory": "Introdução à Engenharia de Software"
}
```
