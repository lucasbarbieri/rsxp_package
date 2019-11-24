# RocketSeat Experience
Exercício de migração para NodeJS e ReactJs

Fala Dev! Tudo bem? Vamos começar nosso exercício e para isso você precisará ter instalado na sua maquina o NODE.

1) Vamos instalar algumas dependências antes de iniciar
<code>https://www.npmjs.com/get-npm</code>
Dentro da pasta <code>backend</code> execute: <code>npm install mysql --save</code>
* Se preferir, você também pode instalar pelo seu gerenciador de pacotes.

2) Você vai notar que dentro deste pacote existem duas pastas:
- Backend
- Frontend

# Backend
O backend possui uma instalação do <b>AdonisJs</b> (Framework Node: https://adonisjs.com/)

# Frontend
A pasta frontend possui uma aplicação pura em <b>ReactJs</b>

# Vamos iniciar pelo backend, deixando nossa API pronta para entregar dados ao nosso frontend:

- Dentro da pasta backend, execute o comando <code>npm install</code> para instalar as dependêndencias.

- Após finalizado, execute o comando: <code>adonis serve --dev</code>. Logo após isso sua aplicaço deverá estar funcionando no endereço: <code>http://127.0.0.1:9987</code>

- Após finalizado criaremos uma estrutura composta por: 

- Três rotas (/get,/put,/:id)
- Um Controller com três funções
- Um Model

# Backend: Criando as rotas

Acesse o arquivo: <code>backend/start/routes.js</code>
Abaixo da rota padrão: <i>welcome</i> crie um grupo com prefixo: <code>api/v1</code> contendo as seguintes rotas:
```javascript
Route.group(() => {
  Route.get("customer/all", "CustomerController.get");
  Route.post("customer/create", "CustomerController.create");
  Route.get("customer/:id", "CustomerController.find");
}).prefix("api/v1");
```

# Backend: Criando o controller

Pelo seu terminal, dentro da pasta: <code>backend</code> digite o seguinte comando:
<code>adonis make:controller CustomerController</code>
Em seguida, ele pedirá para você selecionar o tipo do controller: HTTP ou Websockt. <b>Selecione HTTP</b>. 
Após isso você verá que um novo arquivo (CustomerController.js) foi criado na pasta: <code>backend/Controllers</code>

# Backend: Criando nosso model
Pelo seu terminal, dentro da pasta: <code>backend</code> digite o seguinte comando:
<code>adonis make:model Customer</code>
Após isso você verá que um novo arquivo (Customer.js) foi criado na pasta: <code>backend/Models</code>
Dentro da declaração da classe, você incluirá as seguintes instruções:

Sobrescrever o nome da tabela padrão:
<code>protected $table = 'customers';</code>

Campos que poderão ser incluídos de forma ágil na criação de um modelo:
<code>protected $fillable = ['name','email','gender'];</code>

```javascript
class Customer extends Model {
  protected $table = 'customers';
  protected $fillable = ['name','email','gender'];
}
```

# Backend: Criando as funções

Com o <code>CustomerController.js</code> criado, vamos começar a trabalhar nele.
Primeiro devemos importar o nosso model para que possamos acessar os recursos do nosso banco de dados, vamos lá:

Na segunda linha do arquivo, inclua a instrução: <code>const CustomerModel = use('App/Models/Customer');</code>

Agora, vamos criar a primeira função para recuperar todos os registros da base:
```javascript
async all({ request, response }) {
  const customers = await CustomerModel.all();
  return response.status(200).json(customers);
}
```

Segunda função para incluir um novo registro:
```javascript
async create({ request, response }) {
  const params = request.only(["name", "email", "gender"]);
  const customers = await CustomerModel.create(params);
  return response.status(200).json(customers);
}
```

Terceira função para encontrar um registro pelo seu ID:
```javascript
async find({ request, response }) {
  if (!request.id) {
    return response.status(400).json("Você deve informar o ID para buscar.");
  }
  const customer = await CustomerModel.find(request.id);
  return response.status(200).json(customer);
}
```

Seu arquivo <code>CustomerController.js</code> deverá estar assim:
```javascript
"use strict";

const CustomerModel = use("App/Models/Customer");

class CustomerController {
  async all({ request, response }) {
    const customers = await CustomerModel.all();
    return response.status(200).json(customers);
  }

  async create({ request, response }) {
    const params = request.only(["name", "email", "gender"]);
    const customers = await CustomerModel.create(params);
    return response.status(200).json(customers);
  }

  async find({ request, response }) {
    if (!request.id) {
      return response.status(400).json("Você deve informar o ID para buscar.");
    }
    const customer = await CustomerModel.find(request.id);
    return response.status(200).json(customer);
  }
}

module.exports = CustomerController;

```


