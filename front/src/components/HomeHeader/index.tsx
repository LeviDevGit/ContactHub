import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import expand from "@/../public/expand.svg";

interface iHomeHeaderProps {
  setSignOut: Dispatch<SetStateAction<boolean>>;
  signout: boolean;
}

export default function HomeHeader({ setSignOut, signout }: iHomeHeaderProps) {
  return (
    <header className={styles.container}>
      <h1>Contatos</h1>
      <button
        className={styles.button_name}
        onClick={() => {
          setSignOut(!signout);
        }}
      >
        Nome
        <Image src={expand} alt="Expandir" />
      </button>
      {signout ? (
        <div className={styles.button_signout}>
          <button
            onClick={() => {
              localStorage.clear();
              location.reload();
            }}
          >
            Sair
          </button>
        </div>
      ) : null}
    </header>
  );
}
