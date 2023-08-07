import { Router } from "express";
import validateToken from "../middlewares/validateToken";
import validateData from "../middlewares/validateData";
import { contactSchemaReq } from "../schemas/contacts";
import { createContact, deleteContact, readAllContact } from "../controllers/contacts";

const contactsRoutes: Router = Router()

contactsRoutes.post("", validateToken, validateData(contactSchemaReq), createContact)
contactsRoutes.get("", validateToken, readAllContact)
contactsRoutes.patch("/:id", validateToken)
contactsRoutes.delete("/:id", validateToken, deleteContact)

export default contactsRoutes