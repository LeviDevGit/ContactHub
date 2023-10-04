"use client";

import { fetchApi } from "@/services/api";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import styles from "./styles.module.scss";
import Image from "next/image";
import register from "@/../public/register.svg";
import AcessImage from "@/components/AcessImage";

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
    <main className={styles.container}>
      <div className={styles.painel}>
        <AcessImage image={register} />
        <div className={styles.painel_form}>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name={"fullName"}
              control={control}
              placeholder="Nome Completo"
            />
            <Input name={"email"} control={control} placeholder="Email" />
            <Input name={"password"} control={control} placeholder="Senha" />
            <Input
              name={"telephone"}
              control={control}
              placeholder="Telefone"
            />
            <div className={styles.painel_form_button}>
              <button type="submit">PRÓXIMO</button>
              <Link href="/login">LOGIN</Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
