"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import login from "@/../public/login.svg";
import Input from "@/components/Input";
import AcessImage from "@/components/AcessImage";
import { IDataLogin, onSubmitDataDemo, onSubmitDataLogin } from "./utils";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IDataLogin>({ defaultValues: { email: "", password: "" } });

  return (
    <main className={styles.container}>
      <div className={styles.painel}>
        <AcessImage image={login} />
        <div className={styles.painel_form}>
          <h1>Login</h1>
          <form
            onSubmit={handleSubmit((data) => onSubmitDataLogin(router, data))}
          >
            <Input name={"email"} control={control} placeholder="Email" />
            <Input name={"password"} control={control} placeholder="Senha" />
            <div className={styles.painel_form_button}>
              <button type="submit">PRÓXIMO</button>
              <Link href="/register">CADASTRO</Link>
            </div>
          </form>
          <button
            className={styles.demo_button}
            onClick={() => {
              onSubmitDataDemo(router);
            }}
          >
            Demo Novo Usuário
          </button>
        </div>
      </div>
    </main>
  );
}
