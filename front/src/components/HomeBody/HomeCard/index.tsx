import { IContent } from "@/app/page";
import styles from "./styles.module.scss";
import person from "@/../public/person.svg";
import Image from "next/image";

interface IHomeCardProps {
  contacts: IContent;
}

export default function HomeCard({ contacts }: IHomeCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.box_image}>
        {contacts.profileImage !== "" ? (
          <img
            src={contacts.profileImage}
            alt="Foto de perfil"
            onError={() => {
              contacts.profileImage = "";
            }}
          />
        ) : (
          <Image
            src={person}
            alt="Foto de perfil"
            onError={() => {
              contacts.profileImage = "";
            }}
            width={40}
          />
        )}
      </div>
      <div className={styles.box_text}>
        <h1>{contacts.fullName}</h1>
        <h2>{contacts.email}</h2>
      </div>
      <h3>{contacts.telephone}</h3>
    </div>
  );
}
