import { Router } from "express";
import ProductController from "../controllers/ProductController";

const routes = Router()

routes.get("/listAll", ProductController.list)

routes.get("/Find/:id", ProductController.Find)

routes.post("/Add", ProductController.Add)

routes.put("/Edit/:id", ProductController.Update)

export default routes