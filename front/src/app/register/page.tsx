"use client";

import { fetchApi } from "@/services/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";

interface ISubmitDataRegister {
  fullName: string;
  email: string;
  password: string;
  telephone: string;
}

export default function Register() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISubmitDataRegister>({
    defaultValues: { fullName: "", email: "", password: "", telephone: "" },
  });

  const onSubmit = async (data: ISubmitDataRegister) => {
    console.log(data);
    // try {
    //   const response = await fetchApi("clients", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   router.push("/login");
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <main>
      <h1>Cadastro</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name={"fullName"}
            control={control}
            placeholder="Nome Completo"
          />
          <Input name={"email"} control={control} placeholder="Email" />
          <Input name={"password"} control={control} placeholder="Senha" />
          <Input name={"telephone"} control={control} placeholder="Telefone" />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
      <Link href="/login">Login</Link>
    </main>
  );
}
