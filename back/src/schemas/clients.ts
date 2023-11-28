import { z } from "zod";

const clientSchema = z.object({
  id: z.number(),
  fullName: z.string().max(45).min(1),
  email: z.string().max(60).min(1),
  password: z.string().min(1),
  telephone: z.string().max(18).min(1),
  registerDate: z.date(),
});

const clientSchemaReq = clientSchema.omit({
  id: true,
  registerDate: true,
});

const clientSchemaRes = clientSchema.omit({ password: true });

const clientsSchema = z.array(clientSchemaRes);

const clientSchemaPart = clientSchemaReq.partial();

export {
  clientSchema,
  clientSchemaReq,
  clientSchemaRes,
  clientsSchema,
  clientSchemaPart,
};
