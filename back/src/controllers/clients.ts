import { Request, Response } from "express";
import createService from "../services/clients/create";
import readAllService from "../services/clients/readAll";
import updateService from "../services/clients/update";
import deleteService from "../services/clients/delete";

const createClient = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await createService(req.body)

  return res.status(201).json(returnData)
}

const readAllClient = async (req: Request, res: Response): Promise<Response> => {
  const returnData = await readAllService()

  return res.json(returnData)
}

const updateClient = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id)
  const returnData = await updateService(id, req.body)

  return res.status(200).json(returnData)
}

const deleteClient = async (req: Request, res: Response): Promise<Response> => {
  const id: number = parseInt(req.params.id)
  await deleteService(id)

  return res.status(204).json()
}

export { createClient, readAllClient, updateClient, deleteClient }