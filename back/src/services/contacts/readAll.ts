import { Repository } from "typeorm";
import { TContactsSchema } from "../../interfaces/contacts";
import Contact from "../../entities/contacts";
import { AppDataSource } from "../../data-source";
import { contactsSchema } from "../../schemas/contacts";

const readAllService = async (clientId: number): Promise<any> => {
  const contactRepository: Repository<Contact> =
    AppDataSource.getRepository(Contact);

  const contact: Contact[] = await contactRepository.findBy({
    client: {
      id: clientId,
    },
  });

  const returnData: TContactsSchema = contactsSchema.parse(contact);

  const returnCreated = {
    clientId: clientId,
    contacts: returnData,
  };

  return returnCreated;
};

export default readAllService;
