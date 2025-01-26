import fastify from "fastify";
import { randomUUID } from "node:crypto";
import { knex } from "./database";
import { env } from "./env";

const app = fastify();

app.get("/hello", async () => {
  const transaction = await knex("transactions")
    .insert({
      id: randomUUID(),
      title: "Transacao de teste",
      amount: 1000,
    })
    .returning("*");

  return transaction[0];
});

app.get("/gethello", async () => {
  const transactions = await knex("transactions").select("*");

  return transactions;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running!");
  });
