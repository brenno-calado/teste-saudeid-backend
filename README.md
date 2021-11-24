# Desenvolvimento local
1. Clone o repositório e entre na pasta
- `git clone https://github.com/brenno-calado/saudeid-blog-api.git`
- `cd saudeid-blog-api`

2. Certifique-se de que possui o Node instalado, e o mongod está rodando. O padrão do Mongo é rodar localmente na porta 27017

3. Instale as dependências
- `npm i`

4. Caso queirar adicionar uma nova feature ou deseja consertar um bug, crie uma branch a partir da `default`
- `git checkout -b feat-error-middleware`

5. Após realizar as alterações da feature, certifique que o código passa no eslint
- `npm run lint`

6. Faça o commit e envie ao repositório remoto
- `git add .`
- `git commit -am "um bom comentário para posteriormente encontrar a alteração com facilidade."`
- `git push origin {nome-da-branch}`

