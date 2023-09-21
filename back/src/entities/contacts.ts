import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Client from "./clients";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 60, unique: true })
  email: string;

  @Column({ type: "varchar", length: 18 })
  telephone: string;

  @Column({ type: "varchar", length: 120, nullable: true })
  profileImage: string | null;

  @CreateDateColumn()
  registerDate: Date | string;

  @ManyToOne(() => Client)
  client: Client;
}

export default Contact;
