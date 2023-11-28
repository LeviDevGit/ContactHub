import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Client from "../../entities/clients";

const deleteService = async (id: number): Promise<void> => {
  const clientRepository: Repository<Client> =
    AppDataSource.getRepository(Client);

  const client: Client | null = await clientRepository.findOneBy({
    id: id,
  });

  await clientRepository.remove(client!);

  return;
};

export default deleteService;
