import fastify from "fastify";
import cors from "@fastify/cors";
import { userRoutes } from "./routes/user.routes";

const app = fastify();

app.register(cors);

app.get("/hello", async (request, reply) => {
  return { hello: "world" };
});

app.register(userRoutes, { prefix: "/users" });

app.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at http://localhost:3000`);
});
