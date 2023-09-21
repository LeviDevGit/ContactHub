"use client";

import { fetchApi } from "@/services/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";

interface ISubmitDataLogin {
  email: string;
  password: string;
}

interface IToken {
  token: string;
}

export default function Login() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISubmitDataLogin>({ defaultValues: { email: "", password: "" } });

  const onSubmit = async (data: ISubmitDataLogin) => {
    console.log(data);
    // try {
    //   const response: IToken = await fetchApi("login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   localStorage.setItem("token", response.token);
    //   router.push("/");
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <main>
      <h1>Login</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name={"email"} control={control} placeholder="Email" />
          <Input name={"password"} control={control} placeholder="Senha" />
          <button type="submit">Login</button>
        </form>
      </div>
      <Link href="/register">Cadastro</Link>
    </main>
  );
}
