import { Repository } from "typeorm";
import { IToken, TLoginSchema } from "../interfaces/login";
import Client from "../entities/clients";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken"
import "dotenv/config"

const loginService = async (data: TLoginSchema): Promise<IToken> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client: Client | null = await clientRepository.findOneBy({
    email: data.email
  })

  if (!client) {
    throw new AppError("Invalid credentials", 401)
  }

  const passwordMatch = await compare(data.password, client.password)

  if (!passwordMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  const token = jwt.sign(
    {
      id: client.id
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(client.id),
    }
  );

  return { token }
}

export default loginService