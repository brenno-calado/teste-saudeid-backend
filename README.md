<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/brenno-calado/teste-saudeid-backend">
    <img src="images/saudeid.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">SaúdeiD Blog API</h3>

  <p align="center">
    API de Blogs com tabela de posts, autores e categorias. Projeto realizado utilizando TDD com Node.js e MongoDB.
    <br />
    <a href="https://documenter.getpostman.com/view/16367914/UVJbHxpK"><strong>Explore a documentação no postman</strong></a>
    <br />
    <br />
    <a href="https://github.com/brenno-calado/teste-saudeid-backend/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/brenno-calado/teste-saudeid-backend/issues">Solicitar uma Feature</a>
  </p>
</div>



<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre">Sobre</a>
      <ul>
        <li><a href="#feito-com">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#inicializando">Inicializando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalando">Instalando</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contribuindo">Contribuindo</a></li>
  </ol>
</details>



### Feito com

* [Jest](https://jestjs.io/)
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* Amor :purple_heart:


<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- Inicializando -->
## Inicializando

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Pré-requisitos

Certifique-se de que possui o Node e o npm instalado:

```sh
sudo apt install nodejs
```

```sh
sudo apt install npm
```

Certifique-se de que possui o [Mongod](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/#using-deb-packages-recommended) instalado e rodando:

```sh
sudo apt systemctl start mongod
```


### Instalando

1. Clone o repositório e entre na pasta
  ```sh
  git clone git@github.com:brenno-calado/teste-saudeid-backend.git
  cd saudeid-blog-api
  ```

3. Instale as dependências com npm
  ```sh
  npm install
  ```

4. Adicione um arquivo `.env` na pasta principal do projeto com as variáveis:
- `HOST`: página onde está localizado o servidor. Ex.: `http://localhost:`
- `PORT`: Porta do servidor. Ex.: `3000`
- `MONGO_PORT`: Porta onde o MongoDB está rodando. Usualmente ela se localiza na porta `27017`
- `MONGO_HOST`: URL do seu banco de dados. Ex.: `mongodb://localhost:`
- `DB_NAME`: com o nome que o banco terá. Ex.: `SaudeidBlog`
- `NODE_ENV`: Decide se o Node inicializará em modo de teste, desenvolvimento, produção ou homologação, por exemplo.



<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] POST /post
- [x] GET /post
- [x] GET /post/:id
- [x] PUT /post/:id
- [x] DELETE /post/:id
- [] 100% Coverage test
- [] Postman Documentation
- [] Postman Server Mock

Veja as [issues abertas](https://github.com/brenno-calado/teste-saudeid-backend/issues) Para uma lista completa das features a serem implementadas e bugs detectados.

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- Contribuindo -->
## Contribuindo

Sinta-se à vontade para aprimorar esta API. A comunidade open-source é feita para aprender, inspirar os demais e criar soluções!

Se você tem alguma sugestão para aprimorar, refatorar ou consertar um bug, siga os passos a seguir:

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Crie uma nova branch de nome descritivo
  ```sh
    git checkout -b feat-multer-upload
  ```
2. Certifique-se de que o código passa no eslint
  ```sh
    npm run lint
  ```
3. Realize commits, de preferência commits que englobem uma alteração completa
  ```sh
    git commit -am "add multer upload controller"
  ```
4. Suba as alterações para o repositório
  ```sh
    git push origin feat-multer-upload
  ```
5. Abra um Pull Request
6. Adicione uma tag que descreva a sua contribuição, como "bug fix" ou "enhancement"

<p align="right">(<a href="#top">voltar ao topo</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/brenno-calado/teste-saudeid-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/brenno-calado/teste-saudeid-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/brenno-calado/teste-saudeid-backend.svg?style=for-the-badge
[forks-url]: https://github.com/brenno-calado/teste-saudeid-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/brenno-calado/teste-saudeid-backend.svg?style=for-the-badge
[stars-url]: https://github.com/brenno-calado/teste-saudeid-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/brenno-calado/teste-saudeid-backend.svg?style=for-the-badge
[issues-url]: https://github.com/brenno-calado/teste-saudeid-backend/issues
[license-shield]: https://img.shields.io/github/license/brenno-calado/teste-saudeid-backend.svg?style=for-the-badge
[license-url]: https://github.com/brenno-calado/teste-saudeid-backend/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/brenno-calado-vieira-de-melo-nascimento
[product-screenshot]: images/screenshot.png

