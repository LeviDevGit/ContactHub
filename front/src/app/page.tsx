"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchApi } from "@/services/api";
import styles from "./styles.module.scss";
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeBody/HomeSearch";

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
  const [signout, setSignOut] = useState<boolean>(false);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/login");
          return;
        } else {
          const data = await fetchApi<IContent[]>("clients/contact/", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContent(data);
        }
      } catch (error) {}
    };
    handleSubmit();
  }, []);

  return (
    <main>
      <div className={styles.box}>
        <HomeHeader setSignOut={setSignOut} signout={signout} />
        <div className={styles.box_body}>
          <HomeSearch />
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
