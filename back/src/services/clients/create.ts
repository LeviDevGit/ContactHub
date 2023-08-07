import { Repository } from "typeorm"
import Client from "../../entities/clients"
import { AppDataSource } from "../../data-source"
import { TClientSchemaReq, TClientSchemaRes } from "../../interfaces/clients"
import { clientSchemaRes } from "../../schemas/clients"

const createService = async (data: TClientSchemaReq): Promise<TClientSchemaRes> => {
  const clientRepository: Repository<Client> = AppDataSource.getRepository(Client)

  const client: Client = clientRepository.create(data)
  await clientRepository.save(client)

  const returnData: TClientSchemaRes = clientSchemaRes.parse(client)

  return returnData;
}

export default createService;