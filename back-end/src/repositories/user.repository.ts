import { prisma } from "../db/prismaClient.js";
import {
  ICreateUserDTO,
  IUserDTO,
  IUserRepository,
} from "../interfaces/user.interface.js";
import { genSalt, hash } from "bcrypt";

export class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<IUserDTO | Error> {
    if (await prisma.user.findUnique({ where: { email: data.email } })) {
      return new Error("User already exists");
    }

    const salt = await genSalt(10);
    const passwordHash = await hash(data.password, salt);

    const results = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
        role: "USER",
      },
    });

    return results;
  }
}
