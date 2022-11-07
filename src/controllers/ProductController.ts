import { Request, Response } from "express"
import { randomUUID } from "crypto"

import IProducts from "../interfaces/ProductInterface"

const Products: Array<IProducts> = []

export default {

  list(req: Request, res: Response) {
    res.json(Products)
  },

  Find(req: Request, res: Response) {
    const { id } = req.params
    const Findproduct = Products.find(product => product.id === id)

    if (Findproduct) {
      res.status(200).json(Findproduct)
    } else {
      res.status(500).json({ message: "Erro ao encontrar este produto" })
    }
  },

  Add(req: Request, res: Response) {
    const { name, price } = req.body

    if (name != undefined && price != undefined) {
      Products.push({
        name: name,
        price: price,
        id: randomUUID()
      })

      res.status(200).json({ message: "Produto Adicionado com sucesso" })
    } else {
      res.status(500).json({ message: "Erro ao adicionar este produto" })
    }
  },

  Update(req: Request, res: Response) {
    const { id } = req.params
    const { name, price } = req.body

    const productIndex = Products.findIndex(product => product.id === id)

    if (productIndex === -1) {
      res.status(500).json({ message: "Produto não encontrado" })

    } else {
      Products[productIndex] = {
        ...Products[productIndex],
        name: name,
        price: price
      }

      res.status(200).json({ message: "Produto Editado com sucesso" })
    }
  },

  Delete(req: Request, res: Response) {
    const { id } = req.params
    const productIndex = Products.findIndex(product => product.id === id)

    if (productIndex === -1) {
      res.status(500).json({ message: "Produto não encontrado" })
    } else {
      Products.splice(productIndex, 1)
      res.status(200).json({ message: "Produto deletado com sucesso" })
    }

  }
}