import { Repository } from "typeorm";
import { TClientsSchema } from "../../interfaces/clients";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/clients";
import { clientsSchema } from "../../schemas/clients";

const readAllService = async (): Promise<TClientsSchema> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const clients: Client[] = await clientRepository.find()
  const returnData: TClientsSchema = clientsSchema.parse(clients)

  return returnData
}

export default readAllService