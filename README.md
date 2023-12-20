# Talker Manager

Bem-vindo ao repositório do projeto Talker Manager. 👨‍💻 Este projeto consiste na construção de uma aplicação de cadastro de palestrantes, oferecendo funcionalidades como cadastro, visualização, pesquisa, edição e exclusão de informações. Abaixo estão os requisitos e detalhes de implementação:

## Requisitos Obrigatórios

1. **Endpoint GET /talker:**
   - Retorna status 200 e um array com todas as pessoas palestrantes cadastradas.
   - Se não houver palestrantes cadastrados, retorna status 200 e um array vazio.

2. **Endpoint GET /talker/:id:**
   - Retorna status 200 e uma pessoa palestrante com base no ID da rota.
   - Se não for encontrada uma pessoa palestrante com base no ID da rota, retorna status 404.

3. **Endpoint POST /login:**
   - Recebe os campos email e password no corpo da requisição.
   - Retorna um token aleatório de 16 caracteres.

4. **Validações para o endpoint /login:**
   - Valida os campos recebidos.
   - Retorna status 400 com a mensagem de erro correspondente, caso os valores sejam inválidos.

5. **Endpoint POST /talker:**
   - Cria uma nova pessoa palestrante.

6. **Endpoint PUT /talker/:id:**
   - Atualiza informações de uma pessoa palestrante com base no ID.

7. **Endpoint DELETE /talker/:id:**
   - Exclui uma pessoa palestrante com base no ID.

8. **Endpoint GET /talker/search e parâmetro de consulta q=searchTerm:**
   - Retorna palestrantes que correspondem ao termo de pesquisa.

## Requisitos Bônus

9. **Endpoint GET /talker/search e parâmetro de consulta rate=rateNumber:**
   - Retorna palestrantes com base na avaliação (rate) especificada.

10. **Endpoint GET /talker/search e parâmetro de consulta date=watchedDate:**
    - Retorna palestrantes com base na data de visualização (watchedDate) especificada.

11. **Endpoint PATCH /talker/rate/:id:**
    - Atualiza a avaliação de uma pessoa palestrante com base no ID.

12. **Endpoint GET /talker/db:**
    - Retorna a lista de pessoas palestrantes do banco de dados MySQL.

   ### Sobre o banco de dados MySQL:
   - Crie uma conexão com o banco e recupere a lista de palestrantes da DB.
   - Retorna status 200 e um array com todas as pessoas palestrantes cadastradas.
   - Se não houver palestrantes cadastrados, retorna status 200 e um array vazio.
   - Atualiza os dados do banco de dados conforme as alterações.

---

## Habilidades Técnicas:

- **Linguagens:**
  - JavaScript
  - Node.js

- **Tecnologias:**
  - Express.js
  - MySQL (para o requisito bônus 12)

- **Ferramentas:**
  - fs (para o requisito 2)
  - Outras ferramentas conforme necessário

- **Outros:**
  - Middlewares e Router Middleware do Express
  - Manipulação de dados em formato JSON
  - Lógica de CRUD (Create, Read, Update, Delete)
  - Validação de dados no backend
