"use client"

import { fetchApi } from "@/services/api";
import Link from "next/link"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface IInputProps {
  email: string;
  password: string;
}

interface IToken {
  token: string
}

export default function Login() {
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data: IInputProps) => {
    console.log(data)
    try {
      const response: IToken = await fetchApi("login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
      localStorage.setItem('token', response.token)
      router.push("/")
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label >Email</label>
            <input type="text" {...register("email")} />
          </div>
          <div>
            <label>Senha</label>
            <input type="text" {...register("password")} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Link href="/register">Cadastro</Link>
    </main>
  )
}