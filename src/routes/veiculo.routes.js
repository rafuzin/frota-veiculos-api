import { Router } from "express";
import { veiculoServices } from "../src/veiculo.service.js"

export const veiculoRouter = Router

veiculoRouter.get("/", async (req, res) => {
    const veiculos = await veiculoServices.listarVeiculos();
    return res.json(veiculos);
});

veiculoRouter.post("/", async (req, res) => {
    const veiculos = await veiculoServices.CriarVeiculos();
    return res.status(201).json(veiculos);
})