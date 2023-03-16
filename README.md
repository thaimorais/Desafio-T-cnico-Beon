# Boas-vindas ao repositório do desafio técnico
https://user-images.githubusercontent.com/102544688/225543740-8d4b6030-76c8-486a-9581-8cfa7952011e.mp4

<br>
Aplicação desenvolvida para realização do desafio técnico.

# Sobre o projeto

<details>
  <summary><strong>👨‍💻  O que foi desenvolvido</strong></summary>

  Consiste em uma aplicação Front-end renderizando tabela com livros e seus respectivos atributos e informações,
  com dados consumidos do Back-end.

  <br>
  <summary><strong>👉 Quais as funcionalidades:</strong></summary>
  
  - Filtrar os livros por autor, título ou idioma;
  - Filtrar os livros por período em ano;
  - Limpar os filtros;
  - Tabela feita com paginação, mostrando até 10 livros por página;
  - Mostra a quantidade de livros encontrados.

  <br>

  <summary><strong>👉 Ferramentas utilizadas:</strong></summary>
  
  - Typescript para desenvolvimento do Back-end;
  - React para desenvolvimento do Front-end;
  - Context API para gerenciamento de estado;
  - Redis para armazenamento em cache;
  - Axios para integração do Front-end com o Back-end;
  - Banco de dados NoSQL MongoDB;
  - Express para gerenciar requisições HTTP;
  - Mongoose para modelagem de dados entre MongoDB e Node.js;
  - Chai, Sinon e Jest para teste unitário;
  - Manipulação do CORS para permitir acesso do Front-end à API.

  <br>
</details>

# Instruções de instalação

<details>
  <summary><strong>👨‍💻 Saiba mais:</strong></summary>
  <summary><strong>👉 Passo 1:</strong></summary>

  - Clone o repositório:
   ```git clone git@github.com:thaimorais/Desafio-T-cnico-Beon.git```
  - Na pasta Back-end, instale as dependências:
   ```npm install```
  - Na pasta Front-end, instale as dependências:
   ```npm install```

  <br>

  <summary><strong>👉 Passo 2, portas utilizadas:</strong></summary>
  
  O banco de dados (MongoDB) rodará na porta 27017;
  <br>
  A aplicação Back-end rodará na porta 3006;
  <br>
  A aplicação Front-end rodará na porta 3000;

  - <strong>Certifique-se de que estas portas não estejam em uso para que não haja conflito.</strong>

  <br>

  <summary><strong>👉 Passo 3, popule o banco de dados:</strong></summary>

  - Na pasta Back-end, execute o comando:
   ```mongoimport -d books -c books --file db.json```

  <br>
</details>

# Executando a aplicação

<details>
  <summary><strong>👨‍💻 Saiba mais:</strong></summary>
  <summary><strong>👉 Back-end:</strong></summary>

  - Na pasta Back-end, execute o comando:
   ```npm run dev``` ou ```npm start```

  Deverá aparecer a mensagem 'Running server on port: 3006'.
  
  É recomendado utilizar o comando 'npm run dev' que executará o nodemon. Ele ficará ativo e atualizará caso sejam feitas alterações nos arquivos.

  <br>
  <summary><strong>👉 Front-end:</strong></summary>

  - Na pasta Front-end, execute o comando:
   ```npm start```
  
  O comando abrirá uma aba no seu navegador exibindo a aplicação. O Back-end deverá estar executando corretamente
  para que sejam renderizados os livros.

  <br>
  <summary><strong>👉 Testes:</strong></summary>

  A aplicação possui teste unitário da camada service. Para executá-lo, na pasta Back-end, execute:

   ```npm run test tests/unit/BookService.test.ts```

  <br>
</details>

# Rotas de requisição para o banco de dados

<details>
  <summary><strong>👨‍💻 Saiba mais</strong></summary>

  A aplicação faz requisições ao MongoDB, utilizando o banco de dados Books e a coleção Books, criados e provoados
  anteriormente no item ```instruções de instalação > Passo 3```.

  Para testar essas requisições, utilize o método GET e passe ```http://localhost:3006``` no Postman ou ThunderClient, adicionando a rota que deseja requisitar, sendo elas:

  - ```/books```: retorna status 200 e todos os livros cadastrados no banco de dados;
  - ```/foundbooks```: retorna status 200 e todos os livros encontrados que correspondem ao filtro;

  <strong>Deve ser passado no ```headers``` a chave ```fetchby``` e o valor a ser utilizado na busca (ex.: english).</strong> 
  <br>

  - ```/filterByPeriod```: retorna status 200 e todos os livros encontrados que correspondem ao filtro.

  <strong>Deve ser passado no ```headers``` as chaves ```minimumyear``` e ```maximumyear``` e o valor a ser utilizado na busca (ex.: '1950' e '1980').</strong> 

  <br>
  <summary><strong>👉 Entenda as rotas:</strong></summary>
  
  A rota ```foundbooks``` recebe um valor que seja correspondente ao autor, título ou idioma, faz a comparação com as informações contidas em cada livro e o retorna caso for verdadeiro.

  A rota ```filterByPeriod``` recebe dois valores, sendo eles o ano mínimo e o ano máximo, respectivamente. Faz a comparação com o ano de lançamento de cada livro e o retorna caso este estiver dentro do período filtrado.

  <br>
</details>