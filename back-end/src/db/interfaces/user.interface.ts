export interface IUserRepository {
  create(data: ICreateUserDTO): Promise<IUserDTO>;
}

export interface ICreateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserDTO {
  id: String;
  name: String;
  email: String;
  password: String;
  role: String;
  createdAt: Date;
  updatedAt: Date;
}
