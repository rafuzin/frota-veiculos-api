import { pool } from "../config/db.js";

class veiculoServices {

    async getTudo() {
        const res = await pool.query('SELECT * FROM veiculos');
        return res.rows;
    }

    async create(dados) {
        const { modelo, marca, ano, placa } = dados;

        const res = await pool.query(
            'INSERT INTO veiculos (modelo, marca, ano, placa) VALUES ($1, $2, $3, $4) RETURNING *',
            [modelo, marca, ano, placa]
        );

        return res.rows[0];
    }
}

export default new veiculoServices();