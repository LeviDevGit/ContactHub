import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import Client from "../entities/clients";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const email = req.params.email;

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    email: email,
  });

  if (client) {
    throw new AppError("Email already registered!", 409);
  }

  return next();
};

export default validateEmail;
