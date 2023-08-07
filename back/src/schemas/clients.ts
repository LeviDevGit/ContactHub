import { z } from 'zod'

const clientSchema = z.object({
  id: z.number(),
  fullName: z.string().max(45),
  email: z.string().max(60),
  password: z.string(),
  telephone: z.string().max(18),
  registerDate: z.date()
})

const clientSchemaReq = clientSchema.omit({
  id: true,
  registerDate: true
})

const clientSchemaRes = clientSchema.omit({ password: true })

const clientsSchema = z.array(clientSchemaRes)

const clientSchemaPart = clientSchemaReq.partial()

export { clientSchema, clientSchemaReq, clientSchemaRes, clientsSchema, clientSchemaPart }