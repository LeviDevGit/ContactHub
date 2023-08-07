import { Router } from "express";
import validateData from "../middlewares/validateData";
import loginSchema from "../schemas/login";
import loginClient from "../controllers/login";

const loginRoutes: Router = Router();

loginRoutes.post("", validateData(loginSchema), loginClient);

export default loginRoutes;