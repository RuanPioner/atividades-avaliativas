import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Venda } from "./venda"

@Entity("tb_cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    fone: string

    @Column()
    email: string

    @OneToMany(() => Venda, (venda) => venda.id)
    vendas: Venda[]

}