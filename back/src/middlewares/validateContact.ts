import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import Contact from "../entities/contacts";

const validateContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: number = parseInt(req.params.id);

  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact | null = await contactRepository.findOneBy({
    id: id,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};

export default validateContact;
