# Projeto de E-Commerce em Express.js

Este é um projeto de e-commerce desenvolvido em Express.js seguindo o padrão MVC (Model-View-Controller) e utilizando o mecanismo de visualização EJS (Embedded JavaScript). O objetivo principal deste projeto foi explorar os conceitos básicos de Node.js e suas possibilidades no desenvolvimento de aplicações web.

## Funcionalidades

O projeto de e-commerce inclui as seguintes funcionalidades:

- **Página de Produtos**: Permite a visualização e adição de determinado produto no carrinho
- **Cadastro de Produtos**: Permite o cadastro e exibição de produtos disponíveis para compra.
- **Página de Detalhes do Produto**: Exibe detalhes individuais de cada produto.
- **Carrinho de Compras**: O carrinho de compras é mostrado na página de pedidos (orders), onde os usuários podem adicionar produtos e finalizar a compra.
- **Administração de Produtos**: Existe uma área de administração onde é possível editar ou deletar um produto.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construir aplicações JavaScript do lado do servidor.
- **Express.js**: Utilizado como framework web para Node.js.
- **Express Router**: Utilizado para definir as rotas da aplicação.
- **Middlewares**: Utilizados para lidar com as requisições HTTP, como o body-parser para analisar o corpo das requisições.
- **EJS (Embedded JavaScript)**: Mecanismo de visualização para renderizar as páginas HTML.
- **Sequelize e Mongoose**: Sequelize foi utilizado inicialmente como ORM (Object-Relational Mapping) para o banco de dados SQL, mas posteriormente Mongoose o substituiu como banco de dados NoSQL MongoDB.

## Estrutura do Projeto

O projeto segue uma estrutura de diretórios padrão do MVC:

- **models/**: Contém os modelos de dados que representam as entidades do sistema.
- **controllers/**: Controladores que lidam com as requisições do cliente e as respostas do servidor.
- **views/**: Arquivos de visualização em EJS que são renderizados pelo servidor.
- **routes/**: Define as rotas da aplicação.

## Configuração do Ambiente

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório: `git clone https://github.com/MatheusStarkX/NodeJs.git`.
3. Navegue até o diretório do projeto: `cd NodeJs`.
4. Instale as dependências: `npm install`.
5. Inicie o servidor: `npm start`.

## Aprendizados

Durante o desenvolvimento deste projeto, os principais aprendizados foram:

- Entendimento dos princípios do desenvolvimento web com Node.js.
- Implementação de operações CRUD (Create, Read, Update, Delete) utilizando Sequelize e Mongoose.
- Organização do código seguindo o padrão MVC para uma melhor manutenção e escalabilidade do projeto.
- Integração de diferentes bancos de dados e compreensão das vantagens e desvantagens de cada um.
- Manipulação de requisições HTTP e renderização de páginas HTML utilizando EJS.

## Autor

Este projeto foi desenvolvido por [Matheus Felipe](https://github.com/MatheusStarkX) baseado no curso [NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)](https://www.udemy.com/course/nodejs-the-complete-guide/?couponCode=KEEPLEARNING) da Udemy.