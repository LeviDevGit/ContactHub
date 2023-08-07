import { Repository } from "typeorm";
import { TContactsSchema } from "../../interfaces/contacts";
import Contact from "../../entities/contacts";
import { AppDataSource } from "../../data-source";

const readAllService = async (clientId: number): Promise<Contact[]> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const contact: Contact[] = await contactRepository.findBy({
    client: {
      id: clientId
    }
  })

  return contact
}

export default readAllService