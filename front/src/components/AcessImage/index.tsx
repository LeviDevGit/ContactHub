import Image from "next/image";
import styles from "./styles.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IAcessImage {
  image: string | StaticImport;
}

export default function AcessImage({ image }: IAcessImage) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={image} alt="Imagem Ilustrativa" width={600} />
      </div>
    </div>
  );
}
