import { Repository } from "typeorm"
import Contact from "../../entities/contacts"
import { AppDataSource } from "../../data-source"

const deleteService = async (clientId: number, id: number): Promise<void> => {
  const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

  const contact: Contact | null = await contactRepository.findOneBy({
    id: id,
    client: {
      id: clientId
    }
  })

  await contactRepository.remove(contact!)

  return
}

export default deleteService