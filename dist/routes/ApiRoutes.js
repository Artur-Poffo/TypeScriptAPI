"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const routes = (0, express_1.Router)();
routes.get("/listAll", ProductController_1.default.list);
routes.get("/Find/:id", ProductController_1.default.Find);
routes.post("/Add", ProductController_1.default.Add);
routes.put("/Edit/:id", ProductController_1.default.Update);
exports.default = routes;
