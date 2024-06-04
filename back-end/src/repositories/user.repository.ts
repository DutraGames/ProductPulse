import { prisma } from "../db/prismaClient.js";
import {
  ICreateUserDTO,
  IUserDTO,
  IUserRepository,
} from "../interfaces/user.interface.js";

export class UserRepository implements IUserRepository {
  async create(data: ICreateUserDTO): Promise<IUserDTO> {
    const results = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: "USER",
      },
    });

    return results;
  }
}
