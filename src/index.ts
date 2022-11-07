import express, { urlencoded } from "express"
import routes from "./routes/ApiRoutes"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api", routes)

app.listen(3000, () => console.log("Server Running!"))