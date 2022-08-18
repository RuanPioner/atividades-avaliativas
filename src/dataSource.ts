import { DataSource } from "typeorm"
import { Cliente } from "./entity/cliente"
import { Venda } from "./entity/venda"
import { Carrinho } from "./entity/carrinho"
import { Produto } from "./entity/produto"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    // entities: ["dist/**/*./entity/*.ts"],
    entities: [Cliente, Venda, Carrinho, Produto],
    logging: false,
    synchronize: true,
})

export default dataSource