"use client";

import { fetchApi } from "@/services/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import styles from "./styles.module.scss";
import Image from "next/image";
import login from "@/../public/login.svg";
import AcessImage from "@/components/AcessImage";

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
    <main className={styles.container}>
      <div className={styles.painel}>
        <AcessImage image={login} />
        <div className={styles.painel_form}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name={"email"} control={control} placeholder="Email" />
            <Input name={"password"} control={control} placeholder="Senha" />
            <div className={styles.painel_form_button}>
              <button type="submit">PRÓXIMO</button>
              <Link href="/register">CADASTRO</Link>
            </div>
          </form>
          <button className={styles.demo_button}>Demo Novo Usuário</button>
        </div>
      </div>
    </main>
  );
}
