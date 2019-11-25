# RocketSeat Experience

Exercício de migração para NodeJS e ReactJs

Fala Dev! Tudo bem? Vamos começar nosso exercício e para isso você precisará ter instalado na sua maquina o NODE.

1. Você precisa ter o NODE e NPM instalados no seu sistema operacional para continuar

2. Clone este repositório em algum lugar do seu computador

3. Dentro da pasta <code>backend</code> execute: <code>npm install mysql --save</code>

4. Você vai notar que dentro deste pacote existem duas pastas:

- Backend
- Frontend

# Backend

O backend possui uma instalação do <b>AdonisJs</b> (Framework Node: https://adonisjs.com/)

# Frontend

A pasta frontend possui uma aplicação simples em <b>ReactJs</b>

# Vamos iniciar pelo backend, deixando nossa API pronta para entregar dados ao nosso frontend:

- Dentro da pasta backend, execute o comando <code>npm install</code> para instalar as dependêndencias.

- Quando a instalação terminar, copie o arquivo .env.example no mesmo diretorio com o nome .env

- Após copiar, execute o comando: <code>adonis serve --dev</code>. Logo após isso sua aplicaço deverá estar funcionando no endereço: <code>http://127.0.0.1:9987</code>

- Após finalizado criaremos uma estrutura composta por:

- Três rotas (/all,/create,/:id)
- Um Controller com três funções
- Um Model

# Backend: Criando as rotas

Acesse o arquivo: <code>backend/start/routes.js</code>
Abaixo da rota padrão: <i>welcome</i> crie um grupo com prefixo: <code>api/v1</code> contendo as seguintes rotas:

```javascript
Route.group(() => {
  Route.get("customer/all", "CustomerController.all");
  Route.post("customer/create", "CustomerController.create");
  Route.get("customer/:id", "CustomerController.find");
}).prefix("api/v1");
```

- Após a configuração das rotas precisamos desligar a proteção nativa CSRF TOKEN apenas para rotas em API. Para isso, acesse: <code>config/shield.js</code> e altere a chave <b>filterUris</b> para <code>filterUris: ['/api/(.*)']</code>

# Backend: Criando o controller

Pelo seu terminal, dentro da pasta: <code>backend</code> digite o seguinte comando:
<code>adonis make:controller CustomerController</code>
Em seguida, ele pedirá para você selecionar o tipo do controller: HTTP ou Websocket. <b>Selecione HTTP</b>.
Após isso você verá que um novo arquivo (CustomerController.js) foi criado na pasta: <code>backend/app/Controllers</code>

# Backend: Criando nosso model

Pelo seu terminal, dentro da pasta: <code>backend</code> digite o seguinte comando:
<code>adonis make:model Customer</code>
Após isso você verá que um novo arquivo (Customer.js) foi criado na pasta: <code>backend/Models</code>

# Backend: Criando as funções

Com o <code>CustomerController.js</code> criado, vamos começar a trabalhar nele.
Primeiro devemos importar o nosso model para que possamos acessar os recursos do nosso banco de dados, vamos lá?

Na segunda linha do arquivo, inclua a instrução: <code>const CustomerModel = use('App/Models/Customer');</code>

Agora, vamos criar a primeira função para recuperar todos os registros da base:

```javascript
async all({ request, response }) {
    let status = 200;
    let customers = await CustomerModel.all();
    if (!customers) {
      status = 404;
      customers = [];
    }

    return response.status(status).json(customers);
  }
```

Segunda função para incluir um novo registro:

```javascript
async create({ request, response }) {
    let status = 200;
    const params = request.only(["name", "email", "gender"]);
    const customer = await CustomerModel.create(params);
    return response.status(status).json(customer);
  }
```

Terceira função para encontrar um registro pelo seu ID:

```javascript
async find({ params, response }) {
    let status = 200;
    let customer = [];
    if (!params.id) {
      status = 400;
      customer = "Você deve fornecer um ID para buscar.";
    } else {
      customer = await CustomerModel.find(params.id);

      if (!customer) {
        status = 404;
        customer = "Nenhum registro encontrado.";
      }
    }

    return response.status(status).json(customer);
  }
```

Seu arquivo <code>CustomerController.js</code> deverá estar assim:

```javascript
"use strict";

const CustomerModel = use("App/Models/Customer");

class CustomerController {
  async all({ request, response }) {
    let status = 200;
    let customers = await CustomerModel.all();
    if (!customers) {
      status = 404;
      customers = [];
    }

    return response.status(status).json(customers);
  }

  async create({ request, response }) {
    let status = 200;
    const params = request.only(["name", "email", "gender"]);
    const customer = await CustomerModel.create(params);
    return response.status(status).json(customer);
  }

  async find({ params, response }) {
    let status = 200;
    let customer = [];
    if (!params.id) {
      status = 400;
      customer = "Você deve fornecer um ID para buscar.";
    } else {
      customer = await CustomerModel.find(params.id);

      if (!customer) {
        status = 404;
        customer = "Nenhum registro encontrado.";
      }
    }

    return response.status(status).json(customer);
  }
}

module.exports = CustomerController;
```

## Pronto! Nosso backend (API) está pronto para criar e fornecer os dados para o frontend.

- Entrega todos os registros
  <code>GET: http://127.0.0.1:9987/api/v1/customer/all</code>

- Cria um novo registro
  <code>POST: http://127.0.0.1:9987/api/v1/customer/create</code>

- Retorna um único registro
  <code>GET: http://127.0.0.1:9987/api/v1/customer/(ID)</code>
