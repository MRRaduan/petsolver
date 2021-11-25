import { rest } from "msw";
import userCreate from "./json/userCreate.json";
import users from "./json/users.json";
import AllProdutoServico from "./json/AllProdutoServico.json";
import AllProdutos from "./json/allProdutos.json";
import AllServicos from "./json/allServicos.json";

const prefix =
  "https://i7axlovbcb.execute-api.us-east-1.amazonaws.com/dev/petsolver";

export const handlers = [
  rest.post(`${prefix}/user`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(userCreate),
      ctx.delay(2000)
    );
  }),
  rest.get(`${prefix}/user`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(users),
      ctx.delay(2000)
    );
  }),
  rest.delete(`${prefix}/user/:userId`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.delay(2000)
    );
  }),
  rest.get(`${prefix}/produtoservico/tipo?tipo=servico`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(AllServicos),
      ctx.delay(2000)
    );
  }),
  rest.get(`${prefix}/produtoservico/tipo?tipo=produto`, (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(AllProdutos),
      ctx.delay(2000)
    );
  }),
];
