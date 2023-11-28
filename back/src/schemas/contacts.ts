import { z } from "zod";

const contactSchema = z.object({
  id: z.number(),
  fullName: z.string().max(45).min(1),
  email: z.string().max(60).default(""),
  telephone: z.string().max(18).min(1),
  profileImage: z.string().max(120).nullable().default(""),
  registerDate: z.date(),
});

const contactSchemaReq = contactSchema.omit({
  id: true,
  registerDate: true,
});

const contactSchemaRes = contactSchema.omit({});

const contactsSchema = z.array(contactSchemaRes);

const contactSchemaPart = contactSchemaReq.partial();

export {
  contactSchema,
  contactSchemaReq,
  contactSchemaRes,
  contactsSchema,
  contactSchemaPart,
};
