export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserDTO | Error>;
  findByEmail(email: string): Promise<IUserDTO | null>;
}

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUserDTO {
  id: String;
  name: String;
  email: String;
  role: String;
  createdAt: Date;
  updatedAt: Date;
}
