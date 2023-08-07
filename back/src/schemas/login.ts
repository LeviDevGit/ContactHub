import { z } from "zod"

const loginSchema = z.object({
  email: z.string().max(60),
  password: z.string(),
})

export default loginSchema