import Image from "next/image";
import search from "@/../public/search.svg";
import styles from "./styles.module.scss";

export default function HomeSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <input type="text" placeholder="Procurar contatos" />
        <button>
          <Image src={search} alt="Procurar" />
        </button>
      </div>
      <div className={styles.add}>
        <button>Adicionar Contato</button>
      </div>
    </div>
  );
}
