"use client"

import { fetchApi } from "@/services/api";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IInputProps {
  fullname: string;
  email: string;
  password: string;
  telephone: string;
}

export default function Register() {
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: IInputProps) => {
    try {
      const response = await fetchApi("clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
      router.push('/login')
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Nome Completo</label>
            <input type="text" {...register("fullName")} />
          </div>
          <div>
            <label >Email</label>
            <input type="text" {...register("email")} />
          </div>
          <div>
            <label>Senha</label>
            <input type="text" {...register("password")} />
          </div>
          <div>
            <label>Telefone</label>
            <input type="text" {...register("telephone")} />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <Link href="/login">Login</Link>
    </main>)
}