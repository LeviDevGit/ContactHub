import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { fetchApi } from "@/services/api";

interface IHomeAddModal {
  setAddDialog: Dispatch<SetStateAction<boolean>>;
}

interface IContact {
  fullName: string;
  email: string;
  telephone: string;
  profileImage: string | undefined | null;
}

export default function HomeAddModal({ setAddDialog }: IHomeAddModal) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IContact>({
    defaultValues: { fullName: "", email: "", telephone: "", profileImage: "" },
  });

  const onSubmitData = async (data: IContact) => {
    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const response: IContact = await fetchApi("clients/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      setAddDialog(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <dialog open className={styles.container}>
      <div className={styles.interface}>
        <div className={styles.interface_header}>
          <h1>Adicionar contato</h1>
          <button
            onClick={() => {
              setAddDialog(false);
            }}
          >
            x
          </button>
        </div>
        <div className={styles.interface_body}>
          <form onSubmit={handleSubmit(onSubmitData)}>
            <div>
              <label>Nome</label>
              <Input name={"fullName"} control={control} placeholder="Nome" />
            </div>
            <div>
              <label>Email</label>
              <Input name={"email"} control={control} placeholder="Email" />
            </div>
            <div>
              <label>Telefone</label>
              <Input
                name={"telephone"}
                control={control}
                placeholder="Telefone"
              />
            </div>
            <div>
              <label>Foto de perfil (Opicional)</label>
              <Input
                name={"profileImage"}
                control={control}
                placeholder="Foto de perfil"
              />
            </div>
            <div className={styles.interface_footer}>
              <button
                className={styles.interface_footer_cancel}
                onClick={() => {
                  setAddDialog(false);
                }}
              >
                Cancelar
              </button>
              <button className={styles.interface_footer_create} type="submit">
                Criar contato
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
