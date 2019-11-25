# RocketSeat Experience

Exercício de migração para NodeJS e ReactJs

Fala Dev! Tudo bem? Vamos começar nosso exercício:

1. Você precisa ter o NODE e NPM instalados no seu sistema operacional para continuar

2. Faça download deste repositório em algum lugar do seu computador

3. Dentro da pasta <code>backend</code> execute: <code>npm install mysql --save</code>

# Vamos configurar nosso backend

- Dentro da pasta backend, execute o comando <code>npm install</code> para instalar as dependêndencias.

- Quando a instalação terminar, copie o arquivo .env.example no mesmo diretorio com o nome .env

- Após copiar, execute o comando: <code>adonis serve --dev</code>. Logo após isso sua aplicaço deverá estar funcionando no endereço: <code>http://127.0.0.1:9987</code>

## Pronto! Nosso backend (API) está pronto para criar e fornecer os dados para o frontend.

- Entrega todos os registros
  <code>GET: http://127.0.0.1:9987/api/v1/customer/all</code>

- Cria um novo registro
  <code>POST: http://127.0.0.1:9987/api/v1/customer/create</code>

- Retorna um único registro
  <code>GET: http://127.0.0.1:9987/api/v1/customer/(ID)</code>

  # Vamos configurar nosso frontend

  Para iniciar o frontend você deve acessar a pasta <code>frontend</code> e executar o comando: <code>npm install</code> para instalar as dependências do projeto.

  Feito isso, rode então o comando <code>npm start</code> e o serviço deverá abrir automaticamente no seu navegador padrão. Caso isso não aconteça você pode copiar a URL exibida no seu terminal e usa-la no seu navegador.

  # Banco de dados

  Deixei um banco de dados previamente criado. Neste banco existe apenas uma tabela customer. Nesse banco você poderá criar uma nova tabela e replicar uma situação do seu dia a dia com um projeto ou linguagem que gostaria de migrar para NODE e REACTJS.

  HOST: <code>mysql11-farm76.kinghost.net</code>
  USER: <code>incentivar01</code>
  PASS: <code>rocketseatXP9</code>
  DB: <code>incentivar01</code>

  \*\* Caso deseje utilizar um banco de sua preferência, fique a vontade!
