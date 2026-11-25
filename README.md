Samara Joias — Catálogo e API

Projeto acadêmico de catálogo virtual da Samara Joias, desenvolvido com
HTML, CSS, JavaScript e Node.js/Express.

A aplicação disponibiliza um catálogo de produtos e uma API REST para
cadastro, login, gerenciamento do carrinho e finalização de compras.

Funcionalidades implementadas

* Listagem de produtos com preço e estoque.
* Pesquisa de produtos no catálogo.
* Cadastro de usuários.
* Login de usuários.
* Adição e consulta de produtos no carrinho.
* Remoção de produtos do carrinho.
* Validação da quantidade solicitada conforme o estoque disponível.
* Finalização da compra com PIX, cartão de crédito ou dinheiro.
* Desconto de 10% para pagamento em dinheiro.
* Redução do estoque após a finalização da compra.
* Acúmulo do valor das compras por usuário.
* Concessão do status VIP quando o total acumulado de compras atinge
R$ 300,00.
* Frete grátis para clientes VIP.
* Frete de R$ 20,00 para clientes que ainda não são VIP.
* Consulta dos pedidos de um usuário.

Tecnologias utilizadas

* Node.js
* Express
* MongoDB Memory Server
* MongoDB
* HTML
* CSS
* JavaScript
* Swagger / OpenAPI
* YAML

Jest e Supertest estão presentes como dependências de desenvolvimento.

Como instalar

É necessário ter o Node.js instalado.

1. Faça o download ou clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Abra o terminal.
4. Execute:

npm install

Como executar

Para iniciar a aplicação, execute:

npm start

A aplicação utiliza a porta 3000.

Acesse o catálogo pelo navegador:

http://localhost:3000

Documentação da API

A documentação Swagger está disponível nos seguintes endereços:

* Interface Swagger: http://localhost:3000/api-docs
* Arquivo YAML: http://localhost:3000/swagger.yaml

Endpoints disponíveis

────────

Método                  Rota                                Descrição

────────

POST                    /cadastro                         Cadastra um usuário.

POST                    /login                            Realiza o login.

GET                     /produtos                         Lista os produtos.

POST                    /carrinho                         Adiciona um produto ao
carrinho.

GET                     /carrinho/:usuarioId              Consulta o carrinho de
um usuário.

DELETE                  /carrinho/:usuarioId/:produtoId   Remove um produto do
carrinho.

POST                    /finalizar-compra                 Finaliza a compra.

GET                     /pedidos/:usuarioId               Consulta os pedidos de um usuário.

Exemplos de requisições

Adicionar produto ao carrinho

{
  "usuarioId": 1,
  "produtoId": 1,
  "quantidade": 1
}

Finalizar compra

{
  "usuarioId": 1,
  "pagamento": "PIX"
}

Formas de pagamento aceitas: PIX, Cartão de crédito e Dinheiro.

Regras de negócio

1. Não é permitido adicionar ao carrinho uma quantidade maior que o
estoque disponível.
2. O pagamento em dinheiro concede 10% de desconto sobre o subtotal dos
produtos.
3. O cliente se torna VIP ao acumular R$ 300,00 ou mais em compras.
4. Clientes VIP têm direito a frete grátis.
5. Clientes que ainda não são VIP pagam R$ 20,00 de frete.
6. O estoque é atualizado quando a compra é finalizada com sucesso.

Banco de dados e armazenamento

A aplicação utiliza o MongoDB em memória por meio da biblioteca
mongodb-memory-server.

Os dados são armazenados temporariamente e não são mantidos após o
encerramento do servidor.

Estrutura do projeto

Samara-Joias-API/
├── app.js
├── database.js
├── package.json
├── package-lock.json
├── swagger.yaml
├── README.md
├── .gitignore
├── public/
│   └── arquivos do catálogo
└── tests/
    └── produtos.test.js

## Testes

Foram realizados 47 cenários de testes manuais, contemplando as funcionalidades e regras de negócio da aplicação.

Também foi executado um teste automatizado utilizando Jest.

*Resultado do teste automatizado:*
- Suítes aprovadas: 1
- Testes aprovados: 1
- Testes com falha: 0

O teste automatizado está localizado em tests/produtos.test.js.

A documentação dos testes manuais e automatizados está na pasta documentacao-testes.