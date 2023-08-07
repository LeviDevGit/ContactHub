import 'reflect-metadata'
import express, { Application } from 'express'
import { handleErros } from './error'
import clientRoutes from './routes/clients'
import loginRoutes from './routes/login'
import contactsRoutes from './routes/contacts'

const app: Application = express()
app.use(express.json())

app.use("/clients", clientRoutes);
app.use("/login", loginRoutes);
app.use("/clients/contact/", contactsRoutes)

app.use(handleErros)
export default app