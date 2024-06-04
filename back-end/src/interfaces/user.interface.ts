export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserDTO>;
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
