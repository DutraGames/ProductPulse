import fastify from "fastify";

const app = fastify();
app.get("/hello", async (request, reply) => {
  return { hello: "world" };
});

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:3000`);
});
