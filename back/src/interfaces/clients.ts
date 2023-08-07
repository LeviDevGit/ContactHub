import { z } from 'zod';
import { clientSchema, clientSchemaReq, clientSchemaRes, clientsSchema } from '../schemas/clients';
import { DeepPartial } from 'typeorm';

type TClientSchema = z.infer<typeof clientSchema>

type TClientSchemaReq = z.infer<typeof clientSchemaReq>

type TClientSchemaRes = z.infer<typeof clientSchemaRes>

type TClientsSchema = z.infer<typeof clientsSchema>

type TClientSchemaPart = DeepPartial<TClientSchemaReq>

export { TClientSchema, TClientSchemaReq, TClientSchemaRes, TClientsSchema, TClientSchemaPart }