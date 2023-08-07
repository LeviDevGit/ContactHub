import { Request, Response } from "express";
import createService from "../services/contacts/create";
import readAllService from "../services/contacts/readAll";
import deleteService from "../services/contacts/delete";

const createContact = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await createService(parseInt(res.locals.id), req.body)

  return res.status(201).json(returnData)
}

const readAllContact = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await readAllService(parseInt(res.locals.id))

  return res.json(returnData)
}
// const updateContact = async (req: Request, res: Response): Promise<Response> => {
//   return res.status(200).json(returnData)
// }
const deleteContact = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id)
  await deleteService(parseInt(res.locals.id), id)

  return res.status(204).json()
}

export { createContact, readAllContact, deleteContact }