import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { Cliente } from "./cliente"

@Entity("tb_venda")
export class Venda {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: string

    @Column()
    status: string

    @ManyToOne(() => Cliente, (cliente) => cliente.id)
    @JoinColumn({name: "id_cliente"})
    clientes: Cliente

}