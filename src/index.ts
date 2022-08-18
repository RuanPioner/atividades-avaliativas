import * as express from "express"
import dataSource from "./dataSource"

const app = express()
app.use(express.json())

dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
    
const PORT = process.env.PORT
app.listen(PORT, () => { console.log(`Executando em http://localhost:${PORT}`) })