# RocketSeat Experience

Exercício de migração para NodeJS e ReactJs

Fala Dev! Tudo bem? Vamos começar nosso exercício e para isso você precisará ter instalado na sua maquina o NODE.

1. Você precisa ter o NODE e NPM instalados no seu sistema operacional para continuar

2. Clone este repositório em algum lugar do seu computador

3. Dentro da pasta <code>backend</code> execute: <code>npm install mysql --save</code>

# Vamos iniciar pelo backend, deixando nossa API pronta para entregar dados ao nosso frontend:

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
