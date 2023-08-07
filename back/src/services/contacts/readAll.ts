import { Repository } from "typeorm";
import { TContactsSchema } from "../../interfaces/contacts";
import Contact from "../../entities/contacts";
import { AppDataSource } from "../../data-source";
import { contactsSchema } from "../../schemas/contacts";

const readAllService = async (clientId: number): Promise<TContactsSchema> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const contact: Contact[] = await contactRepository.findBy({
    client: {
      id: clientId
    }
  })

  const returnData: TContactsSchema = contactsSchema.parse(contact)

  return returnData
}

export default readAllService