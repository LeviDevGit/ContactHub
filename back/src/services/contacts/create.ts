import { Repository } from "typeorm";
import { TClientSchemaRes } from "../../interfaces/clients";
import { TContactSchema, TContactSchemaReq } from "../../interfaces/contacts";
import Contact from "../../entities/contacts";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/clients";
import { AppError } from "../../error";
import { contactSchema } from "../../schemas/contacts";

const createService = async (
  clientId: number,
  data: TContactSchemaReq
): Promise<TClientSchemaRes> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!client) {
    throw new AppError("Client not found", 404);
  }

  const contact: Contact = contactRepository.create({
    client: client,
    fullName: data.fullName,
    email: data.email,
    telephone: data.telephone,
    profileImage: data.profileImage,
  });

  await contactRepository.save(contact);

  const returnData: TContactSchema = contactSchema.parse(contact);

  return returnData;
};

export default createService;
