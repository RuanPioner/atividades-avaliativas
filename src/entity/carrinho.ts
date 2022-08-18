import { Entity, Column, ManyToOne, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "./produto"
import { Venda } from "./venda"

@Entity("tb_carrinho")
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    quantidade: number

    @Column()
    preco: string

    @ManyToOne(() => Produto)
    @JoinColumn({name: 'id_produto'})
    produtos: Produto

    @ManyToOne(() => Venda, (venda) => venda.id)
    @JoinColumn({name: "id_venda"})
    vendas: Venda


}