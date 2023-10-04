"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import { fetchApi } from "@/services/api";

interface IContent {
  id: number;
  fullName: string;
  email: string;
  telephone: string;
  registerDate: Date;
}

export default function Home() {
  const router = useRouter();
  const [content, setContent] = useState<IContent[]>();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          router.push("/login");
          return;
        }
        const data = await fetchApi<IContent[]>("clients/contact/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    handleSubmit();
  }, []);

  return (
    <main>
      <div className={styles.box}>
        <header className={styles.box_header}>
          <h1>Contact Hub</h1>
          <div>
            <h2>Contatos</h2>
            <h2>Perfil</h2>
          </div>
          <h2>Sair</h2>
        </header>
        <div className={styles.box_body}>
          <div className={styles.box_card}>
            {content
              ? content.map((e) => {
                  return (
                    <div>
                      <span>{e.fullName}</span>
                      <span>{e.email}</span>
                      <span>{e.telephone}</span>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </main>
  );
}
