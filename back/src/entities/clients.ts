import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcryptjs";
import Contact from "./contacts";

@Entity('clients')
class Client {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 45 })
  fullName: string;

  @Column({ type: 'varchar', length: 60, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @Column({ type: 'varchar', length: 18 })
  telephone: string;

  @CreateDateColumn()
  registerDate: Date | string;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

export default Client