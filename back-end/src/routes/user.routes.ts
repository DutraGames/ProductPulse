import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ICreateUserDTO } from "../interfaces/user.interface";
import { UserUseCase } from "../usecases/user.usecase";

export async function userRoutes(app: FastifyInstance) {
  app.post("/", async (req: FastifyRequest, reply: FastifyReply) => {
    try {
      const userUseCase = new UserUseCase();
      const { name, email, password } = req.body as ICreateUserDTO;

      const user = await userUseCase.create({ name, email, password });
      return reply.status(201).send(user);
    } catch (err) {
      return reply.status(500).send();
    }
  });
}
