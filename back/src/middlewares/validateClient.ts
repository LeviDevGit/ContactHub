import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import Client from "../entities/clients";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const validateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = parseInt(req.params.id);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: id,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  return next();
};

export default validateClient;
