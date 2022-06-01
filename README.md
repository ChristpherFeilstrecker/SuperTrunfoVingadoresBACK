<h1 align="center" id="top">Super Trunfo Marvel (API): <img src="https://www.casasbahia-imagens.com.br/html/conteudo-produto/833/1684666/imagens/os-vingadores-filme-1.jpg" width="100"></h1>

<p align="center">
  <a href="#sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#documentacao">Documentação</a> &#xa0; | &#xa0;
  <a href="#heroku">Deploy</a> &#xa0; | &#xa0;
  <a href="#desenvolvedor">Desenvolvedor</a> | &#xa0;
<a href="#tecnologias">Tecnologias</a> &#xa0; | &#xa0;
<a href="#funcionalidades">Funcionalidades</a> &#xa0; | &#xa0;
<a href="#comousar">Como Testar esta API</a>

</p>
 <br />
 <h2 id="sobre"> Sobre </h2>


<br />
Super Trunfo Marvel, API desenvolvida para jogo super trunfo modelo heróis da Marvel.

<br />

 <h2 id="documentacao"> Documentação API: </h2>


<table>
  <tr>

   Acesse o postman aqui 👉 [ <img src="https://i.pinimg.com/originals/e0/fe/cc/e0fecc7bff04bea3213fca2350289e03.gif" width="70" align="center"> ](https://documenter.getpostman.com/view/18385085/UVyvuuDy)

       
</table>
 
 <h2 id="heroku"> Deploy (Heroku): </h2>

 https://supertrunfomarvel.herokuapp.com/

<br />

 <h2 id="desenvolvedor"> Desenvolvedor 🤖 </h2>


<table>
  <tr>
  <td align="center"><a href="https://github.com/ChristpherFeilstrecker">
   <sub><h2>Christopher Feilstrecker da Silva</h2> </sub> 
       
</table>
<br />

 <h2 id="tecnologias"> Tecnologias utilizadas: 🖥️ </h2>


<br />

- Typescript
- Node
- SQL
- MySQL
- Express
- Cors
- Dotenv
- Knex
- React
- Axios
- UUID
- Bcrypt
- Hash
- json
- jest

<br />

<h2 id="funcionalidades"> Funcionalidades: </h2>


<br />

* Retorna todos cards;
* Mistura e retorna a lista em 2 partes (cards jogador, cards PC)

<br />


 <h2 id="comousar"> Como usar </h2>

<br />
Teste o código pelo postman seguindo a documentação <a href="#documentacao">AQUI</a> ou pelo seu computador assim:
- Clone o código para seu computador.
-  Junto dos arquivos clonados crie outro arquivo com nome .env (para acessar seu banco de dados).
  
   Ex.: 
   
        DB_USER = seu_usuario
  
        DB_PASSWORD = sua_senha
  
        DB_HOST = seu_host
  
        DB_PORT = sua_posrt
  
        DB_DATABASE_NAME = nome_database
  
- Dentro da pasta clonada, execute no terminal os comandos:

->  ```npm install``` (para instalar as dependencias).

->  ```npm migrations``` (para criar a polular tabela).


-> ```npm run dev```  ou ```npm run start``` (para rodar o servidor e utilizar os endpoints).

- Utilize o postman ou programa de sua preferencia trocando o link pelo seu localhost mantendo os endpoints, seguindo  documentação do postman <a href="#documentacao">AQUI</a>.
- Exemplo:

de: https://supertrunfomarvel-api.herokuapp.com/pokemons/all

para: http://localhost:3003/supertrunfomarvel/start

 <br />
 <br />

<div align="center"><a href="#top">Voltar para o topo</a></div>