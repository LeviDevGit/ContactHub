import { Repository } from "typeorm";
import { TClientSchemaPart, TClientSchemaRes } from "../../interfaces/clients";
import Client from "../../entities/clients";
import { AppDataSource } from "../../data-source";
import { clientSchemaRes } from "../../schemas/clients";
import { hash } from "bcryptjs";

const updateService = async (
  id: number,
  data: TClientSchemaPart
): Promise<TClientSchemaRes> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const oldClient: Client | null = await clientRepository.findOneBy({
    id: id,
  });

  if (data.password) {
    data.password = await hash(data.password, 10);
  }

  const newClient: Client = clientRepository.create({
    ...oldClient,
    ...data,
  });

  await clientRepository.save(newClient);

  const returnData: TClientSchemaRes = clientSchemaRes.parse(newClient);

  return returnData;
};

export default updateService;
