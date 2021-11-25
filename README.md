# Desenvolvimento local
1. Clone o repositório e entre na pasta
- `git clone https://github.com/brenno-calado/saudeid-blog-api.git`
- `cd saudeid-blog-api`

2. Certifique-se de que possui o Node instalado, e o mongod está rodando. O padrão do Mongo é rodar na porta 27017

3. Instale as dependências
- `npm i`

4. Adicione um arquivo `.env` na pasta principal do projeto com as variáveis:
- `DB_NAME` com o nome que o banco terá
- `PORT` com o número da porta que o servidor usará. Como este arquivo não é enviado para servidor, a porta é decidida pelo servidor

5. Caso queirar adicionar uma nova feature ou deseja consertar um bug, crie uma branch a partir da `default`
- `git checkout -b feat-error-middleware`

6. Após realizar as alterações da feature, certifique que o código passa no eslint
- `npm run lint`

7. Faça o commit e envie ao repositório remoto
- `git add .`
- `git commit -am "um bom comentário para posteriormente encontrar a alteração com facilidade."`
- `git push origin {nome-da-branch}`

