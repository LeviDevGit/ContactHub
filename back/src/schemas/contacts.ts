import { z } from 'zod'

const contactSchema = z.object({
  id: z.number(),
  fullName: z.string().max(45),
  email: z.string().max(60),
  password: z.string(),
  telephone: z.string().max(18),
  registerDate: z.date()
})

const contactSchemaReq = contactSchema.omit({
  id: true,
  registerDate: true
})

const contactSchemaRes = contactSchema.omit({ password: true })

const contactsSchema = z.array(contactSchemaRes)

const contactSchemaPart = contactSchemaReq.partial()

export { contactSchema, contactSchemaReq, contactSchemaRes, contactsSchema, contactSchemaPart }