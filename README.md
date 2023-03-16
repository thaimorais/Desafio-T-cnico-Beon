# Boas-vindas ao repositório do desafio técnico

Aplicação desenvolvida para realização do desafio técnico.

# Sobre o projeto

<details>
  <summary><strong>👨‍💻  O que foi desenvolvido</strong></summary>

  Consiste em uma aplicação Front-end renderizando tabela com livros e seus respectivos atributos e informações,
  com dados consumidos do Back-end.

  <br>
  <summary><strong>👉 Quais as funcionalidades</strong></summary>
  
  - Filtrar os livros por autor, título ou idioma;
  - Filtrar os livros por período em ano;
  - Limpar os filtros;
  - Tabela feita com paginação, mostrando até 10 livros por página.

  <br>
</details>

# Instruções de instalação

<details>
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
  A aplicação Back-end rodará na porta 3006;
  A aplicação Front-end rodará na porta 3000;

  - <strong>Certifique-se de que estas portas não estejam em uso para que não haja conflito.</strong>

  <br>

  <summary><strong>👉 Passo 3, popule o banco de dados:</strong></summary>

  - Na pasta Back-end, execute o comando:
   ```mongoimport -d book -c books --file db.json```

  <br>
</details>

# Executando a aplicação

<details>
  <summary><strong>👉 Back-end:</strong></summary>

  - Na pasta Back-end, execute o comando:
   ```npm run dev``` ou ```npm start```

  Deverá aparecer a mensagem 'Running server on port: 3006'.
  
  É recomendado utilizar o comando npm run dev executará o nodemon, que ficará ativo e atualizará caso seja feita alterações nos arquivos.

  <br>
  <summary><strong>👉 Front-end:</strong></summary>

  - Na pasta Front-end, execute o comando:
   ```npm start```
  
  O comando abrirá uma aba no seu navegador exibindo a aplicação. O Back-end deverá estar executando corretamente
  para que sejam renderizados os livros.

  <br>
  <summary><strong>👉 Testes:</strong></summary>

  A aplicação possui teste unitário da camada service. Para executá-lo, na pasta Back-end, execute:

   ```npm run test tests/unit/BookService,test.ts```

  <br>
</details>