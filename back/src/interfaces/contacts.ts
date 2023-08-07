import { z } from 'zod';
import { contactSchema, contactSchemaReq, contactSchemaRes, contactsSchema } from '../schemas/contacts';
import { DeepPartial } from 'typeorm';

type TContactSchema = z.infer<typeof contactSchema>

type TContactSchemaReq = z.infer<typeof contactSchemaReq>

type TContactSchemaRes = z.infer<typeof contactSchemaRes>

type TContactsSchema = z.infer<typeof contactsSchema>

type TContactSchemaPart = DeepPartial<TContactSchemaReq>

export { TContactSchema, TContactSchemaReq, TContactSchemaRes, TContactsSchema, TContactSchemaPart }