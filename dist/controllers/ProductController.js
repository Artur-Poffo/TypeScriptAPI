"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const Products = [];
exports.default = {
    list(req, res) {
        res.json(Products);
    },
    Find(req, res) {
        const { id } = req.params;
        const Findproduct = Products.find(product => product.id === id);
        if (Findproduct) {
            res.status(200).json(Findproduct);
        }
        else {
            res.status(500).json({ message: "Erro ao encontrar este produto" });
        }
    },
    Add(req, res) {
        const { name, price } = req.body;
        if (name != undefined && price != undefined) {
            Products.push({
                name: name,
                price: price,
                id: (0, crypto_1.randomUUID)()
            });
            res.status(200).json({ message: "Produto Adicionado com sucesso" });
        }
        else {
            res.status(500).json({ message: "Erro ao adicionar este produto" });
        }
    },
    Update(req, res) {
        const { id } = req.params;
        const { name, price } = req.body;
        const productIndex = Products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            res.status(500).json({ message: "Produto não encontrado" });
        }
        else {
            Products[productIndex] = Object.assign(Object.assign({}, Products[productIndex]), { name: name, price: price });
            res.status(200).json({ message: "Produto Editado com sucesso" });
        }
    },
    Delete(req, res) {
        const { id } = req.params;
        const productIndex = Products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            res.status(500).json({ message: "Produto não encontrado" });
        }
        else {
            Products.splice(productIndex, 1);
            res.status(200).json({ message: "Produto deletado com sucesso" });
        }
    }
};
