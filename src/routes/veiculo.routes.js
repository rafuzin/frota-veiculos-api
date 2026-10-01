import express from "express";
import veiculoService from "../services/veiculo.service.js";

const veiculoRouter = express.Router();

veiculoRouter.get("/", async (res) => {
    const veiculos = await veiculoService.getTudo();
    return res.json(veiculos);
});

veiculoRouter.post("/", async (req, res) => {
    const veiculos = await veiculoService.create(req.body);
    return res.status(201).json(veiculos);
});

export default veiculoRouter;