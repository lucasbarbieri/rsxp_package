# RocketSeat Experience
Exercício de migração para NodeJS e ReactJs

Fala Dev! Tudo bem? Vamos começar nosso exercício e para isso você precisará ter instalado na sua maquina o NODE.

1) Acesse o site do NodeJs e NPM e instale:
https://www.npmjs.com/get-npm
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
Abaixo da rota <i>welcome</i> crie as seguintes novas rotas: 

<code>Route.get("api/v1/customer/all", "CustomerController.all");</code>

<code>Route.post("api/v1/customer/create", "CustomerController.create");</code>

<code>Route.get("api/v1/customer/:id", "CustomerController.find");</code>

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

# Backend: Criando as funções

Com o <code>CustomerController.js</code> criado, vamos começar a trabalhar nele.
Primeiro devemos importar o nosso model para que possamos acessar os recursos do nosso banco de dados, vamos lá:
Na segunda linha do arquivo, inclua a instrução: <code>const CustomerModel = use('App/Models/Customer');</code>

Agora, vamos criar a primeira função para recuperar todos os registros da base:

