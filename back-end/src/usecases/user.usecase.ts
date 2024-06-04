import { IUserRepository, ICreateUserDTO } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/user.repository";

export class UserUseCase {
  private userRepository: IUserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async create({ name, email, password }: ICreateUserDTO) {
    const user = await this.userRepository.create({ name, email, password });
    return user;
  }
}
